import './comments.css'
import axios from 'axios';
import { useCallback,useState, useEffect } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
const {TextArea} = Input;
function Comments({accessToken,videoInfo}) {
  const [commentValue, setCommentValue] = useState('')
  const handleclick = (e) =>{
    setCommentValue(e.currentTarget.value)
  }
  const onSubmit = (e)=>{
    e.preventDefault(); //for refresh block
  }
  const uploadVideo = () => {
    axios
    .post(
      'https://localhost:80/comment',{
        video_id:videoInfo.video_id,
        comment:commentValue
      },{
        headers: {
          authorization: `Bearer ${accessToken}`,
        "Content-Type" : "application/json"   
      },
      withCredentials: true
    }
      ).then((res)=>{
           console.log(res)
       if(res.data.message==='Comment has been completed'){
        alert("성공")
       // window.location.replace('/')
       }
       else{
        alert("실패")
       }         
      
       }) 
       

  }
  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
     
    if(scrollTop + clientHeight === scrollHeight) {     
    }
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => window.removeEventListener('scroll', infiniteScroll, true);
    }, [infiniteScroll]);
    //const itemlist = itemList.map((obj, index) => <Video title={obj.title}  timestamp={obj.createdAt}/>)
      // useEffect(()=>{   
      //   axios
      //   .get(
      //     'https://localhost:80/comment',{
      //       video_id:videoInfo.video_id,
      //       comment:commentValue
      //     },{
      //       headers: {
      //         authorization: `Bearer ${accessToken}`,
      //       "Content-Type" : "application/json"   
      //     },
      //     withCredentials: true
      //   }
      //     ).then((res)=>{
      //          console.log(res)
      //      if(res.data.message==='Comment has been completed'){
      //       alert("성공")
      //      // window.location.replace('/')
      //      }
      //      else{
      //       alert("실패")
      //      }         
          
      //      }) 
      // },[])
 return(
     <div className='commentscontainer'>
         <br />
         <p> 댓글 </p>
         <hr/>
         
   <form style={{display:'flex'}} onSubmit={onSubmit}>
       <TextArea
            className='replyarea'
            style={{width:'100%', borderRadius: '5px'}}
            onChange = {handleclick}
            value={commentValue}
            placeholder='댓글을 입력해주세요'
            />
          <br/>
          <button style={{width: '20%',height:'52px'}} onClick={uploadVideo}>submit</button>
          
   </form>
   
   <br />
   <div>
   <Comment
         style={{display:'flex'}}
         author='김코딩'
          content={
                <p>
                날씨가 참 맑네요
                </p>
                }
            ></Comment>
            <hr/>
    </div>
    <div>
   <Comment
         style={{display:'flex'}}
         author='김코딩'
          content={
                <p>
                날씨가 참 맑네요
                </p>
                }
            ></Comment>
            <hr/>
    </div>
    <div>
   <Comment
         style={{display:'flex'}}
         author='김코딩'
          content={
                <p>
                날씨가 참 맑네요
                </p>
                }
            ></Comment>
            <hr/>
    </div>
    
     </div>
 )
}
export default Comments