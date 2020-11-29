import {latitude,longitude} from './capturePhoto.js';
export let place ='';

export const fetchData = async ()=>{
  const url =`https://geocode.xyz/${latitude},${longitude}?json=1`;
    console.log(` Latitude: ${latitude} °, Longitude: ${longitude} °`);

  //fetch function
  await fetch(url,{method: 'GET'}
    ).then(response => {
      return response.json();
    }).then(data => {
      pickSome(data);
    }).catch(error => {
      console.error('There\'s an error with the API. ', error);
    });
  console.log('url: ',url);
}

const pickSome = (data)=>{
    setTimeout(()=>{
      place =   data.staddress +' , '+ data.city;
      console.log('Place : ',place);
    },1000);
}