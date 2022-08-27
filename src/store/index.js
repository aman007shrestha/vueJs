import { createStore } from 'vuex'
import todos from './modules/todos'

// create Store
export default createStore({
  modules: {
    todos,
  },
})
