class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

    def study(self):
        print("Студент учится")


class Undergraduate(Student):
    def study(self):
        print("Бакалавр усердно учится")


class Graduate(Student):
    def study(self):
        print("Магистр углубляется в исследования")


if __name__ == "__main__":
    u = Undergraduate("Иван", "U001")
    g = Graduate("Мария", "G001")

    u.study()
    g.study()
