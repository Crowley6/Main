
let Backend = {
    h1a: {
        h1text: 'Ф. И. О.',
        h2text: 'Подробности'
    },
    project: [
    ]
}



const request_host = async (IRequestHost) => {
    let raw = "";
    if (IRequestHost.item !== undefined) {
        raw = JSON.stringify(IRequestHost.item);
    }
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
    myHeaders.append("Alt-Used", "project.mrnagaron.ml");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    let response = await fetch(`https://project.mrnagaron.ml/api/${IRequestHost.url}`, {
        method: IRequestHost.item !== undefined ? 'POST' : "GET",
        headers: myHeaders,
        body: IRequestHost.item !== undefined ? raw : undefined,
    })
    return await response.json();
}

export const getAllProject = async (item) => {
    let response = await request_host({ url: "projects", item: item })
    if (response.status === "success") {
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            Backend.project.push({
                ProjectsImg: response.data[i].images_id[0],
                ProjectsTextH1: response.data[i].whoDid,
                ProjectsText: response.data[i].desc,
                ProjectsAllInfo: response.data[i]
            })
        }
    }
    rerender(Backend);
    //return Backend;
}
let rerender = () => { }
export const subscribe = (observer) => {
    rerender = observer;
}

export default Backend;


// export const pushProject = () => {
//     let newProject = { ProjectsImg: '', ProjectsTextH1: Backend.h1a.h1text, ProjectsText: Backend.h1a.h2text, ProjectsButton: '' };
//     Backend.project.push(newProject);
//     rerender(Backend);
// }

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

// export const deleteProject = () => {
//     let mass = Backend.project.length;
//     if(mass > 2 ){
//     Backend.project.splice(mass - 1, 1)
//     }
//     else{return}
//     console.log(Backend.project.length);
//     rerender(Backend);
// }

// export const onChangeFunc = (ah1, ah2) => {
//     Backend.h1a.h1text = ah1;
//     Backend.h1a.h2text = ah2;
//     rerender(Backend);
// }
