
let Backend = {
    h1a: {
        h1text: 'Ф. И. О.',
        h2text: 'Подробности'
    },
    project: [
        { ProjectsImg: '', ProjectsTextH1: 'Выполнили: Фамилия И.О.', ProjectsText: 'Зажигает светодиоды на разных скоростях в зависимости от введенных показаний в программу' },
        { ProjectsImg: '', ProjectsTextH1: 'Выполнили: Фамилия И.О.', ProjectsText: 'Зажигает светодиоды на разных скоростях в зависимости от введенных показаний в программу' },
    ]
}

export const pushProject = () => {
    let newProject = { ProjectsImg: '', ProjectsTextH1: Backend.h1a.h1text, ProjectsText: Backend.h1a.h2text, ProjectsButton: '' };
    Backend.project.push(newProject);
    rerender(Backend);
}

/*const f1unc = (mass, index) => {
    mass = Backend.project;
    let mass2 = [mass.length - 1];
    let i = 0;
    while (i < mass2.length) {
        if (i != index) {
            mass2[i];
        }
        i++;
    }
    return mass2;
}*/

export const deleteProject = () => {
    let mass = Backend.project.length;
    if(mass > 2 ){
    Backend.project.splice(mass - 1, 1)
    }
    else{return}
    console.log(Backend.project.length);
    rerender(Backend);
}

export const onChangeFunc = (ah1, ah2) => {
    Backend.h1a.h1text = ah1;
    Backend.h1a.h2text = ah2;
    rerender(Backend);
}
let rerender = () => { }
export const subscribe = (observer) => {
    rerender = observer;
}

export default Backend;