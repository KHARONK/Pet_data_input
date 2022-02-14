import { Pet } from './pet.js';

const form = document.querySelector('.form');
const submitButton = document.querySelector('.submitBtn');

submitButton.addEventListener("click", submitForm);

function submitForm (e)
{
    e.preventDefault();

    if (isEmpty(form["name"]) && isEmpty(form["type"]) && isEmpty(form["activities"]) && isEmpty(form["birthday"]))
     {
         const name = form['name'].value;
         const type = form['type'].value;
         const birthday = form['birthday'].value;
         const activities = form['activities'].value;

        const activitiesArray = activities.split(',');
        const petObj = new Pet(name, type, birthday, activitiesArray);
        displayPetInfo(petObj);
        (name, type, birthday, activities);
    }  
     
}

function displayPetInfo(petObj) 
{
    const parentDiv = document.createElement('div');
    parentDiv.className = "parent"; 
    //display name to browser
    const name = document.createElement('p');
    name.innerHTML = petObj.name;

    //display type to browser
    const type = document.createElement('p');
    type.innerHTML = petObj.type;

    //display birthday to browser
    const birthday = document.createElement('p');
    birthday.innerHTML = petObj.birthday;
    
    //display activities to browser
    const activities = document.createElement('ul');
    activities.innerHTML = "Activities of Pet";
    //to list activities entered from User
    activities.className = "lists";

    const arr =  petObj.petactivities;
    for (let i = 0; i < arr.length; i++) 
    {
        const li = document.createElement('li');
        li.innerHTML = arr[i];
        activities.appendChild(li);
    }
     
    //Box to contain info submitted from User.
    parentDiv.append(name, type, birthday, activities);
    document.body.appendChild(parentDiv);

}

//to check empty fields
function isEmpty(field)
{
    if(field.value == "")
    {
        alert("Field(s) cannot be empty");
        return false
    }
    return true
}





