/* 
    quick script used to test 
    overall functionality of the webpage
*/
window.onload = () => {

    (function() {
      setTimeout(()=>{
          if (confirm("Run prototype?")) {
              initPrototype();
          }
      }, 4000);
    })();
  

    let initPrototype = () => {

        let orderSteps = document.querySelectorAll('.order--step');
        let imgContainers = document.querySelectorAll('.panel');
        let loadingImg = document.getElementById('loading-img');
        let getTime = document.getElementById('remaining-time');
        let leadText = document.getElementById('lead-text');

        // loop through images and change classes
        let i = 0;
        let interval = setInterval(function () {
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

        let changeToActive = currElement => {

            if (currElement != 0) {
                imgContainers[currElement].classList.remove("un_processed");
                imgContainers[currElement].classList.add("active");
                changeRemainingTime(currElement);
            }
            setTimeout(() => {
                changeToProcessed(currElement);
            }, 2000);
        }

        let changeToProcessed = currElement => {
            imgContainers[currElement].classList.add("processed");
        }

        let changeRemainingTime = currTime => {
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
                    loadingImg.remove();
                    getTime.innerHTML = "Delivered!";
                    break;
                default:
                    getTime.innerHTML = ' -- minutes'
            }
        }
    }
}

    