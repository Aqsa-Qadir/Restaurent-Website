
console.log('hello')
//Navbar

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow')
    } else {
        nav.classList.remove('bg-dark', 'shadow')
    }
})

//Backround Color on Navlist

var navlist = document.querySelector('.navbar-collapse');


window.addEventListener('click', function () {
    if (window.outerWidth <= 768) {
        navlist.classList.add('bglist')
    } else {
        navlist.classList.remove('bglist')
    }
})


//Active Nav Menu
let aloc = document.getElementsByClassName('nav-link');

Array.from(aloc).forEach(function (element) {
    console.log(element.href)
    element.addEventListener('click', function () {
        Array.from(aloc).forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')

    })
});


        // let count = document.getElementsByClassName(".counter");
        // console.log(count.length)
        // if(count.length == 0) {
        //     console.log(count.length)
        //     count.counterUp({
        //         delay: 12,
        //         time: 400
        //     });
        // }


