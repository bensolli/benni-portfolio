import React from 'react';

export default ({ img, onclicked, ifChecked, change }) => {
    return (
        <>
            <label className="[ backgroundlabel ]">
                <input type="radio" className="backgroundlabel_backgroundCheckbox" onClick={onclicked} checked={ifChecked} onChange={change} />
                <span className="[ checkmark ]"><img src={`${img}`} /></span>
            </label>
        </>
    )
}