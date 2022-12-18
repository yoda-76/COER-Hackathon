import './Plugin.css';
import './ModeCard.css'
import ModeCardItem from './ModeCardItem';
function ModeCard(props){
    return (
        <div className='text-dark flex flex-col align-center'>
          
           
            <ModeCardItem mode={props.mode} price={props.fare}></ModeCardItem>
            </div>
    );
}
export default ModeCard;