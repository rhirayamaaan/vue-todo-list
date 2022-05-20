import {
  getCurrentInstance,
  inject,
  InjectionKey,
  provide,
  reactive,
} from "vue";
import { TodoPresenter } from "./presenter/Todo";
import { TodoRepository } from "./repository/Todo";
import { TodoState } from "./state/todo";
import { TodoUseCase } from "./usecase/Todo";

export class Keys {
  static readonly TodoState: InjectionKey<TodoState> = Symbol("todoState");
  static readonly TodoUseCase: InjectionKey<TodoUseCase> = Symbol(
    "todoUseCase"
  );
}

export class Modules {
  private static readonly instance: Modules = new Modules();
  public static get(): Modules {
    return new Modules();
  }

  private todoState?: TodoState;

  private constructor() {
    // do nothing
  }

  public setup(): void {
    provide(Keys.TodoState, reactive(new TodoState()));

    this.todoState = this.get(Keys.TodoState);

    if (!this.todoState) {
      throw new Error("todoState is not null");
    }

    provide(
      Keys.TodoUseCase,
      new TodoUseCase(new TodoRepository(), new TodoPresenter(this.todoState))
    );
  }

  private get<T>(key: InjectionKey<T>): T | undefined {
    const vm = getCurrentInstance() as any;
    return inject(key) || vm?.provides[key as any];
  }
}
