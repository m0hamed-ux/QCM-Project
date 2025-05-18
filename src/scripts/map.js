let question = localStorage.getItem('question') || 1;
let section = localStorage.getItem('section') || 'html';

question = (!question)?1:question
section = (!section)?'html':section
let sections = ['html', 'css', 'js', 'react', 'bootstrap']
jsProgress = (localStorage.getItem('jsProgress')) ? parseInt(localStorage.getItem('jsProgress')) : 1;
htmlProgress = (localStorage.getItem('htmlProgress')) ? parseInt(localStorage.getItem('htmlProgress')) : 1;
cssProgress = (localStorage.getItem('cssProgress')) ? parseInt(localStorage.getItem('cssProgress')) : 1;
reactProgress = (localStorage.getItem('reactProgress')) ? parseInt(localStorage.getItem('reactProgress')) : 1;
bootstrapProgress = (localStorage.getItem('bootstrapProgress')) ? parseInt(localStorage.getItem('bootstrapProgress')) : 1;
document.title = section.charAt(0).toUpperCase() + section.slice(1);
if (section.toLocaleLowerCase() == "javascript" || section.toLocaleLowerCase() == "js"){
    question = jsProgress
    sectionData = 'jsProgress'
    sectionIndex = 0
} else if (section.toLocaleLowerCase() == "html") {
    question = htmlProgress
    sectionData = 'htmlProgress'
    sectionIndex = 1
} else if (section.toLocaleLowerCase() == "css") {
    question = cssProgress
    sectionData = 'cssProgress'
    sectionIndex = 2
} else if (section.toLocaleLowerCase() == "react") {
    question = reactProgress
    sectionData = 'reactProgress'
    sectionIndex = 3
} else if (section.toLocaleLowerCase() == "bootstrap") {
    question = bootstrapProgress
    sectionData = 'bootstrapProgress'
    sectionIndex = 4
}

function createMap(){
    for (let i = 1; i <= 10; i++) {
        let div = document.createElement('div')
        var mainColor = (section == 'html')?'blue':(section == 'js')?'yellow':(section == 'css')?'orange':(section == 'react')?'cyan':'purple'
        var color = (i <= question)?`bg-${mainColor}-400`:'bg-slate-300'
        let status = (i == question)?'current':(i < question)?'done':'disabled'
        let trs = [0, 40, 55, 40, 0, -40, -55, -40, 0, 40]
        let translate = trs[i - 1]
        let classes = `scale-0 z-${(i <= question)?1:0} w-14 h-14 ${color} translate-x-[${translate}px] rounded-full my-3 flex justify-center items-center cursor-pointer ${status}`.split(' ')
        for (let cls of classes) {
            div.classList.add(cls)
            if (i != question){
                div.innerHTML = '<i class="fa-solid fa-star text-white"></i>'
            } else {
                div.innerHTML = '<i class="fa-solid fa-star text-white"></i><div class="w-max p-1 text-sm text-green-500 absolute bg-white top-[-20px] border-[1.4px] border-slate-300 rounded bouncing">Start<div class="w-2 h-2 bg-white absolute bottom-[-5px] left-[50%] transform -translate-x-1/2 rotate-45 border-b-[1.4px] border-r-[1.4px] border-slate-300 rounded-br-sm"></div></div>'
            }
        }
        
        document.getElementById('qts').append(div)
    }
    $('.done, .current').css({
        'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':(section == 'css')?'#f97316':(section == 'react')?'#06b6d4':'#a21caf'}`
    })
    let next = `<div class="w-14 h-14 translate-x-[60px] rounded-full my-3 flex justify-center items-center cursor-pointer ${(question > 10)?`bg-${mainColor}-400`:'bg-slate-300'} shadow-[0_0.3em_0] ${(question > 10)?`shadow-[${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':(section == 'css')?'#f97316':(section == 'react')?'#06b6d4':'#a21caf'}] next`:'shadow-[#94a3b8]'}" id="next"><i class="fa-solid ${(section == 'js')?'fa-award':'fa-forward'} text-white text-xl"></i></div>`
    $('.next').css({
        'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':(section == 'css')?'#f97316':(section == 'react')?'#06b6d4':'#a21caf'}`
    })
    $('.none, .disabled').css({
        'box-shadow':`0 0.3em 0 #94a3b8`
    })
    $('#qts').append(next)
    document.getElementById('title-box').classList.add(`shadow-${mainColor}-700`, `bg-${mainColor}-500`)
    document.getElementById('icon-box').classList.add(`border-${mainColor}-700`)
    document.getElementById('f-icon').classList.add(`fa-${icons}`)
    $('#s-title').text('Section '+(sections.indexOf(section) + 1))
    $('#s-text').text(`Testez vos connaissances en ${section.toUpperCase()}`)
    var icons = (section == 'html')?'html5':(section == 'js')?'square-js':(section == 'css')?'css3-alt':(section == 'react')?'react':'bootstrap'
    document.getElementById('f-icon').classList.add(`fa-${icons}`)    
    $('.current, .done').on('click', function(){
        $(this).css({
            'box-shadow':'none',
        });
        gsap.set($(this), {y: '5px'})
        setTimeout(function(){
            $('.current, .done').css({
                'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':(section == 'css')?'#f97316':(section == 'react')?'#06b6d4':'#a21caf'}`,
            });
            gsap.to($('.current, .done'), {y: '0px', duration: 0})
        }, 200)
    });
    $('.current').on('click', function(){
        let div = `<div class="w-max z-10 p-2 text-sm bg-green-500 text-white absolute bottom-[-100px] rounded-lg popup shadow-lg">
                    <h1 class="font-bold">Testez vos connaissances en ${section.toUpperCase()}</h1>
                    <p class="text-xs mt-1">Question ${$(this).index() + 1}/10</p>
                    <input type="button" value="commencer" class="w-full bg-white text-green-500 rounded p-1 mt-2 cursor-pointer" onclick='window.location.href="quiz.html"'>
                    <div class="w-2 h-2 bg-green-500 absolute top-[-4px] left-[50%] transform -translate-x-1/2 rotate-45"></div>
                    </div>`
        $(document).find('.popup').remove()
        $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
        $(this).css({'z-index':'10'})
        $(this).find('.bouncing').hide()
        $(this).append(div)
    });
    
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.popup, .current, .done').length) {
            $(document).find('.popup').remove()
            $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
            $(this).find('.bouncing').show()
        }
    });
    
    $('.next').on('click', function(){
        if (section != 'js'){
            localStorage.setItem('section', sections[sections.indexOf(section) + 1]);
            localStorage.setItem('question', 1);
            window.location.href = `quiz.html`;
        }
    });
}
$(document).ready(function() {
    
})