document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('http://localhost:3000/vehiculos');
    const vehiculos = await response.json();
    mostrarVehiculos(vehiculos);
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const marca = document.getElementById("marcaV").value;
    const modelo = document.getElementById("modeloV").value;
    const year = document.getElementById("yearV").value;
    const color = document.getElementById("colorV").value;
    const combustible = document.getElementById("combustibleV").value;
    const motor = document.getElementById("motorV").value;

    const vehiculo = { marca, modelo, year, color, motor: [{ combustible, motor }] };
    const vehiculoJson = JSON.stringify(vehiculo);


    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Se guardo Correctamente"
    });


    await fetch('http://localhost:3000/vehiculos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: vehiculoJson
    });

    formulario.reset();

    const response = await fetch('http://localhost:3000/vehiculos');
    const vehiculos = await response.json();
    mostrarVehiculos(vehiculos);
});

function mostrarVehiculos(vehiculos) {
    const listaVehiculos = document.getElementById("listaVehiculos");
    listaVehiculos.innerHTML = "";
    vehiculos.forEach(vehiculo => {
        const item = document.createElement("li");
        item.textContent = `${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.year}) - Color: ${vehiculo.color}, Motor: ${vehiculo.motor[0].combustible} ${vehiculo.motor[0].motor}`;
        listaVehiculos.appendChild(item);
    });
}


