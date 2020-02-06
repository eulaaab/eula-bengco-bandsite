// Eula Bengco SHOWS JAVASCRIPT FILE

//MAKES SHOWS HEADING FOR TABLET AND DESKTOP
let parentContainer = document.querySelector(".shows");
let showHeading = document.createElement("h2");
showHeading.classList.add("shows__heading");
parentContainer.appendChild(showHeading);
showHeading.innerText = "Shows";

//WRAP THE WHOLE SHOWS WITHOUT THE HEADING
let parentContainerTwo = document.createElement("div");
parentContainerTwo.classList.add("shows__container");
parentContainer.appendChild(parentContainerTwo);

let showTableWrapper = document.createElement("div");
showTableWrapper.classList.add("shows__table");
parentContainerTwo.appendChild(showTableWrapper);

//WRAPPER THE DATES VENUE LOCATION (TABLET AND DESKTOP VIEW)
let rowWrapperHeader = document.createElement("div");
rowWrapperHeader.classList.add("shows__title--non-mobile");
showTableWrapper.appendChild(rowWrapperHeader);

let datesHeader = document.createElement("h5");
datesHeader.classList.add("shows__header", "shows__title");
//puts the class you made in the parent container
rowWrapperHeader.appendChild(datesHeader);
datesHeader.innerText = "DATES";

let venueHeader = document.createElement("h5");
venueHeader.classList.add("shows__header", "shows__title");
rowWrapperHeader.appendChild(venueHeader);
venueHeader.innerText = "VENUE";

let locationHeader = document.createElement("h5");
locationHeader.classList.add("shows__header", "shows__title");
rowWrapperHeader.appendChild(locationHeader);
locationHeader.innerText = "LOCATION";

let transparentHeader = document.createElement("h5");
transparentHeader.classList.add("shows__header", "shows__title");
rowWrapperHeader.appendChild(transparentHeader);
transparentHeader.innerText = "         ";

//TABLET AND DESKTOP TABLE HEADERS END
//WRAPPED MY ROWS SO THEY FLEX
let showRowWrapper = document.createElement("div");
parentContainerTwo.appendChild(showTableWrapper);

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
  )
  .then(response => {
    let showsArr = response.data;

    showsArr.forEach(showsData => {
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

      //DATE FROM SHOWS API
      // //makes a variable and creats the element div inside the parent container
      let showsContainer = document.createElement("div");
      // //the variable shows container get than and put a class in there showDate
      showsContainer.classList.add("shows__text--bold"); //styling bold
      // //grab the wrapper and that's where you are going to put the new element you created
      rowWrapper.appendChild(showsContainer);
      showsContainer.innerText = showsData.date; //my prettier in vs code makes this multi-line

      //VENUE MOBILE HEADER
      let headingVenueMobile = document.createElement("div");
      headingVenueMobile.classList.add("shows__title--mobile");
      document.querySelectorAll(".shows__title--mobile");
      headingVenueMobile.innerText = "VENUE";
      rowWrapper.appendChild(headingVenueMobile);

      //VENUE FROM SHOWS API
      let showsContainerTwo = document.createElement("div");
      showsContainerTwo.classList.add("shows__text");
      rowWrapper.appendChild(showsContainerTwo);
      showsContainerTwo.innerText = showsData.place;

      //LOCATION MOBILE HEADER
      let headingLocationMobile = document.createElement("div");
      headingLocationMobile.classList.add("shows__title--mobile");
      document.querySelectorAll(".shows__title--mobile");
      headingLocationMobile.innerText = "LOCATION";
      rowWrapper.appendChild(headingLocationMobile);

      //LOCATION FROM SHOWS API
      let showsContainerThree = document.createElement("div");
      showsContainerThree.classList.add("shows__text-2");
      rowWrapper.appendChild(showsContainerThree);
      showsContainerThree.innerText = showsData.location;

      //BUTTONS BUY TICKETS
      let buttonShowsDiv = document.createElement("div"); //container
      buttonShowsDiv.classList.add("shows__button");
      rowWrapper.appendChild(buttonShowsDiv);
      document.querySelectorAll(".shows__button");
      let buttonShows = document.createElement("button");
      buttonShows.classList.add("button");
      buttonShows.innerText = "BUY TICKETS";
      buttonShowsDiv.appendChild(buttonShows);
    });
  });
