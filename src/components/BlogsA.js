import "./Plugin.css";
import "./Blogs.css";
import dp4 from "../assests/profileUploads/dp4.jpeg";
import dp5 from "../assests/profileUploads/dp5.jpeg";
import dp6 from "../assests/profileUploads/dp6.jpeg";
import dp7 from "../assests/profileUploads/dp7.jpeg";

import post5 from "../assests/profilePhotos/post5.jpeg";
import post6 from "../assests/profilePhotos/post6.jpeg";
import post7 from "../assests/profilePhotos/post7.jpeg";
import post8 from "../assests/profilePhotos/post8.jpeg";

import BlogCard from "./BlogCard";

function BlogsA(props) {
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
     
     <BlogCard dp={dp4} post={post5} name="Yash Agra" city="Agra" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>
     <BlogCard dp={dp5} post={post6} name="piyush Agra" city="Agra" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp6} post={post7} name="victoe Agra" city="Agra" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     <BlogCard dp={dp7} post={post8} name="ali Agra" city="Agra" caption="This place is more elgant than i thought. Its worth giving a try!!!" ></BlogCard>

     

    </div>
  );
}
export default BlogsA;
