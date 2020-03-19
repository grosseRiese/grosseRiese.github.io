
    let ulElem = document.querySelector('.gallery__list');
    let searchBtn = document.querySelector('#search-btn');
    let resultsItemImg = document.createElement('li');
    /*********** *lightbox: section * *************/
    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox)
    /******************************************* */
    function loopData(results){
        ulElem.innerHTML='';
        resultsItemImg.innerHTML ='';
            results.photos.photo.forEach(element => {
                resultsItemImg = document.createElement('li');
                resultsItemImg.innerHTML = '<figure> <img src=" https://farm' 
                                            + element.farm + '.staticflickr.com/' 
                                            + element.server + '/' + element.id + '_' + element.secret 
                                            + '.jpg" alt="default-city"> </figure> </li>';
            //console.log(resultsItemImg);
            ulElem.append(resultsItemImg );
            /**create iamge in lightbox lightbox**/
            resultsItemImg.addEventListener('click', e => {
                lightbox.classList.add('active');
                const _img  = document.createElement('img')
                const src   = 'https://farm' + element.farm 
                            + '.staticflickr.com/' + element.server + '/' 
                            + element.id + '_' + element.secret  + '_b.jpg';
                _img.src    = src;
                while(lightbox.firstChild){
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(_img);
            });

            lightbox.addEventListener('click', e => {
                if(e.target !== e.currentTarget) return
                lightbox.classList.remove('active');
            });
            /************************************************ */
        });
    }

    async function getImages(searchText,searchNum) {

        const YOUR_ACCESS_KEY   = '19d3e6e0acfe9c438f368e2c2bab1c5d'; 
        let baseURL             = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+YOUR_ACCESS_KEY;
        let url                 =  baseURL;

        if(searchText && searchNum){
            url += '&text='+ searchText +'&format=json&nojsoncallback=1&per_page='+searchNum ;
        }else if(searchText || searchNum){
            if(searchText){
                url += '&text='+ searchText +'&format=json&nojsoncallback=1&per_page=50' ;
            }
            if(searchNum){
                url += '&text=yellowflowers&format=json&nojsoncallback=1&per_page='+searchNum ;
            }
        }else{
            url += '&text=yellowflowers&format=json&nojsoncallback=1&per_page=50' ;
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
            let searchNum = document.querySelector('#numStr').value;
            getImages(searchText,searchNum); 
    });