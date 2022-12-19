import React from 'react';
import '../header/main.css';
import proj1 from '../Pictures/proj1.svg';
import proj2 from '../Pictures/proj2.svg';
import proj3 from '../Pictures/proj3.svg';
import proj4 from '../Pictures/proj4.png';

let refMO = React.createRef();
let refMO2 = React.createRef();
let refMO3 = React.createRef();
let refMO4 = React.createRef();

const mOver = () => {
  refMO.current.style.transition = 'width 0.15s, height 0.15s';
  refMO.current.style.width = "600px";
  refMO.current.style.height = "400px";
}
const mOut = () => {
  refMO.current.style.width = "570px";
  refMO.current.style.height = "360px";
}
const mOver2 = () => {
  refMO2.current.style.transition = 'width 0.15s, height 0.15s';
  refMO2.current.style.width = "600px";
  refMO2.current.style.height = "400px";
}
const mOut2 = () => {
  refMO2.current.style.width = "570px";
  refMO2.current.style.height = "360px";
}
const mOver3 = () => {
  refMO3.current.style.transition = 'width 0.15s, height 0.15s';
  refMO3.current.style.width = "600px";
  refMO3.current.style.height = "400px";
}
const mOut3 = () => {
  refMO3.current.style.width = "570px";
  refMO3.current.style.height = "360px";
}
const mOver4 = () => {
  refMO4.current.style.transition = 'width 0.15s, height 0.15s';
  refMO4.current.style.width = "600px";
  refMO4.current.style.height = "400px";
}
const mOut4 = () => {
  refMO4.current.style.width = "570px";
  refMO4.current.style.height = "360px";
}

const Main = () => {
  return (
    <div>
      <div className='MainContent'>
        <div className='content'>
          <a>ИНЖЕНЕРИЯ</a>
          <p>Платформа выделяющая аспекты <br />
            проектирования и реализацию схем на <br />
            практике с помощью конструктора <br />

          </p>
          <p className='content_p2'>ARDUINO</p>
        </div>
      </div>
      <div>
        <div className="pContent">
          <div className='pContent_items'>
            <div className='pContent_items_1'></div>
            <a className='pContent_items_2'>Все проекты были реализованы в среде моделирования </a>
            <a className='pContent_items_3'>TinkerCad</a>
            <p className='pContent_items_4'> Бесплатное веб-приложение для 3D проектирования, <br />
              удивительно простой и одновременно мощный <br /> эмулятор, с которого можно начинать обучение
              <br /> электронике и робототехнике</p>
          </div>
        </div>
        <div className='Arduino'>
          <div className='Arduino_info'>
            <div className='Arduino_info2'>
              <h1 className='p1'>Arduino</h1>
              <p className='p2'>На протяжении многих лет был мозгом тысяч проектов, от повседневных предметов до сложных научных приборов.
                Вокруг этой платформы с открытым исходным кодом собралось всемирное сообщество разработчиков - студентов, любителей, художников,
                программистов и профессионалов, их вклад привел к невероятному количеству доступных знаний, которые могут оказать большую помощь как новичкам,
                так и экспертам.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='PItems'>

        <a>Примеры проектов</a>
        <div className='ItemI'>
          <img className='imgPI' src={proj1} ref={refMO} onMouseOver={mOver} onMouseOut={mOut} />
          <img className='imgPI' src={proj2} ref={refMO2} onMouseOver={mOver2} onMouseOut={mOut2} />
          <img className='imgPI' src={proj3} ref={refMO3} onMouseOver={mOver3} onMouseOut={mOut3} />
          <img className='imgPI' src={proj4} ref={refMO4} onMouseOver={mOver4} onMouseOut={mOut4} />
          <div className='AboutPlatformFooter'>
            <div></div>
            <div className='FooterText'>
              <div>© 2022 Программная Инженерия</div>
              <div>
                <div className='telegram'></div>
                <div className='youtube'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Main