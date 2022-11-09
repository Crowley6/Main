import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './header/main';
import Projects from './Projects/projects';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>

        <div className='header'>
          <div className='header_1'>
            <div className='logo header_1_item' ></div>
            <div className='header_1_line header_1_item'></div>
            <a className='logoname header_1_item'>ENGINEER</a>
          </div>
          <div className='header_2'>
            <a href='/Main' className='header_2_item1 h_2_item'>Главная</a>
            <a href='/Projects' className='header_2_item2 h_2_item'>Проекты</a>
            <a href='/AboutPlatform' className='header_2_item3 h_2_item'>О Платформе</a>
          </div>
        </div>

        <div>
          <Routes>
            <Route path='/Main' element={<Main />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/AboutPlatform' element={<Main />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
