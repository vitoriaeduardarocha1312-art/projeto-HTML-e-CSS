document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('main-product-img');
  const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
  const colorSelect = document.getElementById('color');

  // Mapeamento entre as cores do select e as imagens correspondentes
  const colorImageMap = {
    'azul': 'img/fone2.jpg',
    'bege': 'img/fone3.jpg',
    'preto': 'img/fone1.jpg'
  };

  // Funcao para trocar a imagem principal
  function changeProductImage(src, colorKey) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 200);

    // Atualiza borda da miniatura ativa
    thumbnails.forEach(thumb => {
      if (thumb.getAttribute('data-color') === colorKey) {
        thumb.classList.add('active-thumb');
      } else {
        thumb.classList.remove('active-thumb');
      }
    });

    // Atualiza o select de cor
    if (colorSelect && colorKey) {
      colorSelect.value = colorKey;
    }
  }

  // Evento de clique nas miniaturas
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const colorKey = thumb.getAttribute('data-color');
      const imgSrc = thumb.src;
      changeProductImage(imgSrc, colorKey);
    });
  });

  // Evento de alteracao no select de cor
  if (colorSelect) {
    colorSelect.addEventListener('change', (e) => {
      const selectedColor = e.target.value;
      if (colorImageMap[selectedColor]) {
        changeProductImage(colorImageMap[selectedColor], selectedColor);
      }
    });
  }
});