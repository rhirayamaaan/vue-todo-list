export class TodoId {
  constructor(public readonly value: string) {}
}

export class Todo {
  constructor(
    public readonly id: TodoId,
    public readonly title: string,
    public readonly completed: boolean = false
  ) {}
}

export class Todos extends Array<Todo> {
  constructor(...todos: Todo[]) {
    super(...todos);
  }
}
