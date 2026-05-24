
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
}
