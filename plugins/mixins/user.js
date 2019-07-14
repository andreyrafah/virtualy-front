import Vue from 'vue'
import { mapGetters } from 'vuex'

const User = {
  install (Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters(['loggedIn', 'user'])
      }
    })
  }
}

Vue.use(User);