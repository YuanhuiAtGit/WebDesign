import React from 'react';

import { MdOutlineZoomInMap } from "react-icons/md";
import { MdOutlineZoomOutMap } from "react-icons/md";
import './Container.css';

const Container = ({ title, content, isFullScreen,toggle }) => {
    return (
        <div className='container'>
            <div className='container_header'>
                <p className='container_header-title'>{title}</p>
                {isFullScreen ? 
                    <MdOutlineZoomInMap onClick={toggle} className='container_header-btn'/>: 
                    <MdOutlineZoomOutMap onClick={toggle} className='container_header-btn'/>}
            </div>

            <div className='container_content'>
              {content}
            </div>
        </div>
        );

    }

export default Container;