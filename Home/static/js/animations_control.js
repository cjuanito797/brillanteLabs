const testimonial = document.querySelector("#testimonial-rdc");
const quote = document.querySelector("#quote");
const about_me_stats = document.querySelector("#about_me_stats");
const about_me_image = document.querySelector("#about_me_image");
//const service_cards = document.querySelector("#service_cards");

// Intersection observer for the about me summary.


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
quote_obs.observe(quote);

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

// IntersectionObserver to trigger individual animations when columns come into view
let columns = document.querySelectorAll("#intro_card");

let card_observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate each column with GSAP
                gsap.to(entry.target, {
                    duration: 1.5,
                    scale: 1,
                    opacity: 1,
                    ease: "back.out(1.7)",
                    delay:
                        window.innerWidth >= 768
                            ? Array.from(columns).indexOf(
                            entry.target,
                        ) * 0.2
                            : 0, // Delay between animations only on desktop
                });
                card_observer.unobserve(entry.target);
                // Stop observing once animated
            }
        });
    },
    {threshold: window.innerWidth >= 768 ? 0.85 : 0.85},
    // 85% threshold for mobile, 85% for desktop
);
// Observe each column
columns.forEach((column) => {
    card_observer.observe(column);
});

// Intersection Observer to trigger GSAP animation when the container is 100% in view
let block = document.querySelector('#about_me_image');
let about_me_container = document.querySelector('#about_me_image_column');

let about_me_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(block, {
                duration: 1.75, // Spin duration
                scale: 1, // Full size spin
                rotation: 1080, // Spin the block 720 degrees (2 full rotations)
                opacity: 1, // Fade in
                onComplete: () => {
                    // After the spin, pop and scale down slightly
                    gsap.to(block, {
                        scale: 1.2, // Scale up for pop effect
                        duration: 0.3,
                        ease: "back.out(1.7)",
                        onComplete: () => {
                            gsap.to(block, {
                                scale: 1, // Scale back down to normal
                                duration: 0.2
                            });
                        }
                    });
                }
            });
            about_me_observer.unobserve(about_me_container);
            // Stop observing after animation is triggered
        }
    });
}, {threshold: 0.85}); // Trigger when the container is fully in view

about_me_observer.observe(about_me_container);

function animateProgressBar(id, percentageId, duration) {
    let progress = 0;
    const totalLength = 628;
    const circularProgress = document.querySelector(`#${id} .circular-progress`);
    const endIndicator = document.querySelector(`#${id} .end-indicator`);
    const percentageText = document.getElementById(percentageId);

    let interval = setInterval(() => {
        progress += 1;
        if (progress > 100) {
            clearInterval(interval);
        } else {
            // Update percentage text
            percentageText.innerText = progress + '%';

            // Calculate progress for circular stroke
            const offset = totalLength - (progress / 100) * totalLength;
            circularProgress.style.strokeDashoffset = offset;

            // Move the end indicator smoothly along the circle
            const angle = (progress / 100) * 360 - 90;
            const radians = (angle * Math.PI) / 180;
            const x = 150 + 100 * Math.cos(radians);
            const y = 150 + 100 * Math.sin(radians);
            endIndicator.setAttribute('cx', x);
            endIndicator.setAttribute('cy', y);
        }
    }, duration);
}

// Intersection Observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const percentageId = id.replace('progress-bar', 'progress-percentage');
            animateProgressBar(id, percentageId, 20); // Adjust the animation speed if necessary
            observer.unobserve(entry.target); // Unobserve once the animation starts
        }
    });
}

// Create Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.75 // Only start when 100% of the progress bar is in view
});

// Observe each progress bar
document.querySelectorAll('.progress-container').forEach(container => {
    observer.observe(container);
});

const container = document.getElementById('icon-container');
const icons = document.querySelectorAll('.icon');

function getRandomTransform() {
    const randomX = Math.floor(Math.random() * 400) - 200; // Random value between -200 and 200
    const randomY = Math.floor(Math.random() * 400) - 200;
    const randomZ = Math.floor(Math.random() * 300) - 150;
    return `translate3d(${randomX}px, ${randomY}px, ${randomZ}px)`; // Return the random transform value
}

// Set random transform on each icon before observing
icons.forEach(icon => {
    icon.style.transform = getRandomTransform(); // Assign random starting position
});

// Create observer for the entire container and log when triggered
const icon_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Container is in view"); // Log when observer triggers
            container.classList.add('visible'); // Make the icons visible and move to position
            icons.forEach(icon => {
                icon.style.transform = "translate3d(0, 0, 0)"; // Move icons back to original position
            });
        }
    });
}, {threshold: 0.75}); // Trigger observer when 50% of the container is visible

icon_observer.observe(container); // Apply observer to the container

// IntersectionObserver to add different box-shadows when columns come into view
let my_service_cards = document.querySelectorAll("#service-card");

let service_card_observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the corresponding box-shadow class based on data attribute
                let shadowClass =
                    entry.target.getAttribute("data-shadow");
                entry.target.classList.add(shadowClass);
            } 
        });
    },
    {threshold: 0.9}, // Trigger when 90% of the column is in view
);

// Observe each column
my_service_cards.forEach((column) => {
    service_card_observer.observe(column);
});