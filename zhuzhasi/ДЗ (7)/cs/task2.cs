using System;

class Vehicle
{
    protected int speed;

    public Vehicle(int speed)
    {
        this.speed = speed;
    }

    public virtual void Move()
    {
        Console.WriteLine("Транспортное средство движется");
    }
}

class Car : Vehicle
{
    private string fuelType;

    public Car(int speed, string fuelType) : base(speed)
    {
        this.fuelType = fuelType;
    }

    public override void Move()
    {
        Console.WriteLine("Автомобиль мчится по дороге");
    }
}

class Bike : Vehicle
{
    private int gearCount;

    public Bike(int speed, int gearCount) : base(speed)
    {
        this.gearCount = gearCount;
    }

    public override void Move()
    {
        Console.WriteLine("Велосипед едет по тропинке");
    }
}

class Task2
{
    static void Main()
    {
        Car c = new Car(120, "бензин");
        Bike b = new Bike(25, 21);

        c.Move();
        b.Move();
    }
}
