
    let ulElem = document.querySelector('.gallery__list');
    let searchBtn = document.querySelector('#search-btn');
    
    function loopData(results){
        ulElem.innerHTML='';
            results.photos.photo.forEach(element => {
                let resultsItemImg = document.createElement('li');
                resultsItemImg.innerHTML = '<figure> <a href="https://farm' + element.farm 
                                            + '.staticflickr.com/' + element.server + '/' + element.id + '_' + element.secret 
                                            + '_b.jpg " target="_blank">'
                                            +'<img src=" https://farm' + element.farm 
                                            + '.staticflickr.com/' + element.server + '/' + element.id + '_' + element.secret 
                                            + '.jpg" alt="default-city">'
                                            + '</a></figure>'
                                            + '</li>';
            //console.log(resultsItemImg);
            ulElem.append(resultsItemImg );
        });
        resultsItemImg.innerHTML ='';
    }

    async function getImages(searchText) {
        const YOUR_ACCESS_KEY ='19d3e6e0acfe9c438f368e2c2bab1c5d';
        let baseURL ='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+YOUR_ACCESS_KEY;
        let url     = baseURL;
        if(searchText){
            url += '&text='+ searchText +'&format=json&nojsoncallback=1&per_page=100'
        }else{
            url += '&text=yellowflowers&format=json&nojsoncallback=1&per_page=50'
        }
        await fetch(url, 
            {method: 'GET'}
            ).then(response => {
            return response.json();
        }).then(data => {
        console.log(data);
        loopData(data);
        }).catch(error => {
            console.error('ERROR IN FETCH: ', error);
        })
    }
    searchBtn.addEventListener('click',function(){
            let searchText = document.querySelector('#textStr').value;
            getImages(searchText); 
    });