import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    console.log(props.images.map(x => x));

    // const x = props.x.map(({id, description, urls}) => <img key={id} src={urls.small} alt={description}/>);

    const images = props.images.map(
        image => <ImageCard key={image.id} image={image}/>
    );

    return (
        <div className="image-list">
            {images}
        </div>
    )
};

export default ImageList