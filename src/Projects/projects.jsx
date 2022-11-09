import './projects.css';

const Projects = () => {
    return (
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
    );
}
export default Projects