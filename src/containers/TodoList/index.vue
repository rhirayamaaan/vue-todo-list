<script lang="ts">
import { Keys } from "@/modules";
import { defineComponent, inject } from "vue";

import { useTodoList } from "./hooks/useTodoList";
import TodoList from "@/components/templates/TodoList.vue";

export default defineComponent({
  components: { TodoList },
  name: "TodoListContainer",
  setup() {
    const state = inject(Keys.TodoState);
    const usecase = inject(Keys.TodoUseCase);

    if (!state || !usecase) {
      throw new Error("TodoListContainer: state or usecase is not found");
    }

    const props = useTodoList(usecase);

    return {
      state,
      ...props,
    };
  },
});
</script>

<template>
  <TodoList
    :todos="state.items"
    :add-item="addItem"
    :delete-item="deleteItem"
    :adding="adding"
  />
</template>
