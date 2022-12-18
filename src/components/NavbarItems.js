import './NavbarItems.css';
import './Plugin.css';

function NavbarItems(props){
    return (
       <div className="navbaritems flex flex-row text-dark fs-300">
        
        <a>{props.title}</a>
        </div>
    );
}
export default NavbarItems;