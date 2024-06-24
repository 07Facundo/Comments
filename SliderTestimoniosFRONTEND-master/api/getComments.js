function mostrarComentarios(datosComentarios) {
  const contenedorComentarios = document.getElementById("container"); // Reemplaza con el ID de tu contenedor

  datosComentarios.forEach((comentario) => {
    const tarjetaComentario = document.createElement("div");
    tarjetaComentario.classList.add("card-content");

    tarjetaComentario.innerHTML = `
      <div class="slide-content">
            <div class="card-wrapper swiper-wrapper" >
                <div class="card swiper-slide" >
              <div class="image-content">
                  <span class="overlay" id="overlay-1"></span>
              </div>

              <div class="card-content">
                  <h2 class="name">${comentario.username}</h2>
                  <h3 class="jobtitle">${comentario.position}</h3>
                  <p class="description">${comentario.testimony}</p>
                  <p>${comentario.createdAt}</p>
              </div>
            </div>
            </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
`;

    contenedorComentarios.appendChild(tarjetaComentario);
  });
}

async function getComentarios() {
  try {
    const res = await axios.get("http://localhost:3000/api/comments"); // Ajusta el endpoint si es necesario
    const comentarios = res.data;

    console.log(res);

    mostrarComentarios(comentarios); // Función para mostrar comentarios
    // Usa los datos de los comentarios en la lógica de tu frontend
    console.log(comentarios); // Ejemplo de uso
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    // Maneja los errores de forma adecuada, p. ej., muestra un mensaje de error al usuario
  }
}

getComentarios();
