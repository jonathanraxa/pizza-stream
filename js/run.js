const orderSteps = document.querySelectorAll('.order--step');
const imgContainers = document.querySelectorAll('.panel');
const loadingState = document.getElementById('loading');
const getTime = document.getElementById('remaining-time');
const leadText = document.getElementById('lead-text');

const changeToActive = (currElement) => {
    imgContainers[currElement].classList.remove("un_processed");
    imgContainers[currElement].classList.add("active");
    changeRemainingTime(currElement);
    setTimeout(() => {
        changeToProcessed(currElement);
    }, 2000);
};

const changeToProcessed = (currElement) => {
    imgContainers[currElement].classList.add("processed");
};

const changeRemainingTime = (step) => {
    if (step === 'completed') {
        leadText.remove();
        loadingState.remove();
        getTime.innerHTML = "Delivered! That's Amore.";
        return;
    }
    switch (step) {
        case 0:
            getTime.innerHTML = "60 minutes";
            break;
        case 1:
            getTime.innerHTML = "30 minutes";
            break;
        case 2:
            getTime.innerHTML = "10 minutes";
            break;
        default:
            getTime.innerHTML = ' -- minutes'
    }
}

const initOrder = () => {
    let i = 0;
    const interval = setInterval(() => {
        // hits 3 when last step is reached
        if (i === orderSteps.length) {
            changeRemainingTime('completed');
            clearInterval(interval);
            return;
        }
        changeToActive(i);
        i++;
    }, 3000);
}

document.querySelector('.ps_button').addEventListener('click', () => {
    initOrder();
    document.querySelector('.ps_button').classList.add('hide');
    document.querySelector('.confirmation--cont').classList.remove('hide');
    document.querySelector('.confirmation--cont').classList.add('show');
    document.querySelector('#loading').classList.remove('hide');
    document.querySelector('#loading').classList.add('show');
});
