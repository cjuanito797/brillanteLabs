const testimonial = document.querySelector("#testimonial-rdc");
const quote = document.querySelector("#quote");
const about_me_stats = document.querySelector("#about_me_stats");
const about_me_image = document.querySelector("#about_me_image");
//const service_cards = document.querySelector("#service_cards");

// Intersection observer for the about me summary.
function about_me_func(entries) {

    if (!entries[0].isIntersecting) {
        return;
    } else {
        about_me_image.classList.add('active');
        setTimeout(() => {
            about_me_stats.classList.add('active');
        }, 2500);

        setTimeout(() => {
            quote_obs.observe(quote);
        }, 4000);
    }
}

const about_me_options = {
    threshold: 0.75,
}

const about_me_obs = new IntersectionObserver(about_me_func, about_me_options);
about_me_obs.observe(about_me_image);

// Intersection observer for the quote.
function quote_func(entries) {
    if (!entries[0].isIntersecting) {
        console.log("Object is not intersecting!");
        return;
    } else {
        console.log("Object is intersecting");
        quote.classList.add('active');
    }
}

const quote_options = {
    threshold: 0.85,
}

const quote_obs = new IntersectionObserver(quote_func, quote_options);


// Intersection observer for the testimonial section.
function testimonial_rdc_func(entries) {

    if (!entries[0].isIntersecting) {
        console.log("Object is not intersecting!");
        return;
    } else {
        console.log("Object is intersecting!");
        testimonial.classList.add('active');
    }
}

const testimonial_options = {
    threshold: 0.65,
}

const testimonial_rdc_obs = new IntersectionObserver(testimonial_rdc_func, testimonial_options);
testimonial_rdc_obs.observe(testimonial);

/*
// Intersection observer for the skills cards section.
function service_cards_func(entries) {

    if (!entries[0].isIntersecting) {
        console.log("Object is not intersecting");
        return;
    } else {
        service_cards.classList.add('active');
    }
}

const service_cards_options = {
    threshold: 0.05,
}

const service_cards_obs = new IntersectionObserver(service_cards_func, service_cards_options);
service_cards_obs.observe(service_cards);

*/
