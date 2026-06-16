
//base url: https://api.thedogapi.com/v1

//create paragraph to hold the picture.
//add event listerner to form, fetch image data from dog API
const pictureSection = document.querySelector('#picture');
const para = document.createElement('p');
pictureSection.append(para);

const nameForm = document.querySelector('form[name="dog-pic"]');

nameForm.addEventListener("submit", function(event){
    event.preventDefault();
    fetch("https://api.thedogapi.com/v1/images/BJa4kxc4X", 
       {headers: {"x-api-key": "live_DyQ3ytNC42MhbJkWWFzKwZveqGhfOFe11qINqH6dDPqV3MATmjkXbqXwNDWR78Ei"}})
    .then(response => response.json())
    .then(data => {console.log(data);
        
        para.innerHTML = `<img src=${data.url} alt="dogPic">`;

      
    })
    .catch(error=>console.error("error", error))
})

//create paragraphs to hold content
//add eventlistener to breed description form button
//fetch dog info from dog API
const h2 = document.querySelector('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');
h2.append(p1);
h2.append(p2);
h2.append(p3);
h2.append(p4);
h2.append(p5);
const descForm = document.querySelector('form[name="breed-description"]');
descForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    fetch("https://api.thedogapi.com/v1/breeds/1", 
      {headers: {"x-api-key": "live_DyQ3ytNC42MhbJkWWFzKwZveqGhfOFe11qINqH6dDPqV3MATmjkXbqXwNDWR78Ei"}})
    .then( response => response.json())
    .then(data => {console.log(data);

        p1.textContent = `Breed: ${data.name}` ;
        p2.textContent = `Description: ${data.description}`;
        p3.textContent = `Temperament: ${data.temperament}`;
        p4.textContent = `Origin: ${data.origin}`;  
        p5.textContent = `History: ${data.history}`;
      
    })
    .catch(error=>console.error("error", error)) 
})




