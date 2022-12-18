import './Navbar.css';
import './Plugin.css';
import NavbarItems from './NavbarItems';
import findRoute from '../assests/images/findRoute.svg';
import feed from '../assests/images/feed.svg';
import findGuide from '../assests/images/findRoute.svg';
import { useContext, useEffect } from 'react';
import { pageContext } from '../App';


function Navbar(){
    const {page,setPage}=useContext(pageContext);

    const pageChangeHandler=(e)=>{
        e.preventDefault();
        setPage(e.target.name);
    }
    useEffect(()=>{
        console.log("page");
    },[page])
    return (
        <div className="Navbar-frame flex flex-row bg-white text-dark align-center letter-spacing-2 fs-400 ff-mons justify-center">
            
            <button name='Trip-Epic' onClick={pageChangeHandler}>Trip-Epic</button>
            <NavbarItems title="Profile"/>

            <NavbarItems title="Find Guide"/>
            <NavbarItems title="Blogs"/>
        </div>
    );
}
export default Navbar;