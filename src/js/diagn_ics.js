function additionalInformationWindow() {
    const modal_window_service = document.querySelector('.modal_window_service');
    const bottom = document.querySelectorAll('.house_service_icon');
    const close_modal_window_service = document.querySelector('.close_modal_window_service');
    const service_description = document.querySelectorAll('.service_description');
    const house_service  = document.querySelector('.house_service');
    let index_array = [];
    let number;
    let is_open_window = false;

    close_modal_window_service.addEventListener('click',()=>{
        is_open_window =false;
        animateDeploymentAdditionalInformation()
    });
    house_service.addEventListener('click',()=>{
        is_open_window =false;
        setTimeout(()=>{
            animateDeploymentAdditionalInformation()
        },200)

    });

    for (let i = 0; i < bottom.length; i++) {
        bottom[i].onclick = () => {
            if (modal_window_service && service_description[i]) {
                number = i;
                rememberPreviousValue(i);
                setTimeout(() => {
                    is_open_window = true;
                    animateDeploymentAdditionalInformation()
                }, 50)

            }
        }
    }

    const rememberPreviousValue = (i) => {
        if (index_array.length <= 2) {
            index_array.unshift(i);
            if (index_array.length === 3) {
                index_array.pop();
            }
            deploymentAdditionalInformation(index_array);
        }


    };

    const deploymentAdditionalInformation = () => {


        if (index_array[1] !== undefined) {

            let cloneTwo = service_description[index_array[1]];

            modal_window_service.removeChild(cloneTwo);
        }
        let clone = service_description[index_array[0]];
        modal_window_service.appendChild(clone);

    };
    const animateDeploymentAdditionalInformation = () => {
        if (is_open_window) {
            modal_window_service.style.transform =`translateX(0)`
        }else {
            modal_window_service.style.transform =`translateX(-505px)`
        }
    }
}

additionalInformationWindow();