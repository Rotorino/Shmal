class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)

    def view_tasks(self):
        for index, task in enumerate(self.tasks):
            print(f"{index + 1}. {task}")

    def remove_task(self, task_index):
        index = task_index - 1
        if 0 <= index < len(self.tasks):
            self.tasks.pop(index)

if __name__ == "__main__":
    todo = ToDoList()
    
    todo.add_task("Сделать домашнее задание")
    todo.add_task("Прочитать книгу")
    todo.add_task("Купить продукты")
    
    todo.view_tasks()
    
    todo.remove_task(2)
    
    todo.view_tasks()