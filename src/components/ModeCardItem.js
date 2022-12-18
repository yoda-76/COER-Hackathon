import "./NavbarItems.css";
import "./Plugin.css";

function ModeCardItem(props) {
  return (
    <div className="modecarditem flex flex-col align-center justify-center text-dark fs-500">
      
      <div className="modecarditem-data flex flex-row">

      
        <p>{props.mode}</p> 
        <p>{props.price}</p>
      
      </div>

    </div>
  );
}
export default ModeCardItem;
