// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const planet = document.querySelector('.planet img');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis =( window.innerWidth / 2 - e.pageX) / 25;
    let yAxis =( window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
//Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // popout
    title.style.transform = 'translateZ(120px)';
    planet.style.transform = 'translateZ(100px) rotateZ(-45deg)';
    sizes.style.transform = 'translateZ(130px)';
    purchase.style.transform = 'translateZ(120px)';
    info.style.transform = 'translateZ(70px)';
    planet.style.transition = '.5s ease';
    sizes.style.transition = '.5s ease';
    purchase.style.transition = '.5s ease';
})


//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .5s ease'
    card.style.transform =`rotateY(0deg) rotateX(0deg)`

    title.style.transform = 'translateZ(0px)';
    planet.style.transform = 'translateZ(0px) rotateZ(0deg)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
})