const ulTag = document.querySelector('#geo-info');
const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const mapLinkSrc = document.querySelector('#map-link-src');

//func to get geolocation, check success or error, fetch data
  const geoFindMe = ()=>{

    mapLink.href = '';
    mapLink.textContent = '';
    mapLinkSrc.src = '';

    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }

    async function success(position){
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      //console.log(position);

      status.textContent = '';
      //href to <a>tag</a>
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      //src to <iframe>tag -karta</iframe>
      mapLinkSrc.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapquest&amp;marker=${latitude},${longitude}`;

      const url =`https://geocode.xyz/${latitude},${longitude}?json=1`;
      mapLink.textContent = 'View Larger Map'; //` Latitude: ${latitude} °, Longitude: ${longitude} °`;

       //fetch function
      await fetch(url,{method: 'GET'}
        ).then(response => {
          return response.json();
        }).then(data => {
          pickSome(data);
        }).catch(error => {
          console.error('There\'s an error with the API. ', error);
        })
      // console.log('url: ',url);
    }
    
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
}

let someInfo = document.createElement('li');
someInfo.setAttribute("class", "li-info-class");
//data from fetch to innerHTML
  const pickSome = (data)=>{
    setTimeout(()=>{
      someInfo.innerHTML ='<span><i>Street address: </i> <b>'+ data.staddress+' '+ data.stnumber+'</b></span><br>'
                          + '<span><i>Postal, City: </i> <b>'+data.postal +' '+ data.city+'</b></span><br>'
                          +'<span><i>Region: </i> <b>'+ data.region+'</b></span><br>'
                          + '<span><i>Country: </i> <b>'+data.country+ ' ('+data.state+')</b></span><br>'
                          + '<br>';
    
      ulTag.append(someInfo);   
    },1000);
    //console.log('element :' ,data);
  }

// addEventLi... to func..geoFindMe()
  document.querySelector('#find-me').addEventListener('click',geoFindMe);
