const formulario = document.getElementById("formulario");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const marca = document.getElementById("marcaV").value;
    const modelo = document.getElementById("modeloV").value;
    const year = document.getElementById("yearV").value;
    const color = document.getElementById("colorV").value;


    const vehiculo = { marca: marca, modelo: modelo, year: year, color: color };
    const vehiculoJson = JSON.stringify(vehiculo)

    

    console.log(vehiculo);
})