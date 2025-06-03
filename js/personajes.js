// Código para cargar personajes de Star Wars desde SWAPI y mostrarlos dinámicamente
window.onload = async function () {
  try {
    const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
    const data = await res.json();

    const contenedor = document.getElementById("personajes-dinamicos");
    contenedor.innerHTML = "";

    // Mostrar solo los primeros 6 personajes
    data.slice(0, 6).forEach(personaje => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card bg-dark text-white border border-danger rounded-4 h-100 shadow">
          <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
          <div class="card-body">
            <h5 class="card-title text-warning">${personaje.name}</h5>
            <p class="card-text">
              🧬 Especie: ${personaje.species || "N/A"}<br>
              ⚔️ Afiliación: ${personaje.affiliations?.[0] || "Desconocida"}<br>
              📏 Altura: ${personaje.height} cm<br>
              ⚖️ Peso: ${personaje.mass} kg
            </p>
          </div>
        </div>
      `;

      contenedor.appendChild(col);
    });
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    const contenedor = document.getElementById("personajes-dinamicos");
    contenedor.innerHTML = `<div class="alert alert-danger text-center">No se pudo cargar la información desde el lado luminoso 😢</div>`;
  }
};

