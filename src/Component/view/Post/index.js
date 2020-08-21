import React, { useState } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShareIcon from "@material-ui/icons/Share";
import "./post.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

let Post = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [like, setLike] = useState(false);
  const [emojis] = useState([
    "like",
    "love",
    "wow",
    "yay",
    "angry",
    "haha",
    "sad",
  ]);

  let likeme = () => {
    setLike(true);
  };
  let { postData } = props;
  console.log(isShown);
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
        </div>S
      </div>
      {/* Post Images */}
      <div className="images">
        <div className=" mt-3">
          <FbImageLibrary images={postData.images} />
        </div>
      </div>
      {/* Post Action Data */}
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
          <div>
            abc
          </div>
        )}
      </div>

      <div className="">
        <div className="container mt-3">
          <hr />

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

            <div className="actionBtnName">
              <span className="like" onMouseEnter={() => setIsShown(true)}>
                <ThumbUpIcon onClick={likeme} /> Like
              </span>
            </div>
            <div className="actionBtnName">
              <ChatBubbleOutlineRoundedIcon className="likeIcon" /> Comments
            </div>
            <div className="actionBtnName">
              <ShareIcon className="likeIcon" /> Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
