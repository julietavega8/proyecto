const verProyectos = (id) =>
  new Promise((resolve, reject) => {
    const api = `https://6185466123a2fe0017fff545.mockapi.io/project/${id}`;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", api, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
        console.log(JSON.parse(xhr.responseText))
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.send();
  });
  
let listaProyecto = [1,2,3,4,5,6]
listaProyecto.forEach(id=> {
  verProyectos(id).then(
  proyecto => imprimirHTML(proyecto, id),
  error => console.log(
   new Error('Hubo un error', error)
  )
);
})

function imprimirHTML(proyecto, id) {


  let html = `
    <img src=${proyecto.image}>
    <h2>${proyecto.title}</h2>
    <p>Descripcion:${proyecto.description}</p>
    <p>Resumen:${proyecto.resume}</p>
    
    `

  const contenedorApp = document.querySelector(`#app-${id}`);
  contenedorApp.innerHTML = html;
}