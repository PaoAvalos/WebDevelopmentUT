import { createStore } from 'vuex'
import json from "@/assets/objects.json"

export default createStore({
  state: {
    json: json,
    currentPost: [{
      id: "",
      time: "",
      text: ""
    }]
  },
  mutations: {
    setCurrentPost(state, {postData}){
      state.currentPost.map(function (onePost) {
        onePost.id = postData.id
        onePost.time = postData.time;
        onePost.text = postData.text;
      })
    },
    updatePost(state, {text}){
      state.json.map(function (onePost) {
        if(onePost.id == state.currentPost[0].id){
          onePost.text = text;
        }
      })
    },
    deletePost(state){
      for(let i = 0; i < state.json.length; i++){
        if (state.json[i].id === state.currentPost[0].id) {
          state.json.splice(i, 1);
        }
      }
    }
  },
})
