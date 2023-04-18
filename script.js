let time = 1;
document.getElementById("radio1");

setInterval(function () {
  nextImage();
}, 4500);

function nextImage() {
  time++;

  if (time > 3) {
    time = 1;
  }

  document.getElementById("radio" + time).checked = true;
};



const PG1 = document.getElementById('PG1');
const PG2 = document.getElementById('PG2');
const PG3 = document.getElementById('PG3');
const PG4 = document.getElementById('PG4');
const PG5 = document.getElementById('PG5');

PG1.addEventListener('click', function() {
  window.open('https://portsupply.com.br/', '_blank');
});

PG2.addEventListener('click', function() {
  window.open('https://sevenlives.netlify.app/', '_blank');
});

PG3.addEventListener('click', function() {
  window.open('https://vitoriabrasileventos.netlify.app/', '_blank');
});

PG4.addEventListener('click', function() {
  window.open('https://segtrabgreen.netlify.app/', '_blank');
});

PG5.addEventListener('click', function() {
  window.open('https://tccgrupo07.netlify.app/', '_blank');
});




const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass) ;
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', function() {
    animeScroll();
  });
}

window.addEventListener('load', function() {
  animeScroll();
});