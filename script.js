if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', WebCode());
} else {
    WebCode();
}

function WebCode(){
    //------------Fading and sliding animations------------//
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = 
    new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (!entry.isIntersecting){
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            })
        }, 
        appearOptions)

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    })

    //---------------------------------------------------//

    const buttonDone = document.getElementsByClassName('button-done')[0]
    buttonDone.addEventListener('click', launchMail, {once: true});

    function launchMail(){
        let subject = document.getElementsByClassName('email-subject')[0];
        let message = document.getElementsByClassName('email-message')[0];
        let link = document.getElementsByClassName('button-done')[0]
    
        link.href = 'mailto:11.dimashumilov.11@gmail.com?subject=' + subject.value + '&body=' + message.value +'';
        buttonDone.removeEventListener('click', launchMail, {once: true});
        buttonDone.addEventListener('click', launchMail, {once: true});
    }
}