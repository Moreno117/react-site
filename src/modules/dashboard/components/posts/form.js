import React from  'react';

const Form = ({ topics, callback, author, title, image, content, subject, submitt, buttonLabel}) => {
    return(
        <div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Author</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control is-expanded has-icons-left">
                        <input className="input"
                            value={ author } 
                            type="text" 
                            placeholder="Name" 
                            onChange={ callback }
                            name="author"
                        />
                        <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                        </span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Topic</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">
                            <select value={ subject } onChange={ callback } name="subject">                
                                { topics.map(topic => {
                                    return (
                                        <option key={topic} value={topic}>{ topic }</option>
                                    );
                                })  }                                
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Title</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input 
                            value={ title }
                            className="input is-info" 
                            type="text" 
                            placeholder="e.g. Partnership opportunity"
                            name="title"
                            onChange={ callback }
                        />
                    </div>
                    <p className="help is-info">
                        This field is required
                    </p>
                    </div>
                </div>
            </div>
            
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Image</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input 
                                value={ image }
                                className="input is-black" 
                                type="text" 
                                placeholder="Wonderful Note Here"
                                name="image"
                                onChange={ callback }
                            />
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Content</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea       
                            value={ content }                      
                            rows="18"
                            name="body" 
                            className="textarea" 
                            placeholder="Woderful note here"
                            onChange={ callback }
                        >
                        </textarea>
                    </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">                
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" onClick={ submitt }>
                                { buttonLabel }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;