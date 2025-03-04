document.querySelector('p').style.transition = '0.2s linear'
document.querySelector('p').style.opacity = 0;
fetch('https://v2.jokeapi.dev/joke/Any?safe-mode').then(res => res.json()).then(res => {
    document.querySelector('p').innerHTML = res.setup;
    setTimeout(() => {
        document.querySelector('span').innerHTML = res.delivery;
    }, 3000);
});
document.querySelector('p').style.opacity = 1;

document.querySelector('button').addEventListener('click', function(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode').then(res => res.json()).then(res => {
        document.querySelector('p').innerHTML = res.setup;
        setTimeout(() => {
            document.querySelector('span').innerHTML = res.delivery;
        }, 3000);
    });
})