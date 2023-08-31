const submitMood = document.querySelector('#submitMood');

function toggleClass(element, className, classesToRemove) {
    console.log(element, className, classesToRemove);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }

    if (classesToRemove.length > 0) {
        classesToRemove.forEach(function (className) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            }
        });
    }
}

submitMood.addEventListener('click', function (event) {
    event.preventDefault();
    const moodInput = document.querySelector('[name=mood]:checked');
    const myMood = document.querySelector('#myMood');
    const moodValue = moodInput.value;
    myMood.innerHTML = moodValue;

    toggleClass(myMood, 'default-mood', []);

    switch (moodValue) {
        case 'Very Happy':
            toggleClass(myMood, 'very-happy-mood', [
                'happy-mood',
                'not-so-happy-mood',
            ]);
            break;
        case 'Happy':
            toggleClass(myMood, 'happy-mood', [
                'very-happy-mood',
                'not-so-happy-mood',
            ]);
            break;
        case 'Not So Happy':
            toggleClass(myMood, 'not-so-happy-mood', [
                'happy-mood',
                'very-happy-mood',
            ]);
            break;
        default:
            return;
    }
});
