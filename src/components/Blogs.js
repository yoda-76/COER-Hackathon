import "./Plugin.css";
import "./Blogs.css";
import dp from "../assests/profileUploads/dp.webp";
import dp2 from "../assests/profileUploads/dp2.jpeg";
import dp3 from "../assests/profileUploads/dp3.jpeg";
import dp4 from "../assests/profileUploads/dp4.jpeg";

import post from "../assests/profilePhotos/post.jpg";
import post2 from "../assests/profilePhotos/post2.jpeg";
import post3 from "../assests/profilePhotos/post3.jpeg";
import post4 from "../assests/profilePhotos/post4.jpeg";

import BlogCard from "./BlogCard";

function Blogs(props) {
  // const [state, setSta]
  const data=props.data
  
  for(const k in data){
    console.log("aaa",data[k])
    blogs.push(data[k]);
  }
  const blogs=[];
  console.log(blogs);
  // const users=Object.values(data);
  // console.log(users.map(user=>user.blog))
  
    // data.map((uId,user)=><BlogCard  />)
  
  return (
    <div className="blogs align-center justify-center flex flex-col">
     {/* {()=>{
      for(const uId in data){
      const user=data[uId];
      return <BlogCard  name="Yash" city="Kanpur" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>
    }
     }} */}

     <BlogCard dp={dp} post={post} name="Yash" city="Jaipur" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>
     <BlogCard dp={dp2} post={post2} name="piyush" city="Jaipur" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp3} post={post3} name="victoe" city="Jaipur" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp4} post={post4} name="ali" city="Jaipur" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     

    </div>
  );
}
export default Blogs;
