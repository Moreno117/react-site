import React from 'react';
import './../../css/dashboard.css'

const Form = ({ title, source, callback, image, preview, upload, buttonText }) => {
    let picture = image === '' ? null : <img src={image.url} alt="Preview"/>
    return(
        <div>            
            <div className="column my-preview">
                <figure className="image is-3by2">
                    { picture }
                </figure>
            </div>
            
            <div className="field">
                <div className="file is-info has-name">
                    <label className="file-label" style={{margin: '10px auto'}}>
                        <input className="file-input" type="file" name="upload" onChange={preview} accept=".jpg, .jpeg, .png"/>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fa fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Choose photo…
                                </span>
                        </span>
                        <span className="file-name">
                            <strong>Name:</strong> {image.name}
                        </span>
                        <span className="file-name">
                            <strong>Size:</strong> {image.size}
                        </span>
                        <span className="file-name">
                            <strong>Type:</strong> {image.type}
                        </span>
                    </label>
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
                                name="title"
                                className="input" 
                                type="text" 
                                placeholder="Image Title" 
                                value={title}
                                onChange={ callback }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Source</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="by Forbes"
                                name="source"
                                onChange={ callback }
                                value={ source }
                            />
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
                            <button className="button is-primary" onClick={ upload }>
                                { buttonText }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );                
}

export default Form;