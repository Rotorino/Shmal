def safe_divide(a, b):
    if b == 0:
        raise ZeroDivisionError("На ноль делить нельзя!")
    return a / b


try:
    # Запрос чисел
    a = float(input("Введите делимое: "))
    b = float(input("Введите делитель: "))
    
    # Вызов функц
    result = safe_divide(a, b)
    print(f"Результат деления: {result}")
    
except ZeroDivisionError as e:
    print(f"Ошибка: {e}")
except ValueError:
    print("Ошибка: Введите корректные числа!")