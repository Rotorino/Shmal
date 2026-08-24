#include <iostream>
#include <string>

class Food {
protected:
    std::string name;

public:
    Food(const std::string& name) : name(name) {}

    virtual void eat() const {
        std::cout << "Я ем " << name << std::endl;
    }

    virtual ~Food() = default;
};

class Fruit : public Food {
private:
    int sweetness;

public:
    Fruit(const std::string& name, int sweetness)
        : Food(name), sweetness(sweetness) {}

    void eat() const override {
        std::cout << "Я ем сладкий " << name << std::endl;
    }
};

class Vegetable : public Food {
private:
    std::string color;

public:
    Vegetable(const std::string& name, const std::string& color)
        : Food(name), color(color) {}

    void eat() const override {
        std::cout << "Я ем " << color << " " << name << std::endl;
    }
};

int main() {
    Fruit f("банан", 8);
    Vegetable v("огурец", "зелёный");

    f.eat();
    v.eat();

    return 0;
}
