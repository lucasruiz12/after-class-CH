let misInscripciones = []

let deportes = [
    {
        id: 1,
        nombre: "Fútbol 7",
        cupos: true,
        lugar: "Canchas 1 y 2",
        img: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_super-futbol-7-4.jpg"
    },
    {
        id: 2,
        nombre: "Fútbol 11",
        cupos: true,
        lugar: "Anexo Complejo",
        img: "https://donpotrero.com/img/posts/2/medidas_sm.jpg"
    },
    {
        id: 3,
        nombre: "Básquet",
        cupos: false,
        lugar: "Estadio",
        img: "https://luismiguelguerrero.files.wordpress.com/2009/10/basketball.jpg"
    },
    {
        id: 4,
        nombre: "Hockey",
        cupos: true,
        lugar: "Anexo Complejo",
        img: "https://alveardiario.com/wp-content/uploads/2017/10/alvear-800x445.jpg"
    },
    {
        id: 5,
        nombre: "Handball",
        cupos: true,
        lugar: "Cancha 3",
        img: "https://pbs.twimg.com/media/DaW0hCFX4AA2Zof?format=jpg&name=large"
    },
]

let html = ""

deportes.forEach(el => {
    const classCard = el.cupos ? "card" : "redCard"
    html += `
        <div class=${classCard} >
            <img src=${el.img} class="img" />
            <ul class="list">
                <h3>Nuestras disciplinas</h3>
                <hr />
                <br />
                <li>
                    <p>
                        <b>
                            ${el.nombre}
                        </b>
                    </p>
                </li>
                <li>
                    <p>
                        En
                        <b>
                            ${el.lugar}
                        </b>
                    </p>
                </li>
            </ul>
            <button id=${el.id} class="button" onclick=inscribirse(${el.id})>Inscribirse</button>
            <button id=${el.id} class="button" onclick=darseDeBaja(${el.id})>Darse de baja</button>
        </div>
`

})

document.getElementById('container').innerHTML = html

function inscribirse(idAInscribir) {

    let revisionDeCupos = deportes.find(el => el.id === idAInscribir)
    localStorage.getItem("lista") ? misInscripciones = JSON.parse(localStorage.getItem("lista")) : misInscripciones = []

    if (revisionDeCupos.cupos) {
        if (!misInscripciones.some(el => el.id === idAInscribir)) {
            let disciplina = deportes.find(el => el.id === idAInscribir)
            misInscripciones.push(disciplina)
            localStorage.setItem("lista", JSON.stringify(misInscripciones))
        } else {
            alert("Ya estás inscripto! No podés inscribirte 2 o más veces, mi rey")
        }
    } else {
        alert("Esta disciplina NO ESTÁ DISPONIBLE para inscribirse")
    }
}

function darseDeBaja(idADarDeBaja) {

    let revisionDeCupos = deportes.find(el => el.id === idADarDeBaja)
    localStorage.getItem("lista") ? misInscripciones = JSON.parse(localStorage.getItem("lista")) : misInscripciones = []

    if (revisionDeCupos.cupos) {
        if (!misInscripciones.some(el => el.id === idADarDeBaja)) {
            alert("No podés darte de baja de algo a lo que no te inscribiste, pa!")
        } else {
            misInscripciones = misInscripciones.filter(el => el.id !== idADarDeBaja)
            localStorage.setItem("lista", JSON.stringify(misInscripciones))
        }
    } else {
        alert("Disciplina NO DISPONIBLE: Tampoco podés darte de baja")
    }
}