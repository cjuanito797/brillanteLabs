const nav = document.querySelector('nav');

//intersection observer
function navCallBack(entries) {
    nav.classList.toggle('active', !entries[0].isIntersecting);
}

const navOptions = {
    threshold: .95,
}

const navObs = new IntersectionObserver(navCallBack, navOptions)

navObs.observe(document.querySelector('#top_padding'));