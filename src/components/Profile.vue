<template>
  <h2>profile store</h2>
  <div v-for="profile in profiles" :key="profile.id">
    <p>{{ profile.name }}</p>
    <p>{{ profile.age }}</p>
  </div>
  <button @click="fetchProfile">fetchProfile</button>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const profiles = computed(() => store.state.profile.profiles);

    const fetchProfile = async () => {
      await store.dispatch("profile/fetchProfiles");
    };

    return {
      profiles,
      fetchProfile,
    };
  },
});
</script>
