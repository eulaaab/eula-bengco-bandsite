// Eula Bengco MAIN JAVASCRIPT FILE

//grabs the parent container
let commentParent = document.querySelector(".comment__container");

function axiosGetFn() {
  let axiosGet = axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=5276e2d7-0178-438b-b62f-748cd9a1f823"
    )
    .then(response => {
      // console.log(response);
      let commentsArr = response.data;
      commentsArr.forEach(displayComment);
      console.log(commentsArr);
    });
}

axiosGetFn();

//commentsObjArrData

function displayComment(commentsObjArrData) {
  // console.log(zData);
  let commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment-wrapper");
  commentParent.appendChild(commentWrapper);

  //LEFT SIDE
  let commentDivLeft = document.createElement("div");
  commentDivLeft.classList.add("comment-left");
  commentWrapper.appendChild(commentDivLeft);

  let commentPhoto = document.createElement("div");
  commentPhoto.classList.add("photo");
  commentDivLeft.appendChild(commentPhoto);

  //RIGHT SIDE
  let commentDivRight = document.createElement("div");
  commentDivRight.classList.add("comment-right");
  commentWrapper.appendChild(commentDivRight);

  let commentDivRightTop = document.createElement("div");
  commentDivRightTop.classList.add("comment-right-top");
  commentDivRight.appendChild(commentDivRightTop);

  let commentName = document.createElement("div");
  commentName.classList.add("comment-full-name");
  commentDivRightTop.appendChild(commentName);
  commentName.innerText = commentsObjArrData.name;
  // console.log(commentNameItem);

  let commentDate = document.createElement("div");
  commentDate.classList.add("comment-date");
  commentDivRightTop.appendChild(commentDate);

  let formatDate = new Date(commentsObjArrData.timestamp);
  let formatDateDay = formatDate.getDay();
  let formatDateMonth = formatDate.getMonth() + 1;
  let formatDateYear = formatDate.getFullYear();
  let commentDateFormat = `${formatDateDay}/${formatDateMonth}/${formatDateYear}`;
  commentDate.innerText = commentDateFormat;

  commentsObjArrData.sort(compare());

  let commentComment = document.createElement("div");
  commentComment.classList.add("comment-comment");
  commentComment.innerText = commentsObjArrData.comment;
  commentDivRight.appendChild(commentComment);
}

function compare( {
  let dateOne = new Date(one.timestamp);
  let dateTwo = new Date(two.timstamp);
  return dateOne - dateTwo;
});

let form = document.getElementById("comment__form");
form.addEventListener("submit", displayComment => {
  displayComment.preventDefault();
  let newName = displayComment.target.name.value;
  console.log(newName);
  let newComment = displayComment.target.comment.value;
  console.log(newComment);

  document.querySelector(".text").value = "";
  document.querySelector(".text-two").value = "";

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
    });
    // .catch(res => {
    //   console.log('it errored out');
    // });
    //PUT A CATCH
});
