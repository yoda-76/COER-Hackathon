import "./Plugin.css";
import "./BlogCard.css";


import background from "../assests/bg-img.jpg";
import like from "../assests/images/like-pending.png";

import dislike from "../assests/images/unlike-pending.png";

function BlogCard(props) {

  return (
    <div className="blogcard bg-dark text-dark flex justify-center align-center flex-col">
      <div className="uploaderinfo align-center flex flex-col">
        <div className="uploaderinfo-img "><div style={{ backgroundImage: `url(${props.dp})` }}/></div>

        <div className="uploaderinfo-text ff-noto fs-400">{props.name}</div>
        <div className="uploaderinfo-city grey ff-mons fs-200">{props.city}</div>
      </div>
      <div className="uploaderphoto"><div style={{ backgroundImage: `url(${props.post})` }}/></div>
      <div className="uploadercaption grey letter-spacing-4 fs-25">{props.caption} Few places conjure Mexico City’s mix of vibrant style, outstanding gastronomy, rich history and bustling street life. Post-pandemic, that blend has gone into overdrive, with new museums featuring the sweep of Mexican art, a panoply of restaurants and bars, and an expanding fashion scene that embraces traditional craft. You can shop for leather bags and ponchos, sample local craft beers and join jazz fans for a concert in a cozy club. Amid the buzz, it’s also worth seeking out the secrets of the Historic Center, where travelers can discover hidden murals, explore an ancient market’s warrens and immerse themselves in the city’s layers and incongruities.</div>
      <div className="uploaderbuttons flex flex-row">
        <div className="uploaderbuttons-like"><div style={{ backgroundImage: `url(${like})` }}/></div>
        <div className="uploaderbuttons-dislike"><div style={{ backgroundImage: `url(${dislike})` }}/></div>

      </div>
    </div>
  );
}
export default BlogCard;
