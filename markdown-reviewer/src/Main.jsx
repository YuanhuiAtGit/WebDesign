import React from 'react';
import Container from './components/Container';
import Markdown from 'react-markdown';
import './Main.css';

const Main = () => {
    const [fullScreenIndex, setFullScreenIndex] = React.useState(0);
    const [text, setText] = React.useState(`
                                            # Welcome to my React Markdown Previewer!
                                            ## This is a sub-heading...
                                            ### And here's some other cool stuff:
                                            
                                            Heres some code, \`<div></div>\`, between 2 backticks.
                                            
                                            \`\`\`
                                            // this is multi-line code:
                                            
                                            function anotherExample(firstLine, lastLine) {
                                            if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
                                                return multiLineCode;
                                            }
                                            }
                                            \`\`\`
                                            
                                            You can also make text **bold**... whoa!
                                            Or _italic_.
                                            Or... wait for it... **_both!_**
                                            And feel free to go crazy ~~crossing stuff out~~.
                                            
                                            There's also [links](https://www.freecodecamp.org), and
                                            > Block Quotes!
                                            
                                            And if you want to get really crazy, even tables:
                                            
                                            Wild Header | Crazy Header | Another Header?
                                            ------------ | ------------- | -------------
                                            Your content can | be here, and it | can be here....
                                            And here. | Okay. | I think we get it.
                                            
                                            - And of course there are lists.
                                            - Some are bulleted.
                                                - With different indentation levels.
                                                    - That look like this.
                                            
                                            
                                            1. And there are numbered lists too.
                                            1. Use just 1s if you want!
                                            1. And last but not least, let's not forget embedded images:
                                            
                                            ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

    const [containerSize, setContainerSize] = React.useState({height: '', width: ''});
    const sizeRef = React.useRef(null);
    const handleResize = () => {
        setContainerSize({heght: sizeRef.current.offsetHeight, 
                        width: sizeRef.current.offsetWidth});
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="main">
            <Container title="Editor" 
                        content={<textarea 
                            value={text} 
                            onChange={(e) => (setText(e.target.value))}
                            id='editor'
                            ref={sizeRef}
                            style={{
                                maxWidth: "800px", 
                                minWidth: "500px", 
                                minHeight: "200px",
                            }}
                            />} 
                        isFullScreen={fullScreenIndex===1} 
                        toggle={() => setFullScreenIndex(i => 1- i)}
                        style={{ containerSize }} />

            <Container title="Preview" 
                        content={<div id='preview'><Markdown >{text}</Markdown></div>}
                        isFullScreen={fullScreenIndex===2} 
                        toggle={() => setFullScreenIndex(i => 2- i)} 
                        style={{ containerSize }} />
        </div>
    );
}

export default Main;