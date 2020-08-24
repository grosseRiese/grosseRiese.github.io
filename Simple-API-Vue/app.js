
  Vue.component('fetch-dog-data',{
    props:['dog'],
    template:`
        <section class="item"  >
          <h3 class="header-h3">
            <span class="span-lead-text">BREED :</span> <b> {{dog.breed}}</b>
          </h3>
          <div class="item-body">
            <h5 class="item-id">
              <span class="span-lead-text">ID : </span>
              <b> {{dog.id}}</b>
            </h5>
            <p class="item-amount">
                <span class="span-lead-text">AMOUNT :</span>
                <b>{{dog.amount}} </b>
            </p>
          </div>
        </section>   
    `
  });
const vm = new Vue({
  el: '#app',
  data:{
    hundar:[]
  },
  mounted() {
    axios.get("https://api.jsonbin.io/b/5f33ff6c1823333f8f226715")
    .then(response => {
      this.hundar = response.data.dogs,
      console.log(this.hundar)
    })
    .catch(error =>{ 
      console.log(error)
     })
  }
});