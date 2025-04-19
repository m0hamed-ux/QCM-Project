$(document).ready(function(){
    logoBox = document.getElementById('logo-box')
    logoText = document.getElementById('logo-text')
    header = document.getElementById('header')
    const letters = logoText.textContent.split('');
    logoText.innerHTML = '';
    letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        logoText.appendChild(span);
    });
    const spans = logoText.querySelectorAll('span');
    gsap.fromTo(spans, 
        { y: '200%', opacity: 0 },
        { 
            y: '0%', opacity: 1, duration: 0.6, stagger: 0.1,
            onComplete: () => {
                $('body').css({'overflow':'auto'})
                gsap.to(document.getElementById('logo-box'), 
                            { 
                        height: 0, duration: 0.5,
                        onComplete: ()=>{
                            gsap.set('.card', {
                                display: 'block'
                            });
                            PopingUpAnimation()
                            gsap.to(document.getElementsByClassName('-translate-y-14'), 
                                {y: 0, duration: 0.5, delay: 1, stagger: -0.2}
                        );
                            gsap.to(document.getElementsByClassName('-translate-y-16'), 
                                {y: 0, duration: 0.5, delay: 1, stagger: 0.2}
                            );
                            gsap.fromTo(document.getElementsByClassName('btn'), 
                                {scale: 0},
                                {scale: 1, duration: 0.5, stagger: 0.2}
                            );
                            topLogo = document.getElementById('top-logo')
                            const lettersTop = topLogo.textContent.split('');
                            topLogo.innerHTML = ''
                        lettersTop.forEach(letter => {
                            const span = document.createElement('span');
                            span.textContent = letter;
                            span.style.display = 'inline-block';
                            topLogo.appendChild(span);
                        });
                        const spansTop = topLogo.querySelectorAll('span');
                            gsap.to(document.getElementById('top-logo'), {opacity : 1})
                        gsap.fromTo(spansTop, 
                                { y: '200%', opacity: 1 },
                            { 
                                    y: '0%', opacity: 1, duration: 0.6, stagger: 0.1,
                            }
                            )
                        const paragraphs = document.querySelectorAll('#parag');
                            gsap.to(paragraphs, {opacity : 1})
                        paragraphs.forEach(paragraph => {
                            const words = paragraph.textContent.split(' ');
                            paragraph.innerHTML = '';
                            words.forEach((word, index) => {
                                const span = document.createElement('span');
                                span.textContent = word;
                                span.style.display = 'inline-block';
                                paragraph.appendChild(span);
                                if (index < words.length - 1) {
                                        const space = document.createTextNode(' ');
                                        paragraph.appendChild(space);
                                }
                            });
                            const wordSpans = paragraph.querySelectorAll('span');
                            gsap.fromTo(wordSpans, 
                                { y: '100%', opacity: 0 },
                                { 
                                        y: '0%', opacity: 1, duration: 0.5, stagger: 0.05
                                }
                            );
                        });
                    }
                    }
                );

            }
        }
    );

    const span = document.getElementById("lng");
    const languages = ["HTML", "CSS", "JS"];
    span.style.display = 'inline-block'

    var index = 0;
    setInterval(function(){
        const nextLanguage = languages[(index + 1) % languages.length];
        gsap.to(span,
                    { 
                y: '-200%', duration: 0.5,
                onComplete: ()=>{
                    span.textContent = nextLanguage,
                    gsap.fromTo(span, 
                        {y: '100%'},
                        {y: '0%'}
                );
                index = (index + 1) % languages.length;
            } 
        },
        )
    }, 2000);
    for (elt of ['Commencer']){
        const commencer = document.getElementById(elt);
        const shinyEffect = document.createElement('div');
        shinyEffect.classList.add('shiny-effect');
        commencer.style.position = 'relative';
        commencer.style.overflow = 'hidden';
    
        shinyEffect.style.position = 'absolute';
        shinyEffect.style.top = 0;
        shinyEffect.style.left = '-100%';
        shinyEffect.style.width = '100%';
        shinyEffect.style.height = '100%';
        shinyEffect.style.background = 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)';
        shinyEffect.style.transform = 'skewX(-30deg)';
        shinyEffect.style.pointerEvents = 'none';
    
        commencer.appendChild(shinyEffect);
    
        gsap.to(shinyEffect, {
            left: '100%',
            duration: 2,
            repeat: -1,
            ease: 'linear'
        });
    }
    function counting(){
        let target = 30
        let num = 1
        setInterval(function(){
            if (num <= target){
                $('.counting').text(num)
                num++
            } else {
                clearInterval()
            }
        }, 50)
    }
    const animatedBox = document.getElementById('animated-box');
    if (animatedBox) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counting()
                }
            });
        }, { threshold: 0.1 });

        observer.observe(animatedBox);
    }
    function PopingUpAnimation() {
        gsap.from('.card', {
            opacity: 0,
            duration: 0.75,
            scale: 0.5,
            stagger: 0.2,
            ease: 'elastic.out(1, 0.3)'
        });
    }
    

    // document.getElementsByClassName('bounce-img').forEach(img=>{
    //     img.onhover=function(){
    //         gsap.to(img, {
    //             rotate: 0,
    //             duration: 0.2
    //         })
    //     }
        
    // })
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to('h1', {
    //     x: 100, 
    //     scrollTrigger: {
    //       trigger: 'h1',
    //       start: 'top bottom',
    //       end: 'center center',
    //       scrub: true
    //     }
    //   });
      
    //   gsap.to('h1', {
    //     y: 200, 
    //     scrollTrigger: {
    //       trigger: 'h1',
    //       start: 'center center',
    //       end: 'bottom top',
    //       scrub: true
    //     }
    //   });
    
})