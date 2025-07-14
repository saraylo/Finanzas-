function aprobar(boton, idsDesbloquear) {
  boton.classList.add("aprobado");
  boton.disabled = true;
  boton.textContent = "──────────────";
  idsDesbloquear.forEach(id => {
    const siguiente = document.getElementById(id);
    if (siguiente) {
      siguiente.disabled = false;
    }
  });
}
