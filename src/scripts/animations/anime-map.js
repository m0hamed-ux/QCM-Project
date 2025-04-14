$(document).ready(function(){
    gsap.to(document.getElementsByClassName('-translate-y-14'), 
        {y: 0, duration: 0.5, delay: 1, stagger: -0.2}
    )
    gsap.to(document.getElementsByClassName('-translate-y-16'), 
        {y: 0, duration: 0.5, delay: 1, stagger: 0.2}
    )
    topLogo = document.getElementById('top-logo')
    const lettersTop = topLogo.textContent.split('')
    topLogo.innerHTML = ''
    lettersTop.forEach(letter => {
        const span = document.createElement('span')
        span.textContent = letter
        span.style.display = 'inline-block'
        topLogo.appendChild(span)
    })
    const spansTop = topLogo.querySelectorAll('span')
    gsap.to(document.getElementById('top-logo'), {opacity : 1})
    gsap.fromTo(spansTop, 
        { y: '200%', opacity: 1 },
        { 
            y: '0%', opacity: 1, duration: 0.6, stagger: 0.1,
        }
    )
    gsap.fromTo(document.querySelector('#title-box'),{scale:0},{scale:1, delay: 1,duration:0.4,
        onComplete:()=>{
            gsap.fromTo(document.getElementById('qts').children,{
                scale: 0
            },{
                scale: 1,
                delay: 0,
                duration: 0.4,
                stagger: 0.2
            })
        }
    })
})