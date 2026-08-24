import random
import string

class PasswordGenerator:
    def __init__(self):
        self.chars = list(string.ascii_letters + string.digits + string.punctuation)

    def generate(self, length):
        if length < 4:
            raise ValueError("Длина должна быть не менее 4 символов")
            
        password_list = [
            random.choice(string.ascii_lowercase),
            random.choice(string.ascii_uppercase),
            random.choice(string.digits),
            random.choice(string.punctuation)
        ]
        
        password_list += random.choices(self.chars, k=length - 4)
        random.shuffle(password_list)
        
        return "".join(password_list)

if __name__ == "__main__":
    generator = PasswordGenerator()
    print(generator.generate(12))