$(document).ready(function() {
    $('.current, .done').on('click', function(){
        $(this).css({
            'box-shadow':'none',
            'transform':'translateY(5px)'
        });
        setTimeout(function(){
            $('.current, .done').css({
                'box-shadow':`0 0.3em 0 ${(section == 'html')?'#1d74ff':(section == 'js')?'#eab308':'#f97316'}`,
                'transform':'translateY(0px)'
            })
        }, 200)
    });
    $('.current').on('click', function(){
        console.log('test')
        let div = `<div class="w-max z-10 p-2 text-sm bg-green-500 text-white absolute bottom-[-100px] rounded-lg popup shadow-lg">
                    <h1 class="font-bold">Testez vos connaissances en ${section.toUpperCase()}</h1>
                    <p class="text-xs mt-1">Question ${$(this).index() + 1}/10</p>
                    <input type="button" value="commencer" class="w-full bg-white text-green-500 rounded p-1 mt-2 cursor-pointer" onclick='next()'>
                    <div class="w-2 h-2 bg-green-500 absolute top-[-4px] left-[50%] transform -translate-x-1/2 rotate-45"></div>
                    </div>`
        $(document).find('.popup').remove()
        $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
        $(this).css({'z-index':'10'})
        $(this).find('.bouncing').hide()
        $(this).append(div)
    });
    $('.done').on('click', function(){
        let div = `<div class="w-max z-10 p-2 text-sm bg-green-500 text-white absolute bottom-[-100px] rounded-lg popup shadow-lg">
                    <h1 class="font-bold">Testez vos connaissances en ${section.toUpperCase()}</h1>
                    <p class="text-xs mt-1">Question ${$(this).index() + 1}/10</p>
                    <input type="button" value="repeter" class="w-full bg-white text-green-500 rounded p-1 mt-2 cursor-pointer" onclick='repeter()'>
                    <div class="w-2 h-2 bg-green-500 absolute top-[-4px] left-[50%] transform -translate-x-1/2 rotate-45"></div>
                    </div>`
        $(document).find('.popup').remove()
        $('.active, .disabled, .current, .next, .done').css({'z-index':'0'})
        $(this).css({'z-index':'10'})
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
        console.log('test')
        if (section != 'js'){
            window.location.href = `?section=${encodeURIComponent(sections[sections.indexOf(section) + 1])}`;
        }
    });
})