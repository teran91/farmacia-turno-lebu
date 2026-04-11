const farmacias = [
  { nombre: "Cruz Verde", direccion: "Saavedra 599", telefono: "+56412519780", logo: "logos/cruzverde.png" },
  { nombre: "Farmasalud Lebu", direccion: "Rioseco 267", telefono: "+56998442315", logo: "logos/farmasalud.png" },
  { nombre: "Maicao", direccion: "Rioseco 305", telefono: "+56228261800", logo: "logos/maicao.png" },
  { nombre: "Futuro", direccion: "Saavedra 281", telefono: "+56412511525", logo: "logos/futuro.png" },
  { nombre: "Redfarma", direccion: "Rioseco 155", telefono: "+56412511109", logo: "logos/redfarma.png" },
  { nombre: "Dr. Simi", direccion: "Rioseco 267", telefono: "+56412511498", logo: "logos/drsimi.png" }
];

const ahora = new Date();

// Ajuste de turno (09:00)
let fechaTurno = new Date(ahora);
if (ahora.getHours() < 9) {
  fechaTurno.setDate(fechaTurno.getDate() - 1);
}

// Día para ciclo
const dia = fechaTurno.getDate();

// Índices
const indiceActual = (dia - 1) % 6;
const indiceSiguiente = (indiceActual + 1) % 6;

const actual = farmacias[indiceActual];
const siguiente = farmacias[indiceSiguiente];

// Datos principales
document.getElementById("nombre").textContent = actual.nombre;
document.getElementById("direccion").textContent = "📍 " + actual.direccion;
document.getElementById("telefono").textContent = "📞 " + actual.telefono;

// Fecha turno
const opciones = { weekday: 'long', day: '2-digit', month: 'long' };
const fechaTexto = fechaTurno.toLocaleDateString("es-CL", opciones);
const fechaFormateada =
  fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);

// Horario
document.getElementById("horario").textContent =
  "🕒 Inicia el " + fechaFormateada +
  ", de 09:00 a 08:59 del día siguiente";

// Logo
document.getElementById("logoFarmacia").src = actual.logo;

// Próxima
document.getElementById("proxima").textContent =
  "➡️ Próxima farmacia: " + siguiente.nombre;

// Fecha real
const fechaBonita = ahora.toLocaleDateString("es-CL", {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
});

document.getElementById("fecha").textContent =
  fechaBonita.charAt(0).toUpperCase() + fechaBonita.slice(1);

// Botón llamar
const btnLlamar = document.getElementById("btnLlamar");
btnLlamar.href = "tel:" + actual.telefono;

// Mapa
document.getElementById("btnMapa").href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(actual.direccion + ", Lebu, Chile");
