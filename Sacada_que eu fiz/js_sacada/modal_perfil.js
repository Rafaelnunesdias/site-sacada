
const modalPerfil = document.getElementById("modal_perfil");
const modalEntrevista = document.getElementById("modal_entrevista");

const botoesVerPerfil = document.querySelectorAll(".acoes_candidato button");
const fecharPerfil = document.querySelector(".fechar");
const fecharEntrevista = document.querySelector(".fechar-entrevista");
const btnAgendar = document.querySelector(".botoes_modal .azul");
const btnCancelar = document.querySelector(".btn_cancelar");

botoesVerPerfil.forEach(botao => {
  botao.addEventListener("click", () => {
    modalPerfil.style.display = "flex";
  });
});

fecharPerfil.addEventListener("click", () => {
  modalPerfil.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalPerfil) modalPerfil.style.display = "none";
  if (e.target === modalEntrevista) modalEntrevista.style.display = "none";
});

document.querySelector(".botoes_modal .azul").addEventListener("click", () => {
  modalPerfil.style.display = "none";
  modalEntrevista.style.display = "flex";
});

fecharEntrevista.addEventListener("click", () => {
  modalEntrevista.style.display = "none";
});

btnCancelar.addEventListener("click", () => {
  modalEntrevista.style.display = "none";
});
