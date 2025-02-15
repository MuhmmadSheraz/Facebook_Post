import React from "react";
import logo from "./logo.svg";
import Test from "./Component/Test";
import "./App.css";
import Post from "./Component/view/Post";
let obj = {
  createdBy: "Alisha",
  avatar:
    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p480x480/53873366_442815736455911_6068407207173554176_o.jpg?_nc_cat=105&_nc_sid=7206a8&_nc_eui2=AeG0h2z9B92CvvqwUEO630H1Blq-vzW4QwYGWr6_NbhDBmv8bx7pdX_zTG9-SK24-K26QTN8jR4dKErybk1Iusmy&_nc_ohc=h7ikOvYNtrcAX-fwNOA&_nc_ht=scontent.fkhi1-1.fna&_nc_tp=6&oh=0100abe478d4bfaa6c614005d606b781&oe=5F64CA1D",
  description:
    "Aulaad ki shadi agar jaldi naa ki too gunnah waaldein py bhe hoga...",
  images: [
    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/118373902_940113163150565_310551311767895810_o.jpg?_nc_cat=1&_nc_sid=8bfeb9&_nc_eui2=AeHLgAsApOxL_6gDGrT2j3FTu_fdiCiMMvm7992IKIwy-QlpGAOCLfPNKF5A-Sg2ZRPQYngu35DkTUkBO4c_GNNI&_nc_ohc=fi3V_t3oDqQAX96zT2A&_nc_ht=scontent.fkhi1-1.fna&_nc_tp=7&oh=91758dfd6a0a35b2f787600746edd57e&oe=5F6530E3",
    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/117337614_6213997611453_6585092474375041064_n.jpg?_nc_cat=104&_nc_sid=67cdda&_nc_eui2=AeH2rBzukeCtGVfNFlGp8l_2gOX-MruQkDKA5f4yu5CQMjaz0KhiSf94RjJFm7UxhZebZdmLfHkOrhVp86c1KkhB&_nc_ohc=RmMq_WWlnS8AX-DimUj&_nc_ht=scontent.fkhi1-1.fna&oh=0415c8b328a83e3b2d0e8a767418f8b1&oe=5F67272B",
  ],
  createdAt: Date.now(),
  likes: ["zain", "Ali", "kamara", "basit","Shahzain","Khalid","Asif","kashif","Rehman","Khatak","Sarfaraz","Bobby","Amira","Alisha","Furqaan","hussain","Bilal","Waleed","Sharef","Kami","Eijaz"],
};
let likeMe = (name) => {
  if (obj.likes.includes(name)) {
    obj.likes.splice(obj.likes.indexOf(name), 1);
  } else {
    obj.likes.push(name);
  }
  console.log(obj.likes);
};
function App() {
  return (
    <div className="App App-header">
      {/* <Test/> */}
      <Post postData={obj} likeFun={likeMe} />
    </div>
  );
}

export default App;
// <div className="pl-4 ">
//               <FacebookEmoji size="xxs" type="like" /> You and 47 others
//             </div>
//             <div className="pr-4 ">8 Comments</div>
// likes: ['Ali',"kamara","basit","Shiraz"],
