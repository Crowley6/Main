import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './../header/main';
import Projects from './../Projects/projects';
import AboutP from './../AboutProject/AboutP';
import Info from './../InfoProjects/Info';
import '../Fonts/abhayalibre_medium.ttf';


function App(props) {
  
  return (
    <BrowserRouter>
      <div className='body'>
        <div className='header'>
          <div className='header_1'>
            <img className='body_img' />
            <div className='body_logo          body_header_1_item'></div>
            <div className='body_header_1_line body_header_1_item'></div>
            <div className='body_logoname      body_header_1_item'>ENGINEER</div>
          </div>
          <div className='header_2'>
            <a href='/Main' className='body_h_2_item'>Главная</a>
            <a href='/Projects' className='body_h_2_item'>Проекты</a>
            <a href='/AboutP' className='body_h_2_item'>О Платформе</a>
          </div>
        </div>

        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/Projects' element={<Projects Backend={props.Backend.project} h1a={props.h1a.h1a}/>} />
          <Route path='/AboutP' element={<AboutP />}/>
          <Route path='/Info' element={<Info />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
