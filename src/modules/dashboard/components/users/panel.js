import React from "react";

const Panel = ({ callback, credentials }) => {
    return(
        <nav className="panel">
            <p className="panel-heading">
                Welcome:
            </p>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input 
                        className="input is-small" 
                        type="text" 
                        name="username"
                        placeholder="username" 
                        onChange={ credentials }/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                    </span>
                </p>
            </div>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input 
                        className="input is-small" 
                        name="password"
                        type="password" 
                        placeholder="password" 
                        onChange={ credentials }/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-key"></i>
                    </span>
                </p>
            </div>

            <div className="panel-block">
                <button 
                className="button is-primary is-outlined" 
                style={{ margin:'0px auto' }}
                onClick={ callback }
                >Login</button>
            </div>
        </nav>
    );
}

export default Panel;