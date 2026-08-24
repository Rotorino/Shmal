import sys
import calendar
from datetime import date

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except (AttributeError, ValueError):
    pass


def even_fridays(year: int, month: int):
    last_day = calendar.monthrange(year, month)[1]
    fridays = []
    for day in range(1, last_day + 1):
        d = date(year, month, day)
        if d.weekday() == calendar.FRIDAY:
            fridays.append(d)
    return fridays[1::2]


def read_month_year():
    if len(sys.argv) == 3:
        parts = sys.argv[1:3]
    else:
        raw = input("Введите месяц и год (например, 12 2025): ").strip().split()
        if len(raw) != 2:
            raise SystemExit("Ожидается два значения: месяц и год.")
        parts = raw

    try:
        month, year = int(parts[0]), int(parts[1])
    except ValueError:
        raise SystemExit("Месяц и год должны быть целыми числами.")

    if not (1 <= month <= 12):
        raise SystemExit(f"Месяц должен быть в диапазоне 1..12 (получено {month}).")
    if year < 1:
        raise SystemExit(f"Год должен быть положительным (получено {year}).")
    return month, year


def main():
    month, year = read_month_year()
    days = even_fridays(year, month)
    if not days:
        print("В этом месяце чётных пятниц не нашлось.")
        return
    for d in days:
        print(f"День рождения в этом месяце: {d.strftime('%d.%m.%Y')}")


if __name__ == "__main__":
    main()
