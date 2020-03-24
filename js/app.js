var enter = document.getElementById('enterBtn');
var exit = document.getElementById('exitBtn');

enter.onclick = function() {
    var morphing = anime({
        targets: '.polymorph',
        points: [{
            value: '1920,1080 0,1080 0,0 200.811,0 610.271,731.352 '
        }, {
            value: '1920,1080 0,1080 0,0 0,0 610.271,731.352 '
        }],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
    });

    anime({
        targets: '#welcomeDiv',
        opacity: 1,
        duration: 500,
        translateY: 0
    });

    var promise = morphing.finished.then(() => {
        exit.onclick = function() {
            anime({
                targets: '.polymorph',
                points: [{
                    value: '1920,1080 0,1080 0,0 200.811,0 610.271,731.352 '
                }, {
                    value: '1920,1080 0,1080 0,0 200.811,0 1920,0 '
                }],
                easing: 'easeOutQuad',
                duration: 1200,
                loop: false
            });

            anime({
                targets: '#welcomeDiv',
                opacity: 0,
                duration: 500,
                translateY: -800
            });
        }
    });

}

enter.click();