const app = Vue.createApp({
    // data, functions
  data(){
      return {
          showBooks : false,
          url : "www.netninja.co.uk",
          books : [
              { title: 'name of the wind', author: 'patric rothfuss', img: 'assets/1.jpg', isFav: true },
              { title: 'the way of kings', author: 'brandson sanderson', img: 'assets/2.jpg', isFav: false  },
              { title: 'the final emppire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true  },

          ]
      }
  },
  methods: {
     toggleShowBooks () {
         this.showBooks = !this.showBooks;
     },
     toggleFav(book){
        //  if current value true reverse it to false
        book.isFav = !book.isFav
     }
  },
//   is a way to define a data property inside our components
// depends on other data and update the data 
computed: {
      filteredBooks() {
          return this.books.filter( (book) => book.isFav)      
      }
  }
})

app.mount('#app')
