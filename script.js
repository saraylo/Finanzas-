const botones = document.querySelectorAll(".materia");

function actualizarMaterias() {
  botones.forEach(btn => {
    const dependencias = btn.dataset.depends;
    if (!dependencias) {
      btn.disabled = false;
    } else {
      const prereqs = dependencias.split(',');
      const todasAprobadas = prereqs.every(id => {
        const prereqBtn = document.querySelector(`[data-id='${id.trim()}']`);
        return prereqBtn && prereqBtn.classList.contains("aprobada");
      });
      btn.disabled = !todasAprobadas;
    }
  });
}

botones.forEach(boton => {
  boton.disabled = true;
  if (!boton.dataset.depends) boton.disabled = false;

  boton.addEventListener("click", () => {
    boton.classList.add("aprobada");
    boton.disabled = true;
    boton.textContent = "──────────────";
    actualizarMaterias();
  });
});

actualizarMaterias();
