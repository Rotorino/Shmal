using System;

class Food
{
    protected string name;

    public Food(string name)
    {
        this.name = name;
    }

    public virtual void Eat()
    {
        Console.WriteLine($"Я ем {name}");
    }
}

class Fruit : Food
{
    private int sweetness;

    public Fruit(string name, int sweetness) : base(name)
    {
        this.sweetness = sweetness;
    }

    public override void Eat()
    {
        Console.WriteLine($"Я ем сладкий {name}");
    }
}

class Vegetable : Food
{
    private string color;

    public Vegetable(string name, string color) : base(name)
    {
        this.color = color;
    }

    public override void Eat()
    {
        Console.WriteLine($"Я ем {color} {name}");
    }
}

class Task3
{
    static void Main()
    {
        Fruit f = new Fruit("банан", 8);
        Vegetable v = new Vegetable("огурец", "зелёный");

        f.Eat();
        v.Eat();
    }
}
