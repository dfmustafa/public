inicializar();
getUserData();
getEducationData();

console.log(getRandomUser());

async function getRandomUser(){
    const data = await fetch('https://randomuser.me/api/');
    return data.json();
}

async function getDataJson(){
    let response = await fetch('json/data.json');
    let data = await response.json();
    return data;
}

function inicializar(){
    document.title ="Curriculum";
    document.getElementById("logros").addEventListener("click",mostrarMas)
}

function mostrarMas(){
    const h = document.getElementById("verMas").hidden;
    document.getElementById("verMas").hidden = !h;
}

function getUserData(){
    getRandomUser().then((data)=> {
    console.log(data.results[0]);
    let persona = data.results[0];
    document.getElementById("nombre").innerHTML = persona.name.first + ' ' + persona.name.last;
    document.getElementById("foto").src = persona.picture.large;
    document.getElementById("telefono").innerHTML = persona.cell;
    document.getElementById("email").innerHTML = persona.email;
    document.getElementById("direccion").innerHTML = persona.location.street.name + ' ' + persona.location.street.number + ', ' + persona.location.city;    
    });
}

function getEducationData(){
    getDataJson().then((data)=>{
        console.log(data);
        const ul = document.getElementById("educacion");                        
        for (let i=0;i<data.educacion.length;i++)
        {
        console.log(data.educacion[i]);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(data.educacion[i]));
        ul.appendChild(li)
        }
        document.getElementById("perfil").innerHTML = data.perfilProfesional;        
    })
}