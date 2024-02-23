import React from 'react';

import Container from '../Container';

const Previewer = () => ({ isFullScreen, toggle, text}) => {

    const convertMarkdown = (input) => {
        // some rules to convert the input content.
        let output = input
        return output;
    }
    
    const content= (<p className='output'>{convertMarkdown(text)}</p> );

    return (
        <Container title='Previewer' content={content} isFullScreen={isFullScreen} toggle={toggle} />
    );
};
export default Previewer;