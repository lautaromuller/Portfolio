const descripciones = document.querySelectorAll('.descripcion')
const proyectos = document.querySelectorAll('.proyecto')


/// Mostrar descripción de proyectos
proyectos.forEach(proyecto => {
    const idProyecto = proyecto.getAttribute('id')
    let botonDescripcion = document.querySelector(`#${idProyecto} .ver-desc`)
    botonDescripcion.addEventListener('click', (e => efectoProyecto(e, idProyecto, botonDescripcion)))
})

function efectoProyecto(e, id, boton) {
    let proyectoFocus =  document.querySelector(`#${id} .imagen-proyecto`)
    let descripcionFocus =  document.querySelector(`#${id} .descripcion`)
    let tecnologiasUsadas = document.querySelector(`#${id} .tecnologias-usadas`)
    let enlaces = document.querySelector(`#${id} .enlaces-proyecto`)
    let titulo = document.querySelector(`#${id} .titulo-proyecto`)
    if (descripcionFocus.hasAttribute('hidden')) {
        boton.textContent = 'Imagen del proyecto'
        proyectoFocus.setAttribute('hidden', true)
        descripcionFocus.removeAttribute('hidden')
        descripcionFocus.classList.add('estilo-p')
        tecnologiasUsadas.classList.remove('ocultar')
        enlaces.classList.add('ocultar')
        titulo.classList.add('ocultar')
    }
    else {
        boton.textContent = 'Ver descripción'
        proyectoFocus.removeAttribute('hidden')
        descripcionFocus.setAttribute('hidden', true)
        descripcionFocus.classList.remove('estilo-p')
        tecnologiasUsadas.classList.add('ocultar')
        enlaces.classList.remove('ocultar')
        titulo.classList.remove('ocultar')
        
    }
}

/// Efecto de navbar
window.addEventListener('scroll', () => {
    let nav = document.getElementById('nav')
    if(window.scrollY > 0) {
        nav.classList.add('fondoNav')
    } else {
        nav.classList.remove('fondoNav')
    }
})

/// Cambiar navbar enfocado
const links = document.querySelectorAll('.ul-nav a[href^="#"]')

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        const id = entrada.target.getAttribute('id')
        const link = document.querySelector(`.ul-nav a[href="#${id}"]`)
        
        if(entrada.isIntersecting){
            document.querySelector('nav a.colorNav').classList.remove('colorNav')
            link.classList.add('colorNav');
        }
    })
}, {rootMargin: "-20% 0px -80% 0px"})

links.forEach(link => {
    const info = link.getAttribute('href')
    const target = document.querySelector(info)
    if(target) {
        observador.observe(target)
    }
})


window.addEventListener('load', () => {
    window.scrollTo(window.scrollX,window.scrollY)
})

