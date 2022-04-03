<template>
  <h2>todo store</h2>
  <div v-for="item in todoItems" :key="item.id">
    <p>{{ item.title }}</p>
    <p>{{ item.content }}</p>
    <p>{{ item.completed ? "完了" : "-" }}</p>
  </div>
  <button @click="fetchTodoItems">fetchTodoItems</button>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const todoItems = computed(() => store.state.todo.todoItems);

    const fetchTodoItems = async () => {
      await store.dispatch("todo/fetchTodoItems");
    };

    return {
      todoItems,
      fetchTodoItems,
    };
  },
});
</script>
