function ObtenerEmpleados() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.results[0].picture.large;

      let element = document.getElementById("Nombres");
      element.innerHTML = data.results[0].name.first;

      let element1 = document.getElementById("apellido");
      element1.innerHTML = data.results[0].name.last;
    })
    .catch((err) => console.error(err));
}

ObtenerEmpleados();
