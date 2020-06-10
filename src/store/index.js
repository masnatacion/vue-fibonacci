import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    fibonacci: ""
  },
  mutations:{
    setSequence(state, sequence){
      let me = this;
      state.fibonacci = Vue._.last(sequence);
    }
  },

  actions: {

  }
});
