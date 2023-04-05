const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('left-to-right');
        }
        else {
            entry.target.classList.remove('left-to-right');
        }
    });
});

const hiddenElements = document.querySelectorAll('.left-to-right-hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
            entry2.target.classList.add('bottom-to-top');
        }
        else {
            entry2.target.classList.remove('bottom-to-top');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.bottom-to-top-hidden');
hiddenElements2.forEach((el2) => observer2.observe(el2));




const observer3 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
            entry2.target.classList.add('right-to-left');
        }
        else {
            entry2.target.classList.remove('right-to-left');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.right-to-left-hidden');
hiddenElements3.forEach((el2) => observer3.observe(el2));