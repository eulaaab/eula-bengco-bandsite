// Eula Bengco MAIN JAVASCRIPT FILE
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
  let commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment-wrapper");
  commentParent.appendChild(commentWrapper);

  //LEFT SIDE
  let commentDivLeft = document.createElement(["div"]);
  commentDivLeft.classList.add("comment-left");
  commentWrapper.appendChild(commentDivLeft);

  let commentPhoto = document.createElement("div");
  commentPhoto.classList.add("photo");
  commentDivLeft.appendChild(commentPhoto);

  //RIGHT SIDE
  let commentDivRight = document.createElement(["div"]);
  commentDivRight.classList.add("comment-right");
  commentWrapper.appendChild(commentDivRight);

  let commentDivRightTop = document.createElement(["div"]);
  commentDivRightTop.classList.add("comment-right-top");
  commentDivRight.appendChild(commentDivRightTop);

  let commentName = document.createElement("div");
  commentName.classList.add("comment-full-name");
  commentDivRightTop.appendChild(commentName);
  commentName.innerText = val.name;
  console.log(val.name);

  let commentDate = document.createElement("div");
  commentDate.classList.add("comment-date");
  commentDivRightTop.appendChild(commentDate);
  commentDate.innerText = val.date;
  console.log(val.date);

  let commentComment = document.createElement("div");
  commentComment.classList.add("comment-comment");
  commentComment.innerText = val.text;
  commentDivRight.appendChild(commentComment);
  console.log(val.text);
});

let form = document.getElementById(["comment__form"]);

form.addEventListener("submit", displayComment => {
  displayComment.preventDefault();

  let newCommentName = displayComment.target.name.value;
  let newCommentText = displayComment.target.comment.value;

  //For the date
  let d = new Date();

  let newCommentDateDay = d.getDate();
  let newCommentDateMonth = d.getMonth() + 1;
  let newCommentDateYear = d.getFullYear();
  let newCommentDate = `${newCommentDateDay}/${newCommentDateMonth}/${newCommentDateYear}`;

  console.log(newCommentDateDay);

  let date = displayComment.target.comment.value;
  console.log(date);

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
    let commentWrapper = document.createElement("div");
    commentWrapper.classList.add("comment-wrapper");
    commentParent.appendChild(commentWrapper);

    //LEFT SIDE
    let commentDivLeft = document.createElement(["div"]);
    commentDivLeft.classList.add("comment-left");
    commentWrapper.appendChild(commentDivLeft);

    let commentPhoto = document.createElement("div");
    commentPhoto.classList.add("photo");
    commentDivLeft.appendChild(commentPhoto);

    //RIGHT SIDE
    let commentDivRight = document.createElement(["div"]);
    commentDivRight.classList.add("comment-right");
    commentWrapper.appendChild(commentDivRight);

    let commentDivRightTop = document.createElement(["div"]);
    commentDivRightTop.classList.add("comment-right-top");
    commentDivRight.appendChild(commentDivRightTop);

    let commentName = document.createElement("div");
    commentName.classList.add("comment-full-name");
    commentDivRightTop.appendChild(commentName);
    commentName.innerText = val2.name;
    console.log(commentName);
    //displayComment.target.comment.value

    let commentDate = document.createElement("div");
    commentDate.classList.add("comment-date");
    commentDivRightTop.appendChild(commentDate);
    commentDate.innerText = val2.date;
    console.log(commentDate);

    let commentComment = document.createElement("div");
    commentComment.classList.add("comment-comment");
    commentDivRight.appendChild(commentComment);
    commentComment.innerText = val2.text;
    console.log(commentComment);
  });
});

//ANOTHER WAY OF FOREACH BUT FOUND THE EFFICIENT WAY ABOVE
//I'm leaving this here for my own reference
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
