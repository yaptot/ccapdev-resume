var firebaseConfig = {
    apiKey: "AIzaSyBnC5pX951g73LsFa2gIDfKsJmPMerAO-Q",
    authDomain: "resume-b6cfe.firebaseapp.com",
    databaseURL: "https://resume-b6cfe.firebaseio.com",
    projectId: "resume-b6cfe",
    storageBucket: "resume-b6cfe.appspot.com",
    messagingSenderId: "570089405876",
    appId: "1:570089405876:web:49ece736e9567a73b186e1"
};

// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);
var info;
var db = firebase.firestore();

function readProject(doc) {
    let mainDiv = document.getElementById("portfolioCards");

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("project");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    let name = document.createElement("h5");
    name.classList.add("mb-0");
    name.textContent = doc.data().name;

    let course = document.createElement("span");
    course.classList.add("course");
    course.textContent = doc.data().course;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let info = document.createElement("span");
    info.textContent = doc.data().info;
    
    let link = document.createElement("span");
    link.classList.add("d-block");
    link.textContent = doc.data().link;

    mainDiv.appendChild(card);

    card.appendChild(cardHeader);
    cardHeader.appendChild(name);
    cardHeader.appendChild(course);

    card.appendChild(cardBody);
    cardBody.appendChild(info);
    cardBody.appendChild(link);
}

db.collection("projects").get().then(function(snapshot) {
    snapshot.forEach(function(doc) {
        readProject(doc);
    });
});

function readEduc(doc, i) {
    let mainDiv = document.getElementById("educCards");

    let card = document.createElement("div");
    card.classList.add("card");
    if(i % 2)
        card.classList.add("align-self-start");
    else
        card.classList.add("align-self-end");

    card.classList.add("project");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    
    let name = document.createElement("h5");
    name.classList.add("mb-0");
    name.textContent = doc.data().school;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let degree = document.createElement("span");
    degree.textContent = doc.data().degree;

    let years = document.createElement("span");
    years.textContent = doc.data().year_start + " - " + doc.data().year_end;

    mainDiv.appendChild(card);

    card.appendChild(cardHeader);
    cardHeader.appendChild(name);

    card.appendChild(cardBody);
    cardBody.appendChild(degree);
    cardBody.appendChild(years);
}

db.collection("education").get().then(function(snapshot) {
    let i = 1;
    snapshot.forEach(function(doc) {
        readEduc(doc, i);
        i++;
    });
});

function readOrgs(doc) {
    let mainDiv = document.getElementById("orgsDiv");

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("orgs");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    let name = document.createElement("h5");
    name.classList.add("mb-0");
    name.textContent = doc.data().name;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let orgPos = document.createElement("span");
    orgPos.textContent = doc.data().position;

    let years = document.createElement("span");
    years.textContent = doc.data().year_start + " - " + doc.data().year_end;

    mainDiv.appendChild(card);

    card.appendChild(cardHeader);
    cardHeader.appendChild(name);

    card.appendChild(cardBody);
    cardBody.appendChild(orgPos);
    cardBody.appendChild(years);
}

db.collection("organizations").get().then(function(snapshot) {
    snapshot.forEach(function(doc) {
        readOrgs(doc);
    });
});