
let datosRegusto = {};

function regustro() {
    let formulario = document.getElementById("Formulario");
    datosCapturados = {};

    for (let i = 0; i < formulario.elements.length; i++) {
        let elementos = formulario.elements[i];
        datosCapturados[elementos.name] = elementos.value;

    }


    console.log(datosCapturados);
    localStorage.setItem("datosRegusto", JSON.stringify(datosCapturados));

}

