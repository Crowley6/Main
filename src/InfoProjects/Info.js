import React from 'react';
import './Info.css';
import jpg1 from '../Pictures/lowsales.png';
import srtl1 from '../Pictures/strl1.svg';

let refI1 = React.createRef();
let refI2 = React.createRef();
let refI3 = React.createRef();
let iimain = React.createRef();

let a = 0;
const imgList = () => {

    if (a > 399) return
    a += 400;
    iimain.current.style.transition = 'margin 0.15s';
    iimain.current.style.marginLeft = `${a}px`;
    if (a == 0) {
        refI2.current.style.transition = 'width 0.15s, height 0.15s';
        refI2.current.style.width = "650px";
        refI2.current.style.height = "400px";
        refI2.current.style.zIndex = 2;
        refI1.current.style.zIndex = 1;
        refI3.current.style.zIndex = 1;

        refI3.current.style.transition = 'width 0.15s, height 0.15s';
        refI3.current.style.width = "500px";
        refI3.current.style.height = "350px";
        refI1.current.style.transition = 'width 0.15s, height 0.15s';
        refI1.current.style.width = "500px";
        refI1.current.style.height = "350px";
    }
    else {


        refI1.current.style.transition = 'width 0.15s, height 0.15s';
        refI1.current.style.width = "650px";
        refI1.current.style.height = "400px";
        refI1.current.style.zIndex = 2;









        refI2.current.style.transition = 'width 0.15s, height 0.15s';
        refI2.current.style.width = "500px";
        refI2.current.style.height = "350px";
        refI2.current.style.zIndex = 1;
        refI3.current.style.transition = 'width 0.15s, height 0.15s';
        refI3.current.style.width = "500px";
        refI3.current.style.height = "350px";
        refI3.current.style.zIndex = 1;
    }
    console.log(a);

}
const imgList2 = () => {

    if (a < -399) return
    a -= 400;
    iimain.current.style.transition = 'margin 0.15s';
    iimain.current.style.marginLeft = `${a}px`;
    if (a == 0) {
        refI2.current.style.transition = 'width 0.15s, height 0.15s';
        refI2.current.style.width = "650px";
        refI2.current.style.height = "400px";
        refI2.current.style.zIndex = 2;
        refI1.current.style.zIndex = 1;
        refI3.current.style.zIndex = 1;

        refI3.current.style.transition = 'width 0.15s, height 0.15s';
        refI3.current.style.width = "500px";
        refI3.current.style.height = "350px";
        refI1.current.style.transition = 'width 0.15s, height 0.15s';
        refI1.current.style.width = "500px";
        refI1.current.style.height = "350px";
    }
    else {
        refI3.current.style.transition = 'width 0.15s, height 0.15s';
        refI3.current.style.width = "650px";
        refI3.current.style.height = "400px";
        refI3.current.style.zIndex = 2;




        refI1.current.style.transition = 'width 0.15s, height 0.15s';
        refI1.current.style.width = "500px";
        refI1.current.style.height = "350px";
        refI1.current.style.zIndex = 1;
        refI2.current.style.transition = 'width 0.15s, height 0.15s';
        refI2.current.style.width = "500px";
        refI2.current.style.height = "350px";
        refI2.current.style.zIndex = 1;
    }
    console.log(a);

}

const Info = () => {
    return (
        <div>
            <div className='infoHead'>
                <h1 className='infoHeadH1'>
                    Проект № _ . Бегущий огонек
                </h1>
                <div className='ismain'>
                    <img className='is1' onClick={imgList} src={srtl1} alt='Картина' />
                    <div></div>
                    <div></div>
                    <img className='is2' onClick={imgList2} src={srtl1} alt='Картина' />
                </div>

                <div className='infoHeadImg'>
                    <div className='iimain' ref={iimain}>
                        <img className='ii1' ref={refI1} src={jpg1} alt='Картина' />
                        <img className='ii2' ref={refI2} src={jpg1} alt='Картина' />
                        <img className='ii3' ref={refI3} src={jpg1} alt='Картина' />
                    </div>
                </div>
                <div className='infoHeadLNF'>
                    Выполнили проект :<br />
                    ФИО
                </div>
            </div>

            <div className='InfoAboutProject'>
                <div className='infoAbout'>
                    <h1 className='infoAboutH1'>Схема соединения</h1>
                    <img className='infoAboutImg' src={'1.jpg'} />
                    <div className='InfoAboutModules'>
                        <div className='IAM1'>Основой для программирования и создание схемы  проекта  реализованы на платформе <span>TinkerCad</span></div>
                        <div className='IAM2'>
                            Используемые модули:
                            контроллер Arduino UNO
                            плата для прототипирования
                            резистор 10 Ом
                            светодиод 7 шт
                            провода папа-папа
                        </div>
                    </div>
                </div>
                <div className='infoAboutWasCreated'>
                    <div className='infoAWCCode'>
                        <h1 className='infoAWCH1'>Код проекта</h1>
                        <iframe src={'Project.html'}></iframe>
                    </div>
                    <div className='infoAWCText'>
                        Видеоролик как работает модуль, можно посмотреть тут:
                    </div>
                    <div className='infoAWCVideo'>
                        <video controls="controls" poster={jpg1} width='970px' height='500px'>
                            <source src='1.mp4' />
                        </video>
                        <div className='infoFooter'>
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

        </div>
    )
}
export default Info;