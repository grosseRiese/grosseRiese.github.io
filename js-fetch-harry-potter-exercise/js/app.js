const api_key='$2a$10$gEu0O5jmtD2VgySMbVDGOebtftLbfyB0Z5qDpmMhW0Ds4fcfh6cRm';
const ulTag = document.getElementById('characters');
let houses=['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let house='';
const url = 'https://www.potterapi.com/v1/characters?key='+api_key ;

async function getCharacters() {
  await fetch(url, 
      {method: 'GET'}
      ).then(response => {
      return response.json();
  }).then(data => {
      pickSome(data);
  }).catch(error => {
      console.error('There\'s an error with the API. ', error);
  })
}

function pickSome(data){

  data.forEach(element => {
    let names = document.createElement('li');
        houses.forEach((el)=>{
          if(element.house === el &&(element.orderOfThePhoenix===true && element.ministryOfMagic===true) ){
                names.innerHTML ='<span><i>Name: </i><b> '+element.name+'</b></span><br>'
                            + '<span><i>House: </i> <b>'+ element.house+'</b></span><br>'
                            + '<span><i>Order of the phoenix: </i> <b>'+ element.orderOfThePhoenix+'</b></span><br>'
                            + '<span><i>Ministry of magic: </i> <b>'+element.ministryOfMagic+'</b></span><br>'
                            + '<span><i>Species: </i> <b>'+ element.species+'</b></span><br>'
                            + '<span><i>School: </i> <b>'+ element.school+'</b></span><br>'
                            + '<br>';
                ulTag.append(names);        
          } 
        });
  });
}

getCharacters(); 
