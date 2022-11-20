import { createStore } from 'vuex'
import json from "@/assets/objects.json"

export default createStore({
  state: {
    json: json,
  },
  mutations: {
    resetLikes(state){
      state.json.map(function (onePost) {
        onePost.counter = 0
      })
    }
  },
})
