import React from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import "./post.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

let Post = (props) => {
  let { postData } = props;
  return (
    <div className="mainWrapper">
      <div className="postBox my-5">
        {/* Post Header */}
        <div className="header row nogutter">
          <div className="container m-2">
            <div className="col-md-12 d-flex ">
              <img
                src={require("./images/profile.jpg")}
                className="proiflePic rounded-circle"
                alt="profilePic"
              />
              <span className="dates">
                <p className="profileName mx-3">Alisha</p>
                <p className="text-dark postDate mx-3 ">
                  {new Date().toLocaleDateString()} at
                  {new Date().getHours()}:{new Date().getMinutes()}
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
              <p className="postDescription">
                Admission opens for the Month of August 50% Additional Discount
                on Admission Fee, during the lockdown period. Enroll yourself in
                the Career Orientated Program's With Aptech Visit or Call us
              </p>
            </div>
          </div>
        </div>
        {/* Post Images */}
        <div className="images  ">
          <div className="container mt-5">
            <FbImageLibrary
              images={[
                "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117391481_3441195809278139_7012610054686762360_o.png?_nc_cat=100&_nc_sid=8024bb&_nc_eui2=AeEGWei0ZksyBxKesVdBMgF4jbTJPyG6FvqNtMk_IboW-sqbzE4PxPoeN5S8eSa6ofC1aLiY-Z7LeD8u6kGsWWv2&_nc_ohc=WJ5xT2ZU3esAX8p7WFw&_nc_ht=scontent.fkhi1-1.fna&oh=63343eb1165aaae1ca9bc139b6403647&oe=5F659A8B",
                "https://s.abcnews.com/images/Business/facebook-likes-hidden-ht-ps-190927_hpMain_4x5_992.jpg",
                "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117659755_10164182562320357_1855217524437784224_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_eui2=AeFX8_BDUSQGjXJjmQivmTtn0U4WGGDA5u_RThYYYMDm70o3DEEiow7NdMWfAdrcqKvSMsyXyzdWP3NPIfSPWpd0&_nc_ohc=xNEDNLwXP_gAX_dBKA1&_nc_ht=scontent.fkhi1-1.fna&_nc_tp=7&oh=43ca9e0018a05ba1e053735a2c255d04&oe=5F62EBA3",
              ]}
            />
          </div>
        </div>
        {/* Post Action Data */}
        {/* <div className=" row  ">
          <div className="container mt-3">
            <div className="col-md-4">
            <ThumbUpIcon/>

            </div>
          </div>
        </div> */}
        {/* Post Action */}
        <div className="row pb-2">
          <div className="container mt-3">
              <hr/>
            <div className="col-md-12 abc">
          <span className="actionBtnName"><ThumbUpIcon className="likeIcon"/>Like</span>
          <span className="actionBtnName"><ChatBubbleOutlineIcon className="likeIcon"/>Comments</span>
          <span className="actionBtnName"><ShareIcon className="likeIcon"/>Share</span>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
