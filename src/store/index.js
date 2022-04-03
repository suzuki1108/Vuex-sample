import { createLogger, createStore } from "vuex";
import todo from "./modules/todo";
import profile from "./modules/profile";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    todo,
    profile,
  },
  // debug時のログ出力設定
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
