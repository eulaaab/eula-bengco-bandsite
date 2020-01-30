let showObj = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA"
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA"
  }
];

// var parent = document.querySelector([".tableContent"]);
// var showsContainer = document.createElement("h5");
// showsHeader.classList.add("dateHeader");
// parent.appendChild(showsHeader);
// showsHeader.innerText = "DATE";
// var showsContainer = document.createElement("div");
// showsContainer.classList.add("showDate");
// parent.appendChild(showsContainer);

// var parent = document.querySelector([".tableContent"]);
// var showsContainer = document.createElement("div");
// showsContainer.classList.add("showDate");
// parent.appendChild(showsContainer);

//this appends on the created Element dateHeader
let parentHeader = document.querySelector([".shows__table--tablet"]);

// make the h5 element
let datesHeader = document.createElement("h5");
// makes a class in the h5 tag
datesHeader.classList.add("tableHeader");
//puts the class you made in the parent container
parentHeader.appendChild(datesHeader);
//created the text in that h5 you made
datesHeader.innerText = "DATES";

let venueHeader = document.createElement("h5");
venueHeader.classList.add("tableHeader");
parentHeader.appendChild(venueHeader);
venueHeader.innerText = "VENUE";

let locationHeader = document.createElement("h5");
locationHeader.classList.add("tableHeader");
parentHeader.appendChild(locationHeader);
locationHeader.innerText = "LOCATION";

// var parent = document.querySelector([".tableContent"]);
// var showsContainer = document.createElement("div");
// showsContainer.classList.add("showDate");
// parent.appendChild(showsContainer);

for (i = 0; i < showObj[i].date[i].length; i++) {}

// //grabs the parent container
let parentContainer = document.querySelector([".shows__table--tablet"]);

//makes a variable and creats the element div inside the parent container
let showsContainer = document.createElement("div");
//the variable shows container get than and put a class in there showDate
showsContainer.classList.add("showDate");
//grab the parent container and that's where you are going to put the new element you created
parentContainer.appendChild(showsContainer);

let x = (document.querySelector([".showDate"]).innerText = showObj[i].date);
console.log(x);
//"Mon Dec 17 2018";

// let parentContainerTwo = document.querySelector([".shows__table--tablet"]);
let showsContainerTwo = document.createElement("div");
showsContainerTwo.classList.add("showVenue");
//grab the parent container and that's where you are going to put the new element you created
parentContainer.appendChild(showsContainerTwo);

let y = (document.querySelector([".showVenue"]).innerText = showObj[i].venue);
console.log(y);
