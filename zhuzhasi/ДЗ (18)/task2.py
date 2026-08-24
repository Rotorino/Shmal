def check_empty(text):
    if text == "":
        raise ValueError("Строка пустая!")
    print(f"Строка: {text}")


try:
    # Запрос текста
    user_text = input("Введите текст: ")
    
    # Вызов функц
    check_empty(user_text)
    
except ValueError as e:
    print(f"Ошибка: {e}")