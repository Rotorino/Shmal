class Food:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"Я ем {self.name}")


class Fruit(Food):
    def __init__(self, name, sweetness):
        super().__init__(name)
        self.sweetness = sweetness

    def eat(self):
        print(f"Я ем сладкий {self.name}")


class Vegetable(Food):
    def __init__(self, name, color):
        super().__init__(name)
        self.color = color

    def eat(self):
        print(f"Я ем {self.color} {self.name}")


if __name__ == "__main__":
    f = Fruit("банан", 8)
    v = Vegetable("огурец", "зелёный")

    f.eat()
    v.eat()
