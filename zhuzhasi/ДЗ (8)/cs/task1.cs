using System;

class Student
{
    protected string name;
    protected string studentId;

    public Student(string name, string studentId)
    {
        this.name = name;
        this.studentId = studentId;
    }

    public virtual void Study()
    {
        Console.WriteLine("Студент учится");
    }
}

class Undergraduate : Student
{
    public Undergraduate(string name, string studentId) : base(name, studentId) {}

    public override void Study()
    {
        Console.WriteLine("Бакалавр усердно учится");
    }
}

class Graduate : Student
{
    public Graduate(string name, string studentId) : base(name, studentId) {}

    public override void Study()
    {
        Console.WriteLine("Магистр углубляется в исследования");
    }
}

class Task1
{
    static void Main()
    {
        Undergraduate u = new Undergraduate("Иван", "U001");
        Graduate g = new Graduate("Мария", "G001");

        u.Study();
        g.Study();
    }
}
