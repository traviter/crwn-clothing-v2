import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss"

const Directory = ({ categories }) => {
    return <div className='directory-container'>
        {categories.map(({ title, id, imageUrl }) => {
            return <DirectoryItem key={id} category={({ title, imageUrl })} />
        })};
    </div>
}

export default Directory;