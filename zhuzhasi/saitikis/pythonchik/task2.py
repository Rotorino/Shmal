def check_empty(text):
    if text == "":
        raise ValueError("Строка пустая!")
    print(f"Строка: {text}")


def main():
    text = input("Введите текст: ")
    try:
        check_empty(text)
    except ValueError as e:
        print(f"Ошибка: {e}")


main()
