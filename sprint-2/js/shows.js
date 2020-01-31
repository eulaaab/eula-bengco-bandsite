const showObj = [
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

//this appends on the created Element dateHeader
let parentHeader = document.querySelector([".shows__table--tablet"]);
let tableHeader = document.createElement("div");

// make the h5 element
let datesHeader = document.createElement("h5");
// makes a class in the h5 tag
datesHeader.classList.add("tableHeader");
//puts the class you made in the parent container
parentHeader.appendChild(datesHeader);
//created the text in that h5 you made
datesHeader.innerText = "DATES";
datesHeader.classList.add("shows__title");

let venueHeader = document.createElement("h5");
venueHeader.classList.add("tableHeader");
parentHeader.appendChild(venueHeader);
venueHeader.innerText = "VENUE";
// venueHeader.classList.add("tableHeader");
venueHeader.classList.add("shows__title");

let locationHeader = document.createElement("h5");
locationHeader.classList.add("tableHeader");
parentHeader.appendChild(locationHeader);
locationHeader.innerText = "LOCATION";
locationHeader.classList.add("shows__title");
// tableHeader.appendChild([".shows__title"]);

//CREATE PARENT CONTAINER FROM JS

// const showsTable = showObj => {
// //grabs the parent container
let parentContainerTwo = document.querySelector([".shows__table"]);

// // const showsRow = showsTable(Object.keys(obj)) => {
for (i = 0; i < showObj.length; i++) {
  let headingTest = document.createElement("div");
  headingTest.classList.add("test");
  document.querySelectorAll(".test");
  let eula = Object.keys(showObj[i]);
  headingTest.innerText = eula[i];

  // //makes a variable and creats the element div inside the parent container
  let showsContainer = document.createElement("div");
  // //the variable shows container get than and put a class in there showDate
  showsContainer.classList.add("show__date");
  // //grab the parent container and that's where you are going to put the new element you created
  parentContainerTwo.appendChild(showsContainer);
  parentContainerTwo.appendChild(headingTest);
  document.querySelectorAll(".show__date")[i].innerText = showObj[i].date;
  let x = (document.querySelectorAll(".show__date")[i].innerText =
    showObj[i].date);
  console.log(x);

  let showsContainerTwo = document.createElement("div");
  showsContainerTwo.classList.add("show__venue");
  parentContainerTwo.appendChild(showsContainerTwo);
  let y = (document.querySelectorAll(".show__venue")[i].innerText =
    showObj[i].venue);
  console.log(y);

  let showsContainerThree = document.createElement("div");
  showsContainerThree.classList.add("show__loc");
  parentContainerTwo.appendChild(showsContainerThree);
  let z = (document.querySelectorAll(".show__loc")[i].innerText =
    showObj[i].location);
}
// }
// }
// console.log(x);
// console.log(y);
// console.log(z);
