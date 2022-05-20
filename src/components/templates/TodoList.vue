<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  todos: {
    id: string;
    title: string;
    compolete?: boolean;
  }[];
  addItem: () => void;
  deleteItem: (id: string) => void;
  adding: {
    values: {
      title?: string;
    };
    input: (event: Event) => void;
  };
}

defineProps<Props>();
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoList",
});
</script>

<template>
  <div class="todoList">
    <div class="todoList__adding">
      <div class="todoList__addingHeader">
        <h2 class="todoList__addingTitle">Add new item</h2>
      </div>
      <div class="todoList__addingItem">
        <p>
          <input
            type="text"
            :value="adding.values.title"
            @input="adding.input"
            class="todoList__addingInput"
          />
        </p>
        <p>
          <button @click="addItem" class="todoList__addingButton">Add</button>
        </p>
      </div>
    </div>
    <div class="todoList__main">
      <ul class="todoList__items">
        <li v-for="todo in todos" :key="todo.id" class="todoList__item">
          <!-- <p><input type="checkbox" v-model="todo.compl" /></p> -->
          <p class="todoList__itemTitle">{{ todo.title }}</p>
          <p class="todoList__itemDelete">
            <button
              @click="deleteItem(todo.id)"
              class="todoList__itemDeleteButton"
            >
              delete
            </button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scope>
.todoList {
  margin: 0 auto;
  padding: 16px;
  max-width: 800px;
}

.todoList__adding {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #eaeaea;
}

.todoList__addingTitle {
  font-weight: bold;
  font-size: 18px;
}

.todoList__addingItem {
  display: flex;
  margin-top: 16px;
}

.todoList__addingInput {
  border: 1px solid #ccc;
  padding: 0 16px;
  border-radius: 4px 0 0 4px;
  height: 40px;
  background-color: #fff;
}

.todoList__addingInput:focus {
  border-color: #4510d5;
  outline: 0;
}

.todoList__addingButton {
  padding: 0 16px;
  border-radius: 0 4px 4px 0;
  background-color: #4510d5;
  color: #fff;
  line-height: 40px;
  font-weight: bold;
}

.todoList__main {
  margin-top: 32px;
}

.todoList__item {
  display: flex;
  padding: 12px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}

.todoList__item + .todoList__item {
  margin-top: -1px;
}

.todoList__itemTitle {
  flex-grow: 1;
}

.todoList__itemDelete {
  flex-shrink: 1;
}

.todoList__itemDeleteButton {
  padding: 0 16px;
  background-color: #d90000;
  color: #fff;
  line-height: 32px;
  border-radius: 4px;
}
</style>
