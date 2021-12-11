<template>
  <div>
    {{ state.todos }}
    <p><input type="text" v-model="state.newTodo.name" /></p>
    <p><button @click="addTodo">Add</button></p>
    <ul>
      <li v-for="todo in state.todos" :key="todo.id" class="todoList__item">
        <p><input type="checkbox" v-model="todo.isDone" /></p>
        <p>{{ todo.name }}</p>
        <p><button @click="removeTodo(todo.id)">Remove</button></p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { reactive } from "@vue/reactivity";

type TodoType = {
  id: number;
  name: string;
  isDone: boolean;
};

type StateType = {
  currentId: TodoType["id"];
  todos: TodoType[];
  newTodo: Omit<TodoType, "id">;
};

const initialTodo = {
  name: "",
  isDone: false,
};

export default defineComponent({
  setup() {
    const state = reactive<StateType>({
      currentId: -1,
      todos: [],
      newTodo: {
        name: "",
        isDone: false,
      },
    });

    const addTodo = () => {
      const { todos, newTodo } = state;

      if (!newTodo.name) {
        return;
      }

      const id = state.currentId + 1;

      if (todos.length > 0) {
        state.todos = [...todos, { id, ...newTodo }];
      } else {
        state.todos = [
          {
            id,
            ...newTodo,
          },
        ];
      }

      state.currentId = id;
    };

    const removeTodo = (id: TodoType["id"]) => {
      const { todos } = state;

      state.todos = todos.filter((todo) => todo.id !== id);
    };

    watch(
      () => state.todos,
      (todos, prevTodos) => {
        if (todos.length > prevTodos.length) {
          state.newTodo = {
            ...initialTodo,
          };
        }
      },
      {
        deep: true,
      }
    );

    return {
      state,
      addTodo,
      removeTodo,
    };
  },
});
</script>

<style scoped>
.todoList__item {
  background-color: #ddd;
}
</style>
