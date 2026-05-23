// Animación simple al pasar el mouse sobre la foto
const foto = document.querySelector('.perfil');

foto.addEventListener('mouseover', () => {
  foto.style.transform = 'scale(1.05)';
  foto.style.transition = 'transform 0.3s ease';
});

foto.addEventListener('mouseout', () => {
  foto.style.transform = 'scale(1)';
});
