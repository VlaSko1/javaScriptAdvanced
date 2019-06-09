const main_app = new Vue({
  el: '#main_app',
  methods: {
    getJson(url){
        return fetch(url)
            .then(result => result.json())
            .catch(error => console.log(error))
    },


  }
})