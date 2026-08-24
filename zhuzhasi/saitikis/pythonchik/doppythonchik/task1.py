def safe_divide(a, b):
    if b == 0:
        raise ZeroDivisionError("На ноль делить нельзя!")
    return a / b


def main():
    a = float(input("Введите делимое: "))
    b = float(input("Введите делитель: "))
    try:
        result = safe_divide(a, b)
        print(result)
    except ZeroDivisionError as e:
        print(f"Ошибка: {e}")


main()
