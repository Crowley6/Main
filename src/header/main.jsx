import './../App.css';
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
            <a className='pContent_items_2 pContent_items_3'>TinkerCad</a>
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
        <div>
          <img className='proj1 imgPI' />
          <img className='proj2 imgPI' />
          <img className='proj3 imgPI' />
          <img className='proj4 imgPI' />
          <img className='proj5 imgPI' />
          <div className='footer'>
            <div className='footer_img'></div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Main