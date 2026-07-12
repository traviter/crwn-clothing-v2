import { Link } from "react-router-dom";
import "./directory-item.styles.scss"

const DirectoryItem = ({ category: { id, imageUrl, title } }) => {
    return (
        <Link className='directory-item-container' key={id} to={`shop/${title}`}>
            <div className='background-image' style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } />
            <div className='directory-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </Link>
    );
}

export default DirectoryItem;