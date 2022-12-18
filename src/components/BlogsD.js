import "./Plugin.css";
import "./Blogs.css";
import dp from "../assests/profileUploads/dp.webp";
import dp2 from "../assests/profileUploads/dp2.jpeg";
import dp3 from "../assests/profileUploads/dp3.jpeg";
import dp4 from "../assests/profileUploads/dp4.jpeg";

import post9 from "../assests/profilePhotos/post9.jpeg";
import post10 from "../assests/profilePhotos/post10.jpeg";
import post11 from "../assests/profilePhotos/post11.jpeg";
import post12 from "../assests/profilePhotos/post12.jpeg";

import BlogCard from "./BlogCard";

function BlogsD(props) {
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
     
     <BlogCard dp={dp} post={post9} name="xyz" city="Delhi" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>
     <BlogCard dp={dp2} post={post10} name="raj" city="Delhi" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp3} post={post11} name="sam" city="Delhi" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp4} post={post12} name="soleman" city="Delhi" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     

    </div>
  );
}
export default BlogsD;
