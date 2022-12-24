import React from 'react';
import './Info.css';
import srtl1 from '../Pictures/strl1.svg';
import {useLocation} from "react-router-dom";

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
    if (a === 0) {
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
    console.log(a)
    if (a < -399) return
    a -= 400;
    iimain.current.style.transition = 'margin 0.15s';
    iimain.current.style.marginLeft = `${a}px`;
    if (a === 0) {
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

const Info = (props) => {
    const { state } = useLocation();
    const { data } = state;
    console.log(data)
    return (
        <div>
            <div className='infoHead'>
                <h1 className='infoHeadH1'>
                    Проект № _ . {data.name_project}
                </h1>
                <div className='ismain'>
                    <img className='is1' onClick={imgList} src={srtl1} alt='Картина' />
                    <div></div>
                    <div></div>
                    <img className='is2' onClick={imgList2} src={srtl1} alt='Картина' />
                </div>

                <div className='infoHeadImg'>
                    <div className='iimain' ref={iimain}>
                        {data.images_id.map((item, index) => {
                            return <img ref={refI1} key={index} className={`ii${++index}`} src={item} alt='Картина' />
                        })}
                        {/*<img className='ii1' ref={refI1} src={jpg1} alt='Картина' />*/}
                        {/*<img className='ii2' ref={refI2} src={jpg1} alt='Картина' />*/}
                        {/*<img className='ii3' ref={refI3} src={jpg1} alt='Картина' />*/}
                    </div>
                </div>
                <div className='infoHeadLNF'>
                    Выполнили проект :<br />
                    {data.whoDid.replaceAll("\\n", "\n")}
                </div>
            </div>

            <div className='InfoAboutProject'>
                <div className='infoAbout'>
                    <div className='InfoAboutModules'>
                        <div className='IAM1'>Основой для программирования и создание схемы  проекта  реализованы на платформе <span>TinkerCad</span></div>
                        <div className='IAM2'>
                            Используемые модули:
                            {data.modules.replaceAll("\\n", "\n")}
                        </div>
                    </div>
                </div>
                <div className='infoAboutWasCreated'>
                    <div className='infoAWCCode'>
                        <h1 className='infoAWCH1'>Код проекта</h1>
                        <iframe
                            src={"https://carbon.now.sh/embed/"+data.codeUrl.replace("https://gist.github.com/MrNagaron/", "")+"?bg=rgba(74%2C144%2C226%2C1)&t=material&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=152%25&si=false&es=2x&wm=false"}
                            title={"carbon"}
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </div>
                    <div className='infoAWCText'>
                        Видеоролик как работает модуль, можно посмотреть тут:
                    </div>
                    <div className='infoAWCVideo'>
                        <iframe width="560" height="315" src={data.video}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
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