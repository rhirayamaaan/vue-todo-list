import { Todo, TodoId } from "@/modules/domain/Todo";
import { TodoUseCase } from "@/modules/usecase/Todo";
import { reactive } from "vue";

export const useTodoList = (usecase: TodoUseCase) => {
  const addingValues = reactive<{
    title?: string;
  }>({
    title: undefined,
  });

  const addingInput = (event: Event) => {
    if (
      !(event instanceof InputEvent) ||
      !(event.target instanceof HTMLInputElement)
    ) {
      return;
    }

    addingValues.title = event.target.value;
  };

  const addItem = () => {
    const { title } = addingValues;
    if (!title) {
      return;
    }
    usecase.add(title);
    addingValues.title = undefined;
  };

  const updateItem = (id: string, title: string, completed: boolean) => {
    const todoId = new TodoId(id);
    const todo = new Todo(todoId, title, completed);
    usecase.update(todo);
  };

  const deleteItem = (id: string) => {
    const todoId = new TodoId(id);
    usecase.delete(todoId);
  };

  return {
    addItem,
    updateItem,
    deleteItem,
    adding: {
      values: addingValues,
      input: addingInput,
    },
  };
};
