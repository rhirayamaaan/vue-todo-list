import { Todo, TodoId } from "../domain/Todo";
import { TodoPresenter } from "../presenter/Todo";
import { TodoRepository } from "../repository/Todo";

export class TodoUseCase {
  constructor(
    private readonly repository: TodoRepository,
    private readonly presenter: TodoPresenter
  ) {}

  public findAll = (): void => {
    const todos = this.repository.findAll();
    this.presenter.putAll(todos);
  };

  public add = (title: string): void => {
    this.repository.add(title);
    const todos = this.repository.findAll();
    this.presenter.putAll(todos);
  };

  public update = (todo: Todo): void => {
    this.repository.update(todo);
    const todos = this.repository.findAll();
    this.presenter.putAll(todos);
  };

  public delete = (id: TodoId): void => {
    this.repository.delete(id);
    const todos = this.repository.findAll();
    this.presenter.putAll(todos);
  };
}
