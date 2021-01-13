import { createStore } from 'vuex'
import { auth } from './auth.module';

var store = createStore({
  modules: {
    auth
  }
});

export default store;