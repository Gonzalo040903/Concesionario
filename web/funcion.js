const formulario = document.getElementById("formulario");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const marca = document.getElementById("marcaV").value;
    const modelo = document.getElementById("modeloV").value;
    const year = document.getElementById("yearV").value;
    const color = document.getElementById("colorV").value;
    const combustible = document.getElementById("combustibleV").value;
    const motor = document.getElementById("motorV").value;

    const vehiculo = { marca: marca, modelo: modelo, year: year, color: color, motor: [{ combustible: combustible, motor: motor }] };
    const vehiculoJson = JSON.stringify(vehiculo)

    fetch('http://localhost:3000/vehiculos', {
        method: 'Post',
        body: vehiculoJson
    })

    console.log(vehiculo);
})