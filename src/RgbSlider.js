import React from 'react'

function RgbSlider(props) {
    return (
        <div>
            {props.label}: <input type="range" min="0" max="255"
                value={props.color}
                onChange={(event) => {
                    props.setColor(event.target.value);
                }}
            />
            { props.color}
        </div>

    );
}

export default RgbSlider;
