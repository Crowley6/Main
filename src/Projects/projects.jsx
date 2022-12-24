import React, {useState} from 'react';
import './projects.css';
import { Navigate } from 'react-router-dom';


const Project = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();

    const handleClick = e => {
        e.preventDefault();
        setRedirect(true);
        setData(props.ProjectsAllInfo);
        console.log(data);
    }
    if (redirect)
        return <Navigate to={{ pathname: '/Info' }} state={{ data }} />


    return (
        <div className='Projects'>
            <img className='ProjectsImg' src={props.ProjectsImg} alt={"imageProject"}/>
            <h1 className='ProjectsTextH1' >{props.ProjectsTextH1}</h1>
            <div className='ProjectsText'>{props.ProjectsText}</div>
            <button className='ProjectsButton' onClick={handleClick}>Подробнее</button>
        </div>
    )
}



const Projects = (props) => {

    let projectMap = props.Backend.map(mapProject => <Project ProjectsImg={mapProject.ProjectsImg} ProjectsTextH1={mapProject.ProjectsTextH1} ProjectsText={mapProject.ProjectsText} ProjectsButton={mapProject.ProjectsButton} ProjectsAllInfo={mapProject.ProjectsAllInfo} />);

    // let pushProject = () => {
    //     props.pushProject();
    // };
    // let deleteProject = () => {
    //     props.deleteProject();
    // }

    // let textH1 = React.createRef();
    // let textH2 = React.createRef();

    // let onChangeFunc = () => {
    //     let ah1 = textH1.current.value;
    //     let ah2 = textH2.current.value;
    //     console.log(ah1);
    //     props.onChangeFunc(ah1, ah2);
    // }

    return (
        <div>
            <div className='ProjectsBody'>
                <div className='ProjectsBodyTextH1'>Проекты на Arduino
                </div>
                <div className='ProjectsBodyText'>
                    Проект Ардуино – это всегда сочетание электронной схемы, <br />
                    некоторых связанных друг с другом аппаратных и механических <br />
                    устройств, системы питания и программного обеспечения <br />
                    Все проекты можно  разделить на несколько групп:
                </div>
                <div className='ProjectsBodyText2'>
                    <ul>
                        <li>Мигающие светодиоды – маячок, мигалка, светофор и другие.</li>
                        <li>Проекты с датчиками: от простейших аналоговых до цифровых, использующих разнообразные протоколы для обмена данными.</li>
                        <li>Устройства регистрации и отображения информации.</li>
                        <li>Машины и устройства с сервоприводами и шаговыми двигателями.</li>
                        {/* <input onChange={onChangeFunc} type="text" value={props.h1a.h1text} ref={textH1} />
                        <input onChange={onChangeFunc} type="text" value={props.h1a.h2text} ref={textH2} />
                        <button onClick={pushProject}>добавить</button>
                        <button onClick={deleteProject}>удалить</button> */}
                    </ul>
                </div>
                <div className='AllProjects'>
                    {projectMap}
                    <div className='ProjectsFooter'>
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
export default Projects