<template>
  <Todo />
  <Profile />
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Todo from "./components/Todo.vue";
import Profile from "./components/Profile.vue";

export default defineComponent({
  components: {
    Todo,
    Profile,
  },
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
