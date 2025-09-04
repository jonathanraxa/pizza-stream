const initOrder = () => {
    const orderSteps = document.querySelectorAll('.order--step');
    const imgContainers = document.querySelectorAll('.panel');
    const loadingState = document.getElementById('loading');
    const getTime = document.getElementById('remaining-time');
    const leadText = document.getElementById('lead-text');

    // loop through images and change classes
    let i = 0;
    const interval = setInterval(function () {
        if (i <= orderSteps.length + 1) {
            if (i < 3) {
                changeToActive(i);
            } else if (i === 3) {
                changeRemainingTime(3);
            }
            i++;
        }
        else {
            clearInterval(interval);
        }
    }, 3000);

    const changeToActive = currElement => {
        if (currElement != 0) {
            imgContainers[currElement].classList.remove("un_processed");
            imgContainers[currElement].classList.add("active");
            changeRemainingTime(currElement);
        }
        setTimeout(() => {
            changeToProcessed(currElement);
        }, 2000);
    };

    const changeToProcessed = currElement => {
        imgContainers[currElement].classList.add("processed");
    };

    const changeRemainingTime = currTime => {
        switch (currTime) {
            case 0:
                getTime.innerHTML = "60 minutes";
                break;
            case 1:
                getTime.innerHTML = "30 minutes";
                break;
            case 2:
                getTime.innerHTML = "10 minutes";
                break;
            case 3:
                leadText.remove();
                loadingState.remove();
                getTime.innerHTML = "Delivered!";
                break;
            default:
                getTime.innerHTML = ' -- minutes'
        }
    }
}



document.querySelector('.ps_button').addEventListener('click', () => {
    initOrder();
    document.querySelector('.ps_button').classList.add('hide');
    document.querySelector('.confirmation--cont').classList.remove('hide');
    document.querySelector('.confirmation--cont').classList.add('show');
});
