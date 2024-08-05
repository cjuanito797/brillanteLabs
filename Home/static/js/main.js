const nav = document.querySelector('nav');
const contactButton = document.querySelector("#contact_me_button");
const contactText = document.querySelector("#contact_us_text");
const scrollDown = document.querySelector("#scroll-down");
const about_me_summary = document.querySelector("#about_me_summary");
const aboue_me_image = document.querySelector("#about_me_image");

//intersection observer
function navCallBack(entries) {
    nav.classList.toggle('active', !entries[0].isIntersecting);
    contactButton.classList.toggle('active', !entries[0].isIntersecting);
    contactText.classList.toggle('active', !entries[0].isIntersecting);
    scrollDown.classList.toggle('disappear', !entries[0].isIntersecting);
    about_me_summary.classList.toggle('active', !entries[0].isIntersecting);
    about_me_image.classList.toggle('active', !entries[0].isIntersecting);
}

const navOptions = {
    threshold: .90,
}

const navObs = new IntersectionObserver(navCallBack, navOptions)

navObs.observe(document.querySelector('#callToAction'));