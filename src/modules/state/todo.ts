export class TodoUnit {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly completed: boolean,
    public readonly editingTitle?: string
  ) {}
}

export class TodoState {
  constructor(public items: TodoUnit[] = []) {}
}
