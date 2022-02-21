h2.className = 'name;
h2.style.color = 'green;

document.getElementByClassName('fb')

// main section ganna
const section = document.querySelectAll("section") <section></section>

// nav item ganna
const navLinks = document.querySelectAll("header nav a") <header> <nav> <a> </a> </nav> </header>

window.onscroll = ()=>{

    section.forEach((sec)=> {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height =  sec.offsetHeight
        let id = sec.getAttribute('id)

        if(top >= offset && top < offset + height ){
            navLink.forEach((nav)=>{
                nav.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    } )

}
