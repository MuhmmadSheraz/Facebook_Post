import React, { useState, useEffect } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./post.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

let Post = (props) => {
  let { postData } = props;
  let { likeFun } = props;
  console.log(likeFun);
  console.log(postData.likes.length);
  const [isShown, setIsShown] = useState(false);
  const [isLike, setIslike] = useState(false);
  const [isRespond, setRespond] = useState(true);
  const [emojis] = useState([
    "like",
    "love",
    "wow",
    "yay",
    "angry",
    "haha",
    "sad",
  ]);
  useEffect(() => {
    if (postData.likes.length == 0) {
      setRespond(false);
    }
    else{
      setRespond(true);

    }
  }, [postData.likes.length]);

  let likeme = () => {
    if (isLike == true) {
      setIslike(false);
    } else if (isLike == false) {
      setIslike(true);
      props.likeFun("Sheraz")
    }
  };

  return (
    <div className="postBox">
      {/* Post Header */}
      <div className="header row nogutter">
        <div className="container m-2">
          <div className="col-md-12 d-flex ">
            <img
              src={postData.avatar}
              className="proiflePic rounded-circle"
              alt="profilePic"
            />
            <span className="dates">
              <p className="profileName mx-3">{postData.createdBy}</p>
              <p className="text-dark postDate mx-3 ">
                {new Date().toLocaleDateString()} at {new Date().getHours()}:
                {new Date().getMinutes()}
                <PublicIcon className="mx-1" />
              </p>
            </span>
            <div className="float-right ml-auto ">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Post Description */}
      <div className="description row nogutter">
        <div className="container ">
          <div className="col-md-12 d-flex ">
            <p className="postDescription">{postData.description}</p>
          </div>
        </div>
      </div>
      {/* Post Images */}
      <div className="images">
        <div className=" mt-3">
          <FbImageLibrary images={postData.images} />
        </div>
      </div>
      {/* Post  Data */}
      {isRespond && (
        <div className=" d-flex justify-content-between likeData">
          {postData.likes &&
          postData.likes.length &&
          postData.likes.includes("Shiraz") ? (
            <>
              <div className="pl-4 ">
                <FacebookEmoji size="xxs" type="like" /> You and 47 others
              </div>
              <div className="pr-4 ">8 Comments</div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      )}

      <div className="">
        <div className="container mt-3">
          <hr />
          {/* Post Action */}
          <div className="abc my-2" onMouseLeave={() => setIsShown(false)}>
            {/* <div> */}
            {isShown && (
              <div
                className="allActionIcons "
                onMouseLeave={() => setIsShown(false)}
              >
                <div className="d-flex">
                  {emojis &&
                    emojis.length &&
                    emojis.map((emoji, ind) => {
                      return (
                        <div className="m-1" key={ind}>
                          <FacebookEmoji size="sm" type={emoji} />
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {isLike ? (
              <div className=" like text-primary">
                <span
                  className="like actionBtnName"
                  onMouseEnter={() => setIsShown(true)}
                  onClick={likeme}
                >
                  <img
                    src={require("./images/like.png")}
                    alt="Like Icon"
                    className="mx-1 actionBtnName"
                  />
                  Like
                </span>
              </div>
            ) : (
              <span
                className="like text-dark actionBtnName"
                onMouseEnter={() => setIsShown(true)}
                onClick={likeme}
              >
                <img
                  src="https://img.icons8.com/fluent-systems-regular/24/000000/facebook-like.png"
                  className="mx-1 actionBtnName"
                />
                Like
              </span>
            )}
            <div className="actionBtnName ">
              <img
                src="https://img.icons8.com/ios/20/000000/comments.png"
                className="mx-1 actionBtnName"
              />
              Comments
            </div>
            <div className="actionBtnName">
              <img
                src={require("./images/share.png")}
                alt="Share Icon"
                className="mx-1 actionBtnName"
              />
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
