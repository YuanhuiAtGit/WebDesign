import React from 'react';

import Container from '../Container';



const Editor = ( { isFullScreen, toggle, showText, text } ) => {

    const content= (<textarea className='input' onChange={showText} value={text}/>);

    return (
        <Container title='Editor' content={content} isFullScreen={isFullScreen} toggle={toggle} />
    );

};

export default Editor;