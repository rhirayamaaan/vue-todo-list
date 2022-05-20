import { Todos } from "../domain/Todo";
import { TodoState, TodoUnit } from "../state/todo";

export class TodoPresenter {
  constructor(private readonly state: TodoState) {}

  public putAll = (todos: Todos): void => {
    console.log("todos", todos);
    this.state.items = todos.map(
      (todo) => new TodoUnit(todo.id.value, todo.title, todo.completed)
    );
  };
}
