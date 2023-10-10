/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Afolabi Ademolu",
    photo: "images/new-image.jpg",
    favoriteFoods: [
        'Rice',
        'Beans',
        'Egg',
        'Plantain',
        'Bread',
    ],
    hobbies: [
        'Reading',
        'Writing',
        'Teaching',
        'Movies',
        'Games',
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Lagos, Nigeria",
        length:"2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Abeokuta, Nigeria",
        length:"3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Ijebu-ode, Nigeria",
        length:"2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Sagamu, Nigeria",
        length:"5 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.getElementById('photo');
imageElement.src = 'new-image.jpg';
document.querySelector("#photo").textContent = myProfile.photo;
document.querySelector("#photo").textContent = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite foods").appendChild(li)
})



/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hubbies;
    document.querySelector("#hubbies").appendChild(li)
})



/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let li = document.createElement("li");
    li.textContent = placesLived;
    document.querySelector("#places-lived").appendChild(li)
})


