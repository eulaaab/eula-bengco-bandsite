// Eula Bengco MAIN JAVASCRIPT FILE

//posts the comments when the page renders
axiosGetFn();

//grabs the parent container
let commentParent = document.querySelector(".comment__container");

function axiosGetFn() {
  //using axios to GET values from API to render in webpage
  const axiosGet = axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
    )
    .then(response => {
      let commentsArr = response.data;
      let commentTimestamp = commentsArr;

      commentTimestamp.sort(function(a, b) {
        if (a.timestamp < b.timestamp) return 1;
        else if (a.timestamp > b.timestamp) return -1;
        else return 0;
      });

      commentTimestamp.forEach(displayComment);
    })
    .catch(error => {
      console.log("Error!");
    });
}

function displayComment(commentsObjArrData) {
  let commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment__wrapper");
  commentParent.appendChild(commentWrapper);

  //LEFT SIDE
  let commentDivLeft = document.createElement("div");
  commentDivLeft.classList.add("comment__left");
  commentWrapper.appendChild(commentDivLeft);

  let commentPhoto = document.createElement("div");
  commentPhoto.classList.add("comment__photo");
  commentDivLeft.appendChild(commentPhoto);

  //RIGHT SIDE
  let commentDivRight = document.createElement("div");
  commentDivRight.classList.add("comment__right");
  commentWrapper.appendChild(commentDivRight);

  let commentDivRightTop = document.createElement("div");
  commentDivRightTop.classList.add("comment__right-top");
  commentDivRight.appendChild(commentDivRightTop);

  let commentName = document.createElement("div");
  commentName.classList.add("comment__full-name");
  commentDivRightTop.appendChild(commentName);
  commentName.innerText = commentsObjArrData.name;

  let commentDate = document.createElement("div");
  commentDate.classList.add("comment__date");
  commentDivRightTop.appendChild(commentDate);
  let convertDate = new Date(commentsObjArrData.timestamp);
  let newCommentDateDay = convertDate.getDay();
  let newCommentDateMonth = convertDate.getMonth() + 1;
  let newCommentDateYear = convertDate.getFullYear();
  //converts to day/month/year format
  let newCommentDate = `${newCommentDateDay}/${newCommentDateMonth}/${newCommentDateYear}`;
  commentDate.innerText = newCommentDate;

  let commentComment = document.createElement("div");
  commentComment.classList.add("comment__comment");
  commentComment.innerText = commentsObjArrData.comment;
  commentDivRight.appendChild(commentComment);
}

//addEventListener from the HTML form
let form = document.getElementById("comment__form");
form.addEventListener("submit", commentSubmit => {
  commentSubmit.preventDefault();
  let newName = displayComment.target.name.value;
  let newComment = displayComment.target.comment.value;

  //rerenders the comment's section upon submit
  commentParent.innerText = "";
  //clears the values
  document.querySelector(".text").value = "";
  document.querySelector(".text-two").value = "";

  //posts the values from the submit form into the api
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823",
      {
        name: newName,
        comment: newComment
      }
    )
    .then(res => {
      console.log(res);
      axiosGetFn();
    })
    .catch(error => {
      console.log("it errored out");
    });
});
