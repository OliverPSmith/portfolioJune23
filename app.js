

/************************** Menu Toggle */
// Toggle menu onClick

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    header.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            header.classList.remove('active');
        })
    }
});


/************************** Work Tab Toggle */
// Toggle tab heading and its content - onClick

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // make the target (the tab clicked) a dataset variable
        const target = document.querySelector(tab.dataset.tabTarget)
        // when tab is clicked remove the 'active' class for the tab content
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        // remove 'active' class for the tab clicked
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // add 'active' class for the tab clicked and its content
        tab.classList.add('active');
        target.classList.add('active');
    })
});


