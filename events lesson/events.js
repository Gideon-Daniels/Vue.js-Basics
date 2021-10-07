const app = Vue.createApp({
    // data, functions
  data(){
      return {
          x: 0,
          y: 0
      }
  },
  methods: {
     handleEvent(e){
        console.log(e , e.type)
     },
     handleMousemove(e) {
         this.x = e.offsetX
         this.y = e.offsetY
     }
  }
})

app.mount('#app')