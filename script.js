const farmacias = [
  { nombre: "Cruz Verde", direccion: "Saavedra 599", telefono: "", logo: "logos/cruzverde.png" },
  { nombre: "Farmasalud Lebu", direccion: "Rioseco 267", telefono: "", logo: "logos/farmasalud.png" },
  { nombre: "Maicao", direccion: "Rioseco 305", telefono: "", logo: "logos/maicao.png" },
  { nombre: "Futuro", direccion: "Saavedra 281", telefono: "", logo: "logos/futuro.png" },
  { nombre: "Redfarma", direccion: "Rioseco 155", telefono: "", logo: "logos/redfarma.png" },
  { nombre: "Dr. Simi", direccion: "Rioseco 267", telefono: "", logo: "logos/drsimi.png" }
];

// FECHA ACTUAL
const hoy = new Date();
const dia = hoy.getDate();

// CICLO
const indiceActual = (dia - 1) % 6;
const indiceSiguiente = (indiceActual + 1) % 6;

const actual = farmacias[indiceActual];
const siguiente = farmacias[indiceSiguiente];

// MOSTRAR FARMACIA ACTUAL
document.getElementById("nombre").textContent = actual.nombre;
document.getElementById("direccion").textContent = "📍 " + actual.direccion;

// FORMATO FECHA
const opciones = { weekday: 'long', day: '2-digit', month: 'long' };
const fechaTexto = hoy.toLocaleDateString("es-CL", opciones);
const fechaFormateada =
  fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);

// HORARIO COMPLETO (AQUÍ VA TODO)
document.getElementById("horario").textContent =
  "🕒 Inicia el " + fechaFormateada +
  ", de 09:00 a 08:59 del día siguiente";

// LOGO
document.getElementById("logoFarmacia").src = actual.logo;

// PRÓXIMA FARMACIA
document.getElementById("proxima").textContent =
  "➡️ Próxima farmacia: " + siguiente.nombre;

// FECHA SUPERIOR
document.getElementById("fecha").textContent =
  hoy.toLocaleDateString("es-CL", {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

// MAPA
document.getElementById("btnMapa").href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(actual.direccion + ", Lebu, Chile");

// LLAMAR
if (actual.telefono) {
  document.getElementById("btnLlamar").href = "tel:" + actual.telefono;
} else {
  document.getElementById("btnLlamar").style.display = "none";
                      }
