
const Top = {
  template:`<section class="top-component">
    <h1>{{ topSection.title }}</h1>
    <p>{{ topSection.notice }}</p>
  </section>`,
  name: 'Top',
    props: {
      topSection:{
        title:String,
        notice:String
      }
  }
};
/**************************************************** */
const Card = {
  template:`
  <article class="card-component" @click="clickedCard" :style="{ 'background': card.bgColor}" >
  <section class="img-header">

    <span class="img"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
    <path d="M29.8487 26.5009C30.5267 27.1657 30.5267 28.2441 29.8487 28.9097C29.1698 29.5753 28.0693 29.5753 27.3913 28.9097C24.4169 25.9941 19.5778 25.9941 16.6038 28.9097C15.9249 29.5753 14.824 29.5753 14.146 28.9097C13.8067 28.5771 13.6378 28.1423 13.6378 27.7049C13.6378 27.2692 13.8072 26.8331 14.146 26.5009C18.4756 22.2567 25.5191 22.2567 29.8487 26.5009Z" fill="white"/>
    <path d="M35.8186 21.073C36.4967 21.7381 36.4967 22.817 35.8186 23.4826C35.1397 24.1482 34.0397 24.1482 33.3612 23.4826C27.0956 17.339 16.9004 17.339 10.6348 23.4826C9.9563 24.1482 8.85542 24.1482 8.17782 23.4826C7.83858 23.15 7.6683 22.7135 7.6683 22.2778C7.6683 21.8412 7.83858 21.406 8.17782 21.073C11.869 17.4538 16.7772 15.4608 21.9978 15.4608C27.2184 15.4608 32.1266 17.4538 35.8186 21.073Z" fill="white"/>
    <path d="M41.2866 15.0204C41.965 15.6856 41.965 16.7644 41.2866 17.4296C40.6081 18.0948 39.5081 18.0948 38.8296 17.4296C34.3332 13.0218 28.3554 10.5945 21.9974 10.5945C15.6394 10.5945 9.66199 13.0218 5.16651 17.4296C4.48715 18.0948 3.38715 18.0948 2.70911 17.4296C2.36987 17.097 2.20047 16.6609 2.20047 16.2248C2.20047 15.7891 2.37031 15.353 2.70911 15.0204C7.86107 9.96901 14.7119 7.18752 21.9974 7.18752C29.2842 7.18752 36.1346 9.96901 41.2866 15.0204Z" fill="white"/>
    </g>
    </svg>
    </span>
    <!-- <img src="./assets/wifi.svg" alt="wifi"/> -->
    <!-- <img src="./assets/chip.svg" alt="chip" />-->
    <span class="img" alt="chip">
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="40" rx="8" fill="#ECE6DF"/>
    <line y1="12.5" x2="18" y2="12.5" stroke="black" stroke-opacity="0.11"/>
    <line x1="33" y1="12.5" x2="50" y2="12.5" stroke="black" stroke-opacity="0.11"/>
    <line x1="32.5" y1="5.46392e-08" x2="32.5" y2="40" stroke="black" stroke-opacity="0.11"/>
    <line y1="26.5" x2="18" y2="26.5" stroke="black" stroke-opacity="0.11"/>
    <line x1="32" y1="26.5" x2="50" y2="26.5" stroke="black" stroke-opacity="0.11"/>
    <line x1="18.5" y1="5.46392e-08" x2="18.5" y2="40" stroke="black" stroke-opacity="0.11"/>
    </svg></span>


    <img :src="('./assets/'+ card.vendor +'.svg')" :alt="card.vendor"/>
  </section>
  <section class="card-Number">
    <p :style="{ 'color': card.textColor}">{{ card.number }}</p>
  </section>
  <section class="details">
    <aside class="holder-info">
      <span :style="{ 'color': card.textColor}"> Cardholder Name </span>
      <p :style="{ 'color': card.textColor}"> {{ card.holder }} </p>
    </aside>
    <aside class="valid-info">
      <span :style="{ 'color': card.textColor}"> Valid until </span>
      <p :style="{ 'color': card.textColor}"> {{card.valid}} </p>
    </aside>
  </section>
 <!--<img v-if="activeCard" class="delete-btn" @click="deleteCard(card)"  src="./assets/minus-circle-solid.svg" alt=""> -->
    <span v-if="activeCard" class="delete-btn" @click="deleteCard(card)"  alt=""> 
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" class="svg-inline--fa fa-minus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="red" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg>
    </span>
  </article>`,
  name:"Card",
  props:{
    card:Object,
    activeCard:Boolean,
  },
  data:()=>{
    return{
      img: "Bitcoin",
      myWifiSVG:"wifi.svg",
    };
  },
  methods:{
    clickedCard(){
      this.$emit("clickedCard");
    },
    deleteCard(card) {
      let cards = JSON.parse(window.localStorage.getItem("Cards"));
      for (let i = 0; i < cards.cards.length; i++) {
        if (cards.cards[i].id == card.id) {
          cards.cards.splice(cards.cards.indexOf(cards.cards[i]), 1);
          window.localStorage.setItem("Cards", JSON.stringify(cards));
          location.reload();
        }
      }
    }
  }

};
/*************************************** */
const CardStack = {
  template:`<section class="card-stack">
  <Card
    v-for="card in cards"
    :key="card.id"
    v-bind:card="card"
    @clickedCard="cardClicked(card)"
  />
</section>`,
name:'CardStack',
components:{
  Card
},
props:{
  cards:Array
},
methods:{
  cardClicked(card) {
    this.$emit("activateTheCard", card);
  }
}

 
};
/**************************************************** */
const CardForm = {
  template:`<section class="card-form">
    <label for="card-number" class="col-grid-2">card number</label>
    <input type="text" maxlength="16" v-model="cardNumber" class="col-grid-2" placeholder="Must be 16 numbers" name="card-number"/>

    <label for="cardholder-name" class="col-grid-2">cardholder name</label>
    <input type="text" v-model="cardholderName" placeholder="Firstname Lastname" class="col-grid-2" name="cardholder-name"/>

    <article  class="valid-my" > 
      <label for="valid" >valid thru</label>
      <input type="text" maxlength="5" v-model="valid" placeholder="MM/YY"  class="validate-input"/>
    </article>

    <article class="valid-ccv"> 
      <label for="CCV"  maxlength="3" >ccv</label>
      <input type="text" v-model="ccv" maxlength="3" placeholder="***"/>
    </article>
    
    <select v-model="vendor" class="col-grid-2">
        <option disabled value>Please select a vendor</option>
        <option>Block Chain</option>
        <option>Evil Corp</option>
        <option>Ninja</option>
        <option>Bitcoin</option>
    </select>
    <button class="btn" @click="addCard">add card</button>
  </section>`,
  name:"CardForm",
  data: () => {
    return {
        cardNumber: "",
        cardholderName: "",
        valid: "",
        ccv: "",
        vendor: "",
        Cards: JSON.parse(window.localStorage.getItem("Cards"))
    };
  },
  methods:{
   emitCardHolderName() {
      //console.log(this.cardholderName);
      this.$emit("getHolderName", this.cardholderName);
    },
    emitCardNumber() {
      //console.log(this.cardNumber);
      this.$emit("getCardNumber", this.cardNumber);
    },
    emitValid() {
      //console.log(this.valid);
      this.$emit("getValid", this.valid);
    },
    emitCcv() {
      //console.log(this.ccv);
      this.$emit("getCcv", this.ccv);
    },
    emitVendor() {
      //console.log(this.vendor);
      this.$emit("getvendor", this.vendor);
    },
    addCard() {
       let _id = Math.round(Math.random()*1000);
       let newCard = {
         id: JSON.stringify(_id),
         holder: this.cardholderName,
         number: "",
         vendor: this.vendor,
         valid: this.valid,
         ccv: this.ccv,
         bgColor: "#D0D0D0",
         textColor: "#444"
       };

       if (this.vendor == "Block Chain") {
         newCard.bgColor = "#8B58F9";
         newCard.textColor = "#fffc";
       } else if (this.vendor == "Evil Corp") {
         newCard.bgColor = "#F33355";
         newCard.textColor = "#fffc";
       } else if (this.vendor == "Ninja") {
         newCard.bgColor = "#222222";
         newCard.textColor = "#fffc";
       } else if (this.vendor == "Bitcoin") {
         newCard.bgColor = "#FFAE34";
         newCard.textColor = "#444";
       }

       //Card number, validation
        if (this.cardNumber.length < 16) {
          alert("It must be only 16 numbers!");
        } else if (this.cardNumber.length > 16) {
          alert("It must be only 16 numbers!");
        } else if (this.cardNumber.length == 16) {
          if (isNaN(parseInt(this.cardNumber))) {
            alert("Card number must be a valid number");
          } else {
            let number = this.cardNumber.split("");
            for (let i = 0; i < 4; i++) {
              if (i < 3) {
                newCard.number += number.splice(0, 4).join("") + " ";
              } else {
                newCard.number += number.splice(0, 4).join("");
              }
            }
           //Card holder, validation
           if (!newCard.holder.match(/^[A-Za-z\s]+$/)) {
             alert("Card-holder: Only letters are allowed!");
           } else {
                //Card thru nn yy and ccv, validation
             if (isNaN(parseInt(this.valid)) || isNaN(parseInt(this.ccv))) {
               alert("MM/YY and CCV must be numbers!");
             } else {
               if ( this.valid.length > 5 || this.valid.indexOf("/") == -1 ) {
                 alert("The valid date must be inlke this form (mm/yy) .");
               } else {
               this.Cards.cards.push(newCard);
               window.localStorage.setItem("Cards",JSON.stringify(this.Cards));
               this.$router.push("/");
               }
             }
           }

      /*this.Cards.cards.push(newCard);
      window.localStorage.setItem("Cards", JSON.stringify(this.Cards));
      this.$router.push("/");*/

      } 
     }/***** // End of validation... *******/

    }
  },
  watch:{
      cardholderName() {
        this.emitCardHolderName();
      },
      cardNumber() {
        this.emitCardNumber();
      },
      valid() {
        this.emitValid();
      },
      ccv() {
        this.emitCcv();
      },
      vendor() {
        this.emitVendor();
      }
  },
};
/**************************************************** */


const Home = {
  template:`<section class="home">
  <Top :topSection="homeTop"></Top>
  <Card v-bind:card="activeCard" v-bind:activeCard="true"></Card>
  <CardStack @activateTheCard="activateClicked" v-bind:cards="CardsData" />

  <button class="btn" @click="addCard">add a new card</button>
</section>`,
name: 'Home',
components: {
  Top,
  Card,
  CardStack
},
data(){
  return{
    homeTop:{
      title: 'E-Wallet',
      notice: 'ACTIVE CARD'
    },
    activeCard: {},
    //isActiveCard :false,
    //CardsData:[],
  }
},
 computed: {
  CardsData() {
    return JSON.parse(window.localStorage.getItem("Cards")).cards;
  }
},
created(){ 
  this.setLocalStorage();
  this.defaultCard();
},
methods:{
  addCard() {
    this.$router.push("/addCard");
  },
  activateClicked(card) {
    this.activeCard = card;
    //this.isActiveCard = true;
  },
  defaultCard(){
    //this.isActiveCard = false;
    if (this.CardsData.length === 0) {
        this.activeCard = {
            id: "00",
            holder: "Donald Trump",
            number: "0000 0000 0000 0000",
            vendor: "Bitcoin",
            valid: "11/20",
            ccv: "202",
            bgColor: "#D0D0D0",
            textColor: "#222",
        };
    }else{
       this.activeCard = this.CardsData[0];
    }
  },
   setLocalStorage() {
    let checkCards = JSON.parse(window.localStorage.getItem("Cards"));
    if (checkCards === null) {
      let cards = {
        cards: []
      };
      window.localStorage.setItem("Cards", JSON.stringify(cards));
    }
  },
},
};
/******************************* */
const AddCard = {
  template:`
  <section class="add-card">
    <Top :topSection="addCardTop"></Top>
    <Card v-bind:card="activeCard"></Card>
     <CardForm 
      @getHolderName="emitedHolderName"
      @getCardNumber="emitedCardNumber"
      @getValid="emitedValid"
      @getCcv="emitedCcv"
      @getvendor="emitedVendor"></CardForm>
    
    <!--<router-link to="/" class="home-route">
        <img class="home-btn" src="./assets/chevron-circle-left-solid.svg" alt=""> 
      </router-link>-->
  </section>`,
  
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm
  },
  data(){
    return{
      addCardTop:{
        title: 'ADD NEW BANK CARD',
        notice: 'NEW CARD'
      },
      cardDetails: {},
      //isActiveCard :false,
      CardsData:[],
      activeCard:{
        id:'01',
        holder:'firstname lastname',
        number:'xxxx xxxx xxxx xxxx',
        vendor: 'Bitcoin',
        valid: 'mm/yy',
        ccv: "235",
        bgColor: "#D0D0D0",
        textColor: "#444",
      },

    }
  },
  methods:{
       emitedHolderName(data) {
      this.activeCard.holder = data;
    },
    emitedCardNumber(data) {
      let number = data.match(/.{1,4}/g).join(" ");
      this.activeCard.number = number;
    },
    emitedValid(data) {
      this.activeCard.valid = data;
    },
    emitedCcv(data) {
      this.activeCard.ccv = data;
    },
    emitedVendor(data) {
      if (data == "Block Chain") {
        this.activeCard.bgColor = "#8B58F9";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Evil Corp") {
        this.activeCard.bgColor = "#F33355";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Ninja") {
        this.activeCard.bgColor = "#222222";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Bitcoin") {
        this.activeCard.bgColor = "#FFAE34";
        this.activeCard.textColor = "#444";
      }
      this.activeCard.vendor = data;
    }
  },
    
  };
/********************************** */



  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addCard',
      name: 'AddCard',
      component:AddCard
    }
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
      SVGS:null
    },
    created() {
      axios
      .get('./assets/')
      .then(response => {
          this.SVGS = response.data;
          console.log(this.SVGS);
      })
      .catch((e) => {
          console.error(e)
      })
  },
    methods:{
      },
  }).$mount('#app')

