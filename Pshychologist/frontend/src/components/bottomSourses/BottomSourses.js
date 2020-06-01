import React, { useState } from 'react';

function BottomSourses(props) {
    const imageClick = () => {
        const url = props.imageUrl;
        window.open(url, '_blank');
    }
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <img src={props.image}
                className="imgB"
                onClick={() => imageClick()}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>       
            </img>
            {isShown && (
                <a className="hintText" >
                    {props.name}
                </a>
            )}
        </div>
    )
}

export default BottomSourses