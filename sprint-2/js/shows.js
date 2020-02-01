// Eula Bengco SHOWS JAVASCRIPT FILE
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

//MAKES SHOWS HEADING FOR TABLET AND DESKTOP
let parentContainer = document.querySelector([".shows"]);
let showHeading = document.createElement("h2");
//need to put this so my Shows header will get the heading 2 styling
showHeading.classList.add("heading-2");
showHeading.classList.add("shows__heading");

parentContainer.appendChild(showHeading);
showHeading.innerText = "Shows";

//WRAP THE WHOLE SHOWS WITHOUT THE HEADING

let parentContainerTwo = document.createElement("div");
parentContainerTwo.classList.add("shows__container");
parentContainer.appendChild(parentContainerTwo);

let showTableWrapper = document.createElement("div");
showTableWrapper.classList.add("shows__table");
parentContainer.appendChild(showTableWrapper);

//WRAPPER THE DATES VENUE LOCATION (TABLET AND DESKTOP VIEW)
let rowWrapperHeader = document.createElement("div");
rowWrapperHeader.classList.add("shows__title--non-mobile");
showTableWrapper.appendChild(rowWrapperHeader);

let datesHeader = document.createElement("h5");
datesHeader.classList.add("shows__header");
datesHeader.classList.add("shows__title");
//puts the class you made in the parent container
rowWrapperHeader.appendChild(datesHeader);
datesHeader.innerText = "DATES";

let venueHeader = document.createElement("h5");
venueHeader.classList.add("shows__header");
venueHeader.classList.add("shows__title");
rowWrapperHeader.appendChild(venueHeader);
venueHeader.innerText = "VENUE";

let locationHeader = document.createElement("h5");
locationHeader.classList.add("shows__header");
locationHeader.classList.add("shows__title");
rowWrapperHeader.appendChild(locationHeader);
locationHeader.innerText = "LOCATION";
//TABLET AND DESKTOP TABLE HEADERS END

//WRAPPED MY ROWS SO THEY FLEX
let showRowWrapper = document.createElement("div");
parentContainerTwo.appendChild(showTableWrapper);

//Method is for loop because when I did this on Wednesday and Thursday it was working. To practice my for loop coding
for (i = 0; i < showObj.length; i++) {
  let rowWrapper = document.createElement("div");
  parentContainerTwo.appendChild(showTableWrapper);
  rowWrapper.classList.add("shows__wrapper");
  showTableWrapper.appendChild(rowWrapper);

  //DATE MOBILE HEADER
  let headingDateMobile = document.createElement("div");
  headingDateMobile.classList.add("shows__title--mobile");
  document.querySelectorAll(".shows__title--mobile");
  headingDateMobile.innerText = "DATE";
  rowWrapper.appendChild(headingDateMobile);

  //DATE FROM OBJECT showObj
  // //makes a variable and creats the element div inside the parent container
  let showsContainer = document.createElement("div");
  // //the variable shows container get than and put a class in there showDate
  showsContainer.classList.add("shows__text--bold"); //styling bold
  // //grab the wrapper and that's where you are going to put the new element you created
  rowWrapper.appendChild(showsContainer);
  document.querySelectorAll(".shows__text--bold")[i].innerText =
    showObj[i].date;
  let x = (document.querySelectorAll(".shows__text--bold")[i].innerText =
    showObj[i].date); //my prettier in vs code makes this multi-line
  console.log(x); //checking if my for loop is working

  //VENUE MOBILE HEADER
  let headingVenueMobile = document.createElement("div");
  headingVenueMobile.classList.add("shows__title--mobile");
  document.querySelectorAll(".shows__title--mobile");
  headingVenueMobile.innerText = "VENUE";
  rowWrapper.appendChild(headingVenueMobile);

  //VENUE FROM OBJECT showObj
  let showsContainerTwo = document.createElement("div");
  showsContainerTwo.classList.add("shows__text");
  rowWrapper.appendChild(showsContainerTwo);
  let y = (document.querySelectorAll(".shows__text")[i].innerText =
    showObj[i].venue);
  console.log(y);

  //LOCATION MOBILE HEADER
  let headingLocationMobile = document.createElement("div");
  headingLocationMobile.classList.add("shows__title--mobile");
  document.querySelectorAll(".shows__title--mobile");
  headingLocationMobile.innerText = "LOCATION";
  rowWrapper.appendChild(headingLocationMobile);

  //LOCATION FROM OBJECT showObj
  let showsContainerThree = document.createElement("div");
  showsContainerThree.classList.add("shows__text-2");
  showsContainerThree.classList.add("shows__text-2"); //add styling
  rowWrapper.appendChild(showsContainerThree);
  let z = (document.querySelectorAll(".shows__text-2")[i].innerText =
    showObj[i].location);
  console.log(z);

  //BUTTONS BUY TICKETS
  let buttonShowsDiv = document.createElement("div"); //container
  let buttonShows = document.createElement("button");
  buttonShowsDiv.classList.add("shows__button");
  document.querySelectorAll(".shows__button");
  buttonShows.classList.add("button");
  document.querySelectorAll(".button");
  buttonShows.innerText = "BUY TICKETS";
  buttonShowsDiv.appendChild(buttonShows);
  rowWrapper.appendChild(buttonShowsDiv);
}
