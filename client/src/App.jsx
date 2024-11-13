import React, { useState } from 'react'
import Video from './components/Video'
import VideoPlayer from './components/VideoPlayer';
import { useGlobalContext } from './context/Global'
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadVideo from './components/UploadVideo';
import UploadButton from './components/UploadButton';

function App() {

  const [modal, setModal] = useState(false)

  // const g = useGlobalContext()
  // console.log(g)

  return (
    <BrowserRouter>
      <AppStyled className='App'>
        <div className='upload'>
          <UploadButton 
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => {setModal(true);}}
            bg="#1e90ff"
          />
        </div>
        {modal && <UploadVideo />}
        <h1>Video Player</h1>
        <Routes>
          <Route path = '/' element={< Video/>}  />
          <Route path = '/videos/:id' element={<VideoPlayer/>} />
        </Routes>
        {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
      </AppStyled>
    </BrowserRouter>
  )
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1{
    color: #fff;
    background: linear-gradient(to right, #00b894 40%,#705DF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .upload{
    display: flex;
    justify-content: flex-start;
  }
`;


export default App