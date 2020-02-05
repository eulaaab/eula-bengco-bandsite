// Eula Bengco MAIN JAVASCRIPT FILE
// let x = [
//   {
//     name: "Micheal Lyons",
//     date: "12/18/2018",
//     text:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
//   },
//   {
//     name: "Gary Wong",
//     date: "12/12/2018",
//     text:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
//   },
//   {
//     name: "Theodore Duncan",
//     date: "11/15/2018",
//     text:
//       "How can someone be so good!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
//   }
// ];

//grabs the parent container
let commentParent = document.querySelector([".comment__container"]);

let commentsObj = axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
  )
  .then(response => {
    // console.log(response);
    let commentsArr = response.data;

    commentsArr.forEach(zData => {
      // console.log(zData);
      let commentWrapper = document.createElement("div");
      commentWrapper.classList.add("comment-wrapper");
      commentParent.appendChild(commentWrapper);

      //LEFT SIDE
      let commentDivLeft = document.createElement(["div"]);
      commentDivLeft.classList.add("comment-left");
      commentWrapper.appendChild(commentDivLeft);

      let commentDivRight = document.createElement(["div"]);
      commentDivRight.classList.add("comment-right");
      commentWrapper.appendChild(commentDivRight);

      let commentDivRightTop = document.createElement(["div"]);
      commentDivRightTop.classList.add("comment-right-top");
      commentDivRight.appendChild(commentDivRightTop);

      let commentName = document.createElement("div");
      commentName.classList.add("comment-full-name");
      commentDivRightTop.appendChild(commentName);
      let commentNameItem = (commentName.innerText = zData.name);
      // console.log(commentNameItem);

      let commentDate = document.createElement("div");
      commentDate.classList.add("comment-date");
      commentDivRightTop.appendChild(commentDate);
      commentDate.innerText = zData.timestamp;
      // console.log(zData.timstamp);

      let commentComment = document.createElement("div");
      commentComment.classList.add("comment-comment");
      commentComment.innerText = zData.comment;
      commentDivRight.appendChild(commentComment);
      // console.log(zData.comment);
    });
    commentsDateArr = commentsArr[0].timestamp;
    console.log(commentsDateArr);
  });

//   //For the date
//   let dateForm = new Date();

//   let newCommentDateDay = dateForm.getDate();
//   let newCommentDateMonth = dateForm.getMonth() + 1;
//   let newCommentDateYear = dateForm.getFullYear();
//   let newCommentDate = `${newCommentDateDay}/${newCommentDateMonth}/${newCommentDateYear}`;

//   console.log(newCommentDate);

//   let newDate = displayComment.target.comment.value;
//   console.log(newDate);
// });

let form = document.getElementById(["comment__form"]);
console.log(form);
form.addEventListener("submit", displayComment => {
  displayComment.preventDefault();

  let newName = displayComment.target.name.value;
  console.log(newName);
  let newComment = displayComment.target.comment.value;
  console.log(newComment);

  //date stuff
  let dateForm = new Date();
  let newCommentDateDay = dateForm.getDate();
  let newCommentDateMonth = dateForm.getMonth() + 1;
  let newCommentDateYear = dateForm.getFullYear();
  let newCommentDate = `${newCommentDateDay}/${newCommentDateMonth}/${newCommentDateYear}`;
  console.log(newCommentDate);

  // let newCommentPost =
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823",
      {
        name: newName,
        comment: newComment
      }
    )
    .then(res => {
      axios.get(
        "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
      );
      console.log(res);
      let commentWrapper = document.createElement("div");
      commentWrapper.classList.add("comment-wrapper");
      commentParent.appendChild(commentWrapper);

      //LEFT SIDE
      let commentDivLeft = document.createElement(["div"]);
      commentDivLeft.classList.add("comment-left");
      commentWrapper.appendChild(commentDivLeft);

      let commentDivRight = document.createElement(["div"]);
      commentDivRight.classList.add("comment-right");
      commentWrapper.appendChild(commentDivRight);

      let commentDivRightTop = document.createElement(["div"]);
      commentDivRightTop.classList.add("comment-right-top");
      commentDivRight.appendChild(commentDivRightTop);

      let commentName = document.createElement("div");
      commentName.classList.add("comment-full-name");
      commentDivRightTop.appendChild(commentName);
      commentName.innerText = newName;
      // console.log(commentNameItem);

      let commentDate = document.createElement("div");
      commentDate.classList.add("comment-date");
      commentDivRightTop.appendChild(commentDate);
      commentDate.innerText = newCommentDate;
      // console.log(zData.timstamp);

      let commentComment = document.createElement("div");
      commentComment.classList.add("comment-comment");
      commentComment.innerText = newComment;
      commentDivRight.appendChild(commentComment);
      // console.log(zData.comment);
    })
    .catch(err => {
      console.log(err);
    });
});

// axios
//     .get(
//       "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
// ,
// {
//   name: newName,
//   comment: newComment
// }
//     )
//   .then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// });
// console.log(response);

// newCommentPost;
// let newCommentGet = axios.post(
//   "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823",
//   {
//     name: newName,
//     comment: newComment,
//     timestamp: newDate
//   }
// );
