const farmacias = [
  { nombre: "Cruz Verde", direccion: "Saavedra 599", telefono: "+56412519780", logo: "logos/cruzverde.png" },
  { nombre: "Farmasalud Lebu", direccion: "Rioseco 267", telefono: "+56998442315", logo: "logos/farmasalud.png" },
  { nombre: "Maicao", direccion: "Rioseco 305", telefono: "+56228261800", logo: "logos/maicao.png" },
  { nombre: "Futuro", direccion: "Saavedra 281", telefono: "+56412511525", logo: "logos/futuro.png" },
  { nombre: "Redfarma", direccion: "Rioseco 155", telefono: "+56412511109", logo: "logos/redfarma.png" },
  { nombre: "Dr. Simi", direccion: "Rioseco 267", telefono: "+56412511498", logo: "logos/drsimi.png" }
];

// FECHA Y HORA ACTUAL
const ahora = new Date();

// AJUSTE DE TURNO (cambia a las 09:00)
let fechaTurno = new Date(ahora);

if (ahora.getHours() < 9) {
  fechaTurno.setDate(fechaTurno.getDate() - 1);
}

// DÍA CORRECTO PARA EL CICLO
const dia = fechaTurno.getDate();

// CICLO DE FARMACIAS
const indiceActual = (dia - 1) % 6;
const indiceSiguiente = (indiceActual + 1) % 6;

const actual = farmacias[indiceActual];
const siguiente = farmacias[indiceSiguiente];

// NOMBRE Y DIRECCIÓN
document.getElementById("nombre").textContent = actual.nombre;
document.getElementById("direccion").textContent = "📍 " + actual.direccion;

// FORMATO FECHA TURNO
const opciones = { weekday: 'long', day: '2-digit', month: 'long' };
const fechaTexto = fechaTurno.toLocaleDateString("es-CL", opciones);
const fechaFormateada =
  fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);

// HORARIO COMPLETO
document.getElementById("horario").textContent =
  "🕒 Inicia el " + fechaFormateada +
  ", de 09:00 a 08:59 del día siguiente";

// LOGO
document.getElementById("logoFarmacia").src = actual.logo;

// PRÓXIMA FARMACIA
document.getElementById("proxima").textContent =
  "➡️ Próxima farmacia: " + siguiente.nombre;

// FECHA PRINCIPAL (AJUSTADA)
const fechaBonita = ahora.toLocaleDateString("es-CL", {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
});

document.getElementById("fecha").textContent =
  fechaBonita.charAt(0).toUpperCase() + fechaBonita.slice(1);

// MAPA
document.getElementById("btnMapa").href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(actual.direccion + ", Lebu, Chile");

// BOTÓN LLAMAR
if (actual.telefono) {
  document.getElementById("btnLlamar").href = "tel:" + actual.telefono;
} else {
  document.getElementById("btnLlamar").style.display = "none";
}
