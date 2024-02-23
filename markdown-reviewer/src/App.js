import React from 'react';

import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';

function App() {
  const [text, setText] = React.useState('');
  const [fullScreenIndex, setFullScreenIndex] = React.useState(0);


  return (
    <div className="App">
      <Editor isFullScreen = {fullScreenIndex === 1} 
              toggle = {fullScreenIndex === 1 ? setFullScreenIndex(0) : setFullScreenIndex(1)} 
              showText = {(e) => setText(e.target.value)}
              text = {text}/>

      <Previewer isFullScreen={fullScreenIndex === 2} 
              toggle = {fullScreenIndex === 2 ? setFullScreenIndex(0) : setFullScreenIndex(2)} 
              text = {text}/>
    </div>
  );
}

export default App;
