def next_permutation(arr):

    n = len(arr)
    
    # Самый правый самый меньший последующего
    i = n - 2
    while i >= 0 and arr[i] >= arr[i + 1]:
        i -= 1
    
    if i < 0:
        return False
    
    # Самый правый >arr[i]
    j = n - 1
    while arr[j] <= arr[i]:
        j -= 1
    
    # Шаг 3: Поменять их местами
    arr[i], arr[j] = arr[j], arr[i]
    
    # Развёртка суффикса
    left, right = i + 1, n - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return True


def has_adjacent_duplicates(arr):
    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            return True
    return False


def generate_anagrams_next_permutation(word):
    result = set()
    
    chars = sorted(list(word))
    
    while True:
        # Проверяем текущую перестановку
        if not has_adjacent_duplicates(chars):
            result.add(''.join(chars))
        
        # Получаем следующую перестановку
        if not next_permutation(chars):
            break
    
    return result


# Тестик
word = input("Введите слово: ")
anagrams = generate_anagrams_next_permutation(word)

print(f"\nНайдено анаграмм: {len(anagrams)}")
print("Первые 20 анаграмм:")
for i, anagram in enumerate(sorted(list(anagrams))[:20], 1):
    print(f"{i}. {anagram}")
input("\nНажмите Enter для выхода...")