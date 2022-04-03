const state = () => ({
  profiles: [
    {
      id: 1,
      name: "name",
      age: 28,
    },
  ],
});

const getters = {};

const actions = {
  async fetchProfiles({ commit }) {
    // 擬似的に非同期処理を作成
    const profiles = await new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: 2,
            name: "name2",
            age: 30,
          },
        ]);
      }, 1000)
    );

    commit("setProfile", profiles);
  },
};

const mutations = {
  setProfile(state, profiles) {
    state.profiles = profiles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
