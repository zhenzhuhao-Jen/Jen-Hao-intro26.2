
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


const messageForm = document.querySelector('form[name]');//problems?

messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);


    messageSection = document.querySelector('#messages');
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