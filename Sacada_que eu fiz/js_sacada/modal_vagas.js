
const modal = document.getElementById('modalEditarVaga');
const btnAbrir = document.querySelectorAll('.acoes img[alt="Editar"]');
const btnFechar = document.querySelector('.modal .fechar');
const btnConfirmar = document.querySelector('.btn_confirmar');


btnAbrir.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});


btnFechar.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


btnConfirmar.addEventListener('click', () => {
  alert('Alterações salvas com sucesso!');
  modal.style.display = 'none';
});