const app = Vue.createApp({
    // data, functions
  data(){
      return {
          showBooks : false,
          books : [
              { title: 'name of the wind', author: 'patric rothfuss' },
              { title: 'the way of kings', author: 'brandson sanderson' },
              { title: 'the final emppire', author: 'brandon sanderson' },
          ]
      }
  },
  methods: {
     toggleShowBooks () {
         this.showBooks = !this.showBooks;
     }
  }
})

app.mount('#app')