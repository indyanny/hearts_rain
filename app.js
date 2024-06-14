function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300);
    let duration = Math.random() * 0.5;

    e.style.left = left + 'px';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function(){
        cloud.removeChild(e)
    }, 5000)
}

setInterval(function(){
    rain()
}, 50);