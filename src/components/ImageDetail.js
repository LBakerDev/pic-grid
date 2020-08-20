import React from 'react';

const ImageDetail = (props) => {
    return (
        <div>
            <img class="ui fluid image" src={props.photo.urls.regular} />
        </div>
    )
}

export default ImageDetail;