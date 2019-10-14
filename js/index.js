const rows = [
    'May',
    'The force',
    'Be with',
    'You'
];

const init = () => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.innerHTML = generateParagraphContent();
    const letters = document.querySelectorAll('.letter');
    createEventListeners(letters);
}

window.addEventListener('load', init);

const generateParagraphContent = () => {
    let paragraphContent = '';
    rows.forEach(row => {
        row.split('').forEach(char => {
            if (char !== ' ') {
                //turn every letter into a span element
                paragraphContent += `<span class = "letter">${char}</span>`;
            }
            else paragraphContent += ' ';
        })
        //insert line break after each row(array item)
        paragraphContent += '<br>';
    });
    return paragraphContent;
}

const createEventListeners = (letters) => {
    letters.forEach(letter => letter.addEventListener('mouseenter', addActiveClass));
    letters.forEach(letter => letter.addEventListener('animationend', removeActiveClass));
};

const addActiveClass = (e) => {
    e.target.classList.add('active');
}

const removeActiveClass = (e) => {
    e.target.classList.remove('active');
}