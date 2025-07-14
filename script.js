// script.js const botones = document.querySelectorAll(".materia");

function actualizarMaterias() { botones.forEach(btn => { const dependeDe = btn.dataset.depends; if (!dependeDe) { btn.disabled = false; } else { const dependeBtn = document.querySelector([data-id='${dependeDe}']); btn.disabled = !dependeBtn.classList.contains("aprobada"); } }); }

botones.forEach(boton => { boton.disabled = true; if (!boton.dataset.depends) boton.disabled = false;

boton.addEventListener("click", () => { boton.classList.add("aprobada"); boton.disabled = true; boton.textContent = "──────────────"; actualizarMaterias(); }); });

actualizarMaterias();
