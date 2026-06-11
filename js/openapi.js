

//base url: https://api.thedogapi.com/v1

// async function getData(){
//     try{
//         const response = await fetch(" https://api.thedogapi.com/v1/breeds/search?limit=1", 
//         {headers: {"x-api-key": "live_DyQ3ytNC42MhbJkWWFzKwZveqGhfOFe11qINqH6dDPqV3MATmjkXbqXwNDWR78Ei"}});
//         if(!response.ok){
//             throw new Error('No data found');
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch(error){console.log("Error:",error)};
//  }

const h2 = document.querySelector('h2');

const nameForm = document.querySelector('form[name="dog-pic"]');

nameForm.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(" https://api.thedogapi.com/v1/images/BJa4kxc4X", 
       {headers: {"x-api-key": "live_DyQ3ytNC42MhbJkWWFzKwZveqGhfOFe11qINqH6dDPqV3MATmjkXbqXwNDWR78Ei"}})
    .then(response => response.json())
    .then(data => {console.log(data);
        
        h2.innerHTML = `<image src=${data.url} alt="dogPic">`;
      
    })
    .catch(error=>console.error("error", error))
    
})


const descForm = document.querySelector('form[name="breed-description"]');
descForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    fetch(" https://api.thedogapi.com/v1/breeds/1", 
      {headers: {"x-api-key": "live_DyQ3ytNC42MhbJkWWFzKwZveqGhfOFe11qINqH6dDPqV3MATmjkXbqXwNDWR78Ei"}})
    .then( response => response.json())
    .then(data => {console.log(data);

        const p1 = document.createElement('p');
        p1.textContent = `Breed: ${data.name}` ;
        const p2 = document.createElement('p');
        p2.textContent = `Description: ${data.description}`;
        const p3 = document.createElement('p');
        p3.textContent = `Temperament: ${data.temperament}`;
        const p4 = document.createElement('p');
        p4.textContent = `Origin: ${data.origin}`;
        const p5 = document.createElement('p');
        p5.textContent = `History: ${data.history}`;
        
        h2.append(p1);
        h2.append(p2);
        h2.append(p3);
        h2.append(p4);
        h2.append(p5);
           
    })
    .catch(error=>console.error("error", error))
    
})




