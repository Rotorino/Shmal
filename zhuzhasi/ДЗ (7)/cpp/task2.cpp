#include <iostream>
#include <string>

class Vehicle {
protected:
    int speed;

public:
    Vehicle(int speed) : speed(speed) {}

    virtual void move() const {
        std::cout << "Транспортное средство движется" << std::endl;
    }

    virtual ~Vehicle() = default;
};

class Car : public Vehicle {
private:
    std::string fuel_type;

public:
    Car(int speed, const std::string& fuel_type)
        : Vehicle(speed), fuel_type(fuel_type) {}

    void move() const override {
        std::cout << "Автомобиль мчится по дороге" << std::endl;
    }
};

class Bike : public Vehicle {
private:
    int gear_count;

public:
    Bike(int speed, int gear_count)
        : Vehicle(speed), gear_count(gear_count) {}

    void move() const override {
        std::cout << "Велосипед едет по тропинке" << std::endl;
    }
};

int main() {
    Car c(120, "бензин");
    Bike b(25, 21);

    c.move();
    b.move();

    return 0;
}
