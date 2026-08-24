class Vehicle:
    def __init__(self, speed):
        self.speed = speed

    def move(self):
        print("Транспортное средство движется")


class Car(Vehicle):
    def __init__(self, speed, fuel_type):
        super().__init__(speed)
        self.fuel_type = fuel_type

    def move(self):
        print("Автомобиль мчится по дороге")


class Bike(Vehicle):
    def __init__(self, speed, gear_count):
        super().__init__(speed)
        self.gear_count = gear_count

    def move(self):
        print("Велосипед едет по тропинке")


if __name__ == "__main__":
    c = Car(120, "бензин")
    b = Bike(25, 21)

    c.move()
    b.move()
