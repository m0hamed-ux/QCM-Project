function Goto(section){
    window.location.href = `quizes/quiz.html?section=${encodeURIComponent(section)}`;
}
$(document).ready(function(){
    const voirPlus = document.getElementById('voir-plus');
    if(!voirPlus){
        console.log('error')
    }
    voirPlus.addEventListener('mousemove', (e) => {
        const rect = voirPlus.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        voirPlus.style.setProperty('--x', `${x}px`);
        voirPlus.style.setProperty('--y', `${y}px`);
        console.log(x, y)
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    
})