const nav = document.querySelector('nav');
const contactButton = document.querySelector("#contact_me_button");
const contactText = document.querySelector("#contact_us_text");

//intersection observer
function navCallBack(entries) {
    nav.classList.toggle('active', !entries[0].isIntersecting);
    contactButton.classList.toggle('active', !entries[0].isIntersecting);
    contactText.classList.toggle('active', !entries[0].isIntersecting);
}

const navOptions = {
    threshold: .95,
}

const navObs = new IntersectionObserver(navCallBack, navOptions)

navObs.observe(document.querySelector('#top_padding'));