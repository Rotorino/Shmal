#include <iostream>
#include <string>

class Student {
protected:
    std::string name;
    std::string student_id;

public:
    Student(const std::string& name, const std::string& student_id)
        : name(name), student_id(student_id) {}

    virtual void study() const {
        std::cout << "Студент учится" << std::endl;
    }

    virtual ~Student() = default;
};

class Undergraduate : public Student {
public:
    Undergraduate(const std::string& name, const std::string& student_id)
        : Student(name, student_id) {}

    void study() const override {
        std::cout << "Бакалавр усердно учится" << std::endl;
    }
};

class Graduate : public Student {
public:
    Graduate(const std::string& name, const std::string& student_id)
        : Student(name, student_id) {}

    void study() const override {
        std::cout << "Магистр углубляется в исследования" << std::endl;
    }
};

int main() {
    Undergraduate u("Иван", "U001");
    Graduate g("Мария", "G001");

    u.study();
    g.study();

    return 0;
}
