<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <TodoListContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoListContainer from "./containers/TodoList/index.vue";
import "destyle.css/destyle.min.css";

import { Modules } from "./modules";

export default defineComponent({
  name: "App",
  components: {
    TodoListContainer,
  },
  setup() {
    Modules.get().setup();
  },
});
</script>

<style>
:root {
  font: 16px/1.8 Helvetica, Arial, Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans CJK JP", sans-serif;
  color: #222;
}
</style>
