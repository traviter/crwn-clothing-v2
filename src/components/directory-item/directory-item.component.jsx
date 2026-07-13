import { Link } from "react-router-dom";

import { DirectoryItemContainer, DirectoryBodyContainer, BackgroundImage } from "./directory-item.styles";

const DirectoryItem = ({ category: { id, imageUrl, title } }) => {
    return (
        <DirectoryItemContainer key={id} to={`shop/${title}`}>
            <BackgroundImage $imageurl={imageUrl} />
            <DirectoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;