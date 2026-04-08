const farmacias = [
  { nombre: "Cruz Verde", direccion: "Saavedra 599", telefono: "" },
  { nombre: "Farmasalud Lebu", direccion: "Rioseco 267", telefono: "" },
  { nombre: "Maicao", direccion: "Rioseco 305", telefono: "" },
  { nombre: "Futuro", direccion: "Saavedra 281", telefono: "" },
  { nombre: "Redfarma", direccion: "Rioseco 155", telefono: "" },
  { nombre: "Dr. Simi", direccion: "Rioseco 267", telefono: "" }
];

// FECHA ACTUAL (Chile correcto)
const hoy = new Date();
const dia = hoy.getDate();

// CICLO
const indiceActual = (dia - 1) % 6;
const indiceSiguiente = (indiceActual + 1) % 6;

const actual = farmacias[indiceActual];
const siguiente = farmacias[indiceSiguiente];

// MOSTRAR ACTUAL
document.getElementById("nombre").textContent = actual.nombre;
document.getElementById("direccion").textContent = "📍 " + actual.direccion;
document.getElementById("horario").textContent = "🕒 09:00 a 08:59";

// MOSTRAR SIGUIENTE
document.getElementById("proxima").textContent =
  "➡️ Próxima farmacia: " + siguiente.nombre;

// FECHA BONITA
document.getElementById("fecha").textContent =
  hoy.toLocaleDateString("es-CL", {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

// BOTÓN MAPA
document.getElementById("btnMapa").href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(actual.direccion + ", Lebu, Chile");

// BOTÓN LLAMAR
if (actual.telefono) {
  document.getElementById("btnLlamar").href = "tel:" + actual.telefono;
} else {
  document.getElementById("btnLlamar").style.display = "none";
}
