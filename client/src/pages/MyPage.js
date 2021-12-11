import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./MyPage.css";
import MyInfo from "../component/MyInfo"

const MyPage = ({ userInfo, accessToken, handleSecession }) => {

    const [isMyInfoOpen, setIsMyInfoOpen] = useState(false)

    const openMyInfoModalFunc = () => {
        setIsMyInfoOpen(!isMyInfoOpen)
    }

    return (
      <div className="mypage-box col-12">
      <div className="mypage-backImage-box row-fluid">
        <img className="mypage-backImage col-md-9 col-11" src="https://media.discordapp.net/attachments/894783138381836339/908383174336340018/7057cbcecaa171b.jpeg"/>
      </div>
      <div className="mypage-title col-12">
        <img className="mypage-title-txt col-5" src="https://i.ibb.co/SrKT18c/image.png" />
       </div>
      <div className="mypage-content-box row-fluid">
        <div className="mypage-controller col-12">
          <div className="mypage-myinfo-txt btnbox" onClick={ openMyInfoModalFunc }>
            <img className="mypage-icon col-7" src="https://cdn-icons-png.flaticon.com/512/64/64494.png" />
            <div className="mypage-button-text">내 정보</div>
          </div>
          {isMyInfoOpen === false ? null 
          : <MyInfo openMyInfoModalFunc={openMyInfoModalFunc} userInfo={userInfo} handleSecession={handleSecession} accessToken={accessToken} />
          }
          <Link to={"/myuploadvideo"} style={{ textDecoration: 'none', color: "black" }} >
            <div className="mypage-myupload-txt btnbox">
              <img className="mypage-icon col-7" src="https://i.ibb.co/1rQXYwN/honey.png" />
              <div className="mypage-button-text">만든 꿀</div>
            </div>
          </Link>
          <Link to={"/mylikevideo"} style={{ textDecoration: 'none', color: "black" }} >
            <div className="mypage-mylike-txt btnbox">
              <img className="mypage-icon col-7" src="https://i.ibb.co/BsGjp7X/idea.png" />
              <div className="mypage-button-text">얻은 꿀</div>
            </div>
          </Link>
        </div>
      </div>
   </div>
    )
}

export default MyPage
