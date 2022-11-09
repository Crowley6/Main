import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './header/main';
import Projects from './Projects/projects';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <img className='body_img'/>
        <div className='header'>
          <div className='header_1'>
            <div className='body_logo          body_header_1_item'></div>
            <div className='body_header_1_line body_header_1_item'></div>
            <div className='body_logoname      body_header_1_item'>ENGINEER</div>
          </div>
          <div className='header_2'>
            <a href='/Main' className='body_header_2_item1          body_h_2_item'>Главная</a>
            <a href='/Projects' className='body_header_2_item2      body_h_2_item'>Проекты</a>
            <a href='/AboutPlatform' className='body_header_2_item3 body_h_2_item'>О Платформе</a>
          </div>
        </div>

        <div>
          <Routes>
            <Route path='/Main'          element={<Main />} />
            <Route path='/Projects'      element={<Projects />} />
            <Route path='/AboutPlatform' element={<Main />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
