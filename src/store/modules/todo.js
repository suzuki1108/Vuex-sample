const state = () => ({
  todoItems: [
    {
      id: 1,
      title: "foo",
      content: "bar",
      completed: false,
    },
  ],
});

const getters = {};

const actions = {
  async fetchTodoItems({ commit }) {
    const todoItems = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "foo",
            content: "bar",
            completed: false,
          },
          {
            id: 2,
            title: "foo2",
            content: "bar2",
            completed: true,
          },
        ]);
      }, 1000);
    });
    commit("setTodoItems", todoItems);
  },
};

const mutations = {
  setTodoItems(state, todoItems) {
    state.todoItems = todoItems;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
