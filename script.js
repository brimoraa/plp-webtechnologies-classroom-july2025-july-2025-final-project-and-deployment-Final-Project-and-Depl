// script.js - gallery carousel and notes interaction

// simple carousel
(function(){
  const slides = document.querySelectorAll('.slides img');
  let index = 0;
  const total = slides.length;
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  function showSlide(i){
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${ -i * 100 }%)`;
  }

  if(next) next.addEventListener('click', ()=>{ index = (index+1) % total; showSlide(index); });
  if(prev) prev.addEventListener('click', ()=>{ index = (index-1 + total) % total; showSlide(index); });

  // auto-advance
  setInterval(()=>{ index = (index+1) % total; showSlide(index); }, 4000);
})();

// notes interaction
document.querySelectorAll('.note').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const text = e.target.dataset.text || 'Love you.';
    const display = document.getElementById('noteDisplay');
    if(display) display.textContent = text;
  });
});
