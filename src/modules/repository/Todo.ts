import { Todo, TodoId, Todos } from "@/modules/domain/Todo";
import { getUniqueString } from "@/utils/getUniqueString";

interface TodoRepositoryInterface {
  findAll(): Todos;
  find(id: TodoId): Todo | undefined;
}

export class TodoRepository implements TodoRepositoryInterface {
  constructor(private todos: Todos = []) {}

  public findAll(): Todos {
    return this.todos;
  }

  public find(id: TodoId): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  public add(title: string): void {
    const id = new TodoId(getUniqueString());
    this.todos = [...this.todos, new Todo(id, title)];
  }

  public update(target: Todo): void {
    this.todos = this.todos.map((todo) =>
      todo.id.value === target.id.value ? target : todo
    );
  }

  public delete(id: TodoId): void {
    this.todos = this.todos.filter((todo) => todo.id.value !== id.value);
  }
}
