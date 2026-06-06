
const footerElement = document.createElement('footer');
const bodyElement = document.querySelector('body')
bodyElement.appendChild(footerElement);


const today = new Date();

let thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = "Zhenzhu Hao " + thisYear + "&copy";

footer.appendChild(copyright);



const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};


const messageForm = document.querySelector('form[name="leave_message"]');//problems?

messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);


    const messageSection = document.querySelector('#messages');
    messageList = messageSection.querySelector('ul');
    newMessage = document.createElement('li');
    newMessage.innerHTML += 
    `<a href ="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>`; 
    

    const removeButton = document.createElement('button');
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    messageForm.reset();
});



 fetch("https://api.github.com/users/zhenzhuhao-Jen/repos")
    .then(response=>{
        if(!response.ok){
            throw new Error('No data found');
        }
        return response.json();  
    })
    .then(repositories=>{
       console.log(repositories);
       const projectSection = document.querySelector('#projects');
       const projectList = projectSection.querySelector('ul');
      
      
       for(let i = 0; i < repositories.length; i++){
           const project = document.createElement('li');
           project.textContent = repositories[i].name;
           projectList.appendChild(project);
       }
    })
    .catch(error=>{
        console.log('An error occured', error);
        const projectSection = document.querySelector('#projects');
        const para = document.createElement('p');
        para.textContent = error;
        projectSection.append(para);
    })
    
    

