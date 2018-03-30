import React from 'react';

const Menu = ({ sections }) => {
    const renderMenu = sections.map(section => {
        return(            
            <div style={{marginBottom: '1em'}} key={section.header}>
                <p className="menu-label">
                    { section.header }
                </p>
                <ul className="menu-list">
                    { section.subtypes.map(subtype => {
                        return(
                            <li key={subtype}><a>{ subtype }</a></li>
                        );
                    }) }
                </ul>        
            </div>            
        );
    });
    
    return(
        <aside className="menu">
            { renderMenu }
        </aside>
    );
}

export default Menu;