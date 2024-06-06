const getDatos = async () => {
  try {
    const response = await fetch("http://localhost:3000/bicicletas");
    const data = await response.json();

    //Crear una variable que me guarde el elemento contenedor
    let card = "";

    //Recorrer el array de bicicletas y crear una tarjeta por cada bicicleta
    data.forEach((bici) => {
      card += `
    <div class="card">
            <div class="card-body"></div>
                <h5 class="card-title">ID: ${bici.id}</h5>
                <p class="card-text">Marca: ${bici.marca}</p>
                <p class="card-text">Modelo: ${bici.modelo}</p>
                <p class="card-text">Precio: $${bici.precio}</p>
                <p class="card-text">Stock: ${bici.stock}</p>
                
            </div>
        `;
    });
    document.getElementById("contenedor").innerHTML = card;
  } catch (error) {
    console.log(error);
  }
};

getDatos();
