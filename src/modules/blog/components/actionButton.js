import React from "react";

const ActionButton = ({callback}) => {
    return(
        <div className="hero-foot">
            <div className="container footer-container-action">
                <i className="fa fa-arrow-down" 
                    id="icon-action-footer" 
                    style={{cursor:'click'}}
                    onClick={callback}
                />
            </div>
        </div>
    );
}

export default ActionButton;