const modalExcluir = document.getElementById('modalExcluirVaga');
const btnExcluirVaga = document.querySelectorAll('.acoes img[alt="Excluir"]');
const btnFecharExcluir = modalExcluir.querySelector('.fechar');
const btnCancelar = modalExcluir.querySelector('.btn_cancelar');
const btnConfirmarExcluir = modalExcluir.querySelector('.btn_excluir');

btnExcluirVaga.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalExcluir.style.display = 'flex';
  });
});

btnFecharExcluir.addEventListener('click', () => {
  modalExcluir.style.display = 'none';
});

btnCancelar.addEventListener('click', () => {
  modalExcluir.style.display = 'none';
});

btnConfirmarExcluir.addEventListener('click', () => {
  alert('Vaga excluída com sucesso!');
  modalExcluir.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalExcluir) {
    modalExcluir.style.display = 'none';
  }
});