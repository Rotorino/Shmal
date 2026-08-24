import subprocess
import sys
from datetime import date, datetime, timedelta

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except (AttributeError, ValueError):
    pass

TARGET_TIME = "15:30"


def _minute_window(yesterday: date, hhmm: str):
    h, m = map(int, hhmm.split(":"))
    start = datetime.combine(yesterday, datetime.min.time()).replace(hour=h, minute=m)
    return start, start + timedelta(minutes=1)


def _powershell_query(start: datetime, end: datetime):
    start_iso = start.strftime("%Y-%m-%dT%H:%M:%S")
    end_iso = end.strftime("%Y-%m-%dT%H:%M:%S")

    template = r"""
$ErrorActionPreference = 'SilentlyContinue'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
$start = [datetime]::ParseExact('__START__', 'yyyy-MM-ddTHH:mm:ss', $null)
$end   = [datetime]::ParseExact('__END__',   'yyyy-MM-ddTHH:mm:ss', $null)
$events = Get-WinEvent -FilterHashtable @{
    LogName   = 'Security'
    Id        = 4624
    StartTime = $start
    EndTime   = $end
}
if ($events) {
    $events | ForEach-Object {
        $xml = [xml]$_.ToXml()
        $xml.Event.EventData.Data |
            Where-Object { $_.Name -eq 'TargetUserName' } |
            ForEach-Object { $_.'#text' }
    }
}
"""
    script = template.replace("__START__", start_iso).replace("__END__", end_iso)

    try:
        completed = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=60,
        )
    except FileNotFoundError:
        print("PowerShell не найден — скрипт предназначен для Windows.",
              file=sys.stderr)
        return None
    except subprocess.TimeoutExpired:
        print("Превышено время ожидания PowerShell.", file=sys.stderr)
        return None

    if completed.stderr.strip():
        sys.stderr.write(completed.stderr.strip() + "\n")
    return completed.stdout


def get_logon_users(hhmm: str = TARGET_TIME):
    yesterday = date.today() - timedelta(days=1)
    start, end = _minute_window(yesterday, hhmm)

    stdout = _powershell_query(start, end)
    if stdout is None:
        return [], start, end

    names = [line.strip() for line in stdout.splitlines() if line.strip()]
    users = sorted({n for n in names if not n.endswith("$")})
    return users, start, end


def main():
    hhmm = sys.argv[1] if len(sys.argv) > 1 else TARGET_TIME
    users, start, end = get_logon_users(hhmm)

    window = f"{start.strftime('%d.%m.%Y %H:%M')}–{end.strftime('%H:%M')}"
    print("Цифровой детектив — поиск пользователей, входивших в систему")
    print(f"Анализируемое окно (события ID 4624): {window}\n")

    if not users:
        print("За эту минуту событий входа (ID 4624) не найдено.")
        print("Если журнал Security не читается — запустите скрипт от имени "
              "администратора.")
        return

    print("Пользователи, входившие в систему в указанную минуту:")
    for index, name in enumerate(users, 1):
        print(f"  {index}. {name}")


if __name__ == "__main__":
    main()
