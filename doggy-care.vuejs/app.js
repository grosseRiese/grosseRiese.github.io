const Home = {
  template:`
  <section id="home">
    <h1>Welcome to Doggy DayCare</h1>
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
  
    <b-carousel-slide
      caption="After playing"
      img-src='https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=480&q=80'
    >
      <p> We currently takes  care of 
        <b>{{dogs.length}} </b><i> dog/'s.</i>
      </p>
    </b-carousel-slide>
    <b-carousel-slide
      caption="Eating time"
      img-src="https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=480&q=80"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Reading hour"
      img-src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=480&q=80"
    ></b-carousel-slide>
  </b-carousel>


  </section>`,
      props:{
        dogs:Array
      },
};
/**
 * =======================
*/
const Dog = {
  template:`
  <article class="dog" @click="goTo" >
      <img :src="dog.img" alt="a dog" />
      <h2>{{dog.name}}</h2>
      <h4>{{dog.breed}}</h4>
  </article>`,
    props:{
      dog: Object
    },
    methods:{
      goTo(){
        this.$router.push('/dogs/' + this.dog.chipNumber);
      }
    },
 };

/******************************* */
const Dogs = {
  template:`
  <section id="dogs">
    <h2>Our Dogs</h2>
    <Dog v-for="dog in dogs" :key="dog.chipNumber" :dog="dog" />
  </section>`,
  
    name: 'Dogs',
    props: {
      dogs: Array
    },
    components:{
      Dog
    },
    
  };
/********************************** */
const DogInfo = {
  template:`
    <section id="doginfo">
      <img :src="dog.img" :alt="dog.name">
      <h1> {{dog.name}}</h1>
      <section class="section-info">
            <p><b>Breed: </b> <i>{{dog.breed}}</i></p>        
            <p><b>Age: </b>{{dog.age}}y</p>        
            <p><b>Chip Number: </b>{{dog.chipNumber}}</p>
            <p><b>Owner:</b> {{ dog.owner.name }} {{ dog.owner.lastName }}</p>
            <p>Phone: {{dog.owner.phoneNumber}}</p>
        </section>
    </section>`,
  props:{
    dogs: Array
  },
  computed:{
    dog(){
      return this.dogs.filter(dog => dog.chipNumber === this.$route.params.chipNumber)[0];
    }
  },
};

/*************************************** */
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component:Dogs
    },
    {
      path: '/dogs/:chipNumber',
      name: 'DogInfo',
      component: DogInfo
    },
  ];

  const router = new VueRouter({
    routes: routes,
    mode: "history",
    base: "/",
  });


let app = new Vue({
    router: router,
    el:'#app',
    data:{
      dogs: null
    },
    created() {
      axios
          .get('./assets/dogs.json')
          .then(response => {
              this.dogs = response.data;
              console.log(this.dogs);
          })
          .catch((e) => {
              console.error(e)
          })
  },
    methods:{
      },
  }).$mount('#app')

