file = None
try:
    c = float(input("Введите температуру в Цельсиях: "))
    f = c * 9 / 5 + 32
    file = open("result.txt", "w", encoding="utf-8")
    file.write(f"{c}°C = {f}°F\n")
    print("Результат записан в файл result.txt")
    print(f"{c}°C = {f}°F")
except ValueError:
    print("Ошибка: введите число!")
except PermissionError:
    print("Ошибка: нет прав на запись в файл!")
except (IOError, OSError):
    print("Ошибка ввода-вывода!")
finally:
    if file is not None:
        file.close()
    print("Попытка конвертации завершена")
