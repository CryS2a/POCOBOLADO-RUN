 const POCOBOLADO = document.querySelector('.POCOBOLADO');
 const LAURINHA = document.querySelector('.LAURINHA');

    const jump = () => {
    POCOBOLADO.classList.add('jump');

    setTimeout(() => {
        POCOBOLADO.classList.remove('jump');
    }, 800);
}

 const loop = setInterval(() => {

    const LAURINHAPosition = LAURINHA.offsetleft;
    const POCOBOLADOPosition = +window.getComputedStyle(POCOBOLADO).bottom.replace('px','');
  

    if (LAURINHAPosition <= 90) {
        
      LAURINHA.style.animation = 'none';
      LAURINHA.style.left = `${LAURINHAPosition}px`;

    }
 }, 10);

document.addEventListener('keydown', jump)