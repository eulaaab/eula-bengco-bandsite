let commentsObj = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    text:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    text:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    text:
      "How can someone be so good!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

//grabs the parent container
let commentParent = document.querySelector([".comment__container"]);

commentsObj.forEach(val => {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__date");
  commentContainer.innerText = val.date;
  commentParent.appendChild(commentContainer);

  console.log(val.date);

  let commentContainerTwo = document.createElement("div");
  commentContainerTwo.classList.add("comment__name");
  commentContainerTwo.innerText = val.name;
  commentParent.appendChild(commentContainerTwo);
  console.log(val.name);

  let commentContainerThree = document.createElement("div");
  commentContainerThree.classList.add("comment__text");
  commentContainerThree.innerText = val.text;
  commentParent.appendChild(commentContainerThree);
  console.log(val.text);
});

// //taking the new comment and the page re-renders with the new comment
// // Constructs a new comment object
// // Pushes a new comment object to an array of comments
// // Clears all comments from the page
// // Re-renders to the page all comments from the comment array
// // Clears the input fields after submitting a new comment
let form = document.getElementById(["comment__form"]);

form.addEventListener("submit", displayComment => {
  displayComment.preventDefault();

  let newCommentName = displayComment.target.comment.value;
  let newCommentText = displayComment.target.comment.value;

  //For the date
  let d = new Date();

  let newCommentDateDay = d.getDate();
  let newCommentDateMonth = d.getMonth() + 1;
  let newCommentDateYear = d.getFullYear();
  let newCommentDate = `${newCommentDateDay}/${newCommentDateMonth}/${newCommentDateYear}`;

  console.log(newCommentDateDay);

  let date = displayComment.target.comment.value;

  commentsObj.unshift({
    name: newCommentName,
    date: newCommentDate,
    text: newCommentText
  });

  console.log(commentsObj);

  commentParent.innerText = "";
  document.querySelector(".text").value = "";
  document.querySelector(".text-two").value = "";

  commentsObj.forEach(val2 => {
    let commentContainerTwo = document.createElement("div");
    commentContainerTwo.classList.add("comment__name");
    commentParent.appendChild(commentContainerTwo);
    commentContainerTwo.innerText = val2.name;
    console.log(commentContainerTwo);

    console.log(displayComment.target.comment.value);
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__date");
    commentContainer.innerText = val2.date;
    commentParent.appendChild(commentContainer);
    console.log(commentContainer);

    let commentContainerThree = document.createElement("div");
    commentContainerThree.classList.add("comment__text");
    commentParent.appendChild(commentContainerThree);
    commentContainerThree.innerText = val2.text;
  });
});

//ANOTHER WAY OF FOREACH BUT FOUND THE EFFICIENT WAY ABOVE
// const commentContainerTwo = document.createElement("div");
// commentContainerTwo.classList.add("comment__name");
// commentParent.appendChild(commentContainerTwo);

// document.querySelectorAll(".comment__name").innerText = val.name;
// console.log(val.name);

// const commentContainerThree = document.createElement("div");
// commentContainerThree.classList.add("comment__text");
// commentParent.appendChild(commentContainerThree);
// document.querySelectorAll(".comment__text").innerText = val.text;
// console.log(val.text);

// let commentContainerTwo = document.createElement("div");
// commentContainerTwo.classList.add("comment__name");
// commentParent.appendChild(commentContainerTwo);
// commentContainerTwo.innerText = commentsObj.name;
// console.log(commentContainerTwo);

// console.log(displayComment.target.comment.value);
// let commentContainer = document.createElement("div");
// commentContainer.classList.add("comment__date");
// commentContainer.innerText = commentsObj.date;
// commentParent.appendChild(commentContainer);
// console.log(commentContainer);

// let commentContainerThree = document.createElement("div");
// commentContainerThree.classList.add("comment__text");
// commentParent.appendChild(commentContainerThree);
// commentContainerThree.innerText = commentsObj.text;
