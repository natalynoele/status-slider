function upperSlder() {
    const slider_item = document.querySelectorAll('.upper_slider_item'),
        slider_description = document.querySelectorAll('.slider_description'),
        img = document.querySelectorAll('.wrap_img'),
        descr_up_text = document.querySelectorAll('.wrap_overflow span'),
        descr_alow_text = document.querySelectorAll('.wr-dow_text ')
        control_button = document.querySelector('.control_button');


    let length_slider = slider_item.length;
    let counter = 0;
    let tim = 7000;
    let control_anim = true;
    let button;
    let set_timeout;
    let style_up = 'opacity:1;  transform: translateY(0); transition: opacity 1.5s ';
    let style_up_text = 'opacity:1;  transform: translateY(0);';
    let style_butt_on = 'transform :scale(1.2); background:white;';
    let style_butt_off = 'transform : scale(1); background: #b3336a;';
    img[0].style.opacity = '1';

    descr_up_text[0].style.cssText = 'opacity:1;  transform: translateY(0);  ';
    descr_alow_text[0].style.cssText = style_up;
    slider_description[0].style.transform = 'translate( -50%,-10px)';

    if (length_slider > 1) {
        for (let i = 0; i < length_slider; i++) {
            let elem = document.createElement("span");
            control_button.appendChild(elem);
        }

        function createButton() {
            button = document.querySelectorAll('.control_button span');
            for (let i = 0; i < length_slider; i++) {
                button[i].onclick = () => {
                    slider(i)
                }
            }
            button[0].style.cssText = style_butt_on;
        }

        createButton();
    }


    control_button.addEventListener('mouseover', () => {
        clearTimeout(set_timeout)
    });
    control_button.addEventListener('mouseout', () => {
        autoTim();
    });


    let style_down_descr = 'opacity:0;  transform: translateY(200px);';
    let style_down_title = 'opacity:0;  transform: translateY(200px) ;  ';

    function slider(i) {
        if (i === counter || control_anim === false) return;
        control_anim = false;
        button[i].style.cssText = style_butt_on;
        descr_up_text[i].style.cssText = style_down_title;
        descr_alow_text[i].style.cssText = style_down_descr;
        descr_alow_text[counter].style.cssText = style_down_descr;
        descr_up_text[counter].style.cssText = style_down_title;
        slider_description[counter].style.transform = 'translate( -50%,0px)';
         slider_item[counter].style.zIndex = '0';
        setTimeout(() => {
            img[counter].style.opacity = '0';
            img[i].style.opacity = '1';

            // if(img_[i]){
            //   if(img_[counter]) img_[counter].style.opacity = '0';
            //
            //   img_[i].style.opacity = '1';
            // }

            button[counter].style.cssText = style_butt_off;
            setTimeout(() => {
                descr_up_text[i].style.cssText = style_up_text;
                descr_alow_text[i].style.cssText = style_up;
                slider_description[i].style.transform = 'translate( -50%,-10px)';
                 slider_item[i].style.zIndex = '4';
                counter = i;
                control_anim = true;
            }, 700);

        }, 300)


    }

    let counter_autotim = 0;

    function autoTim() {

        set_timeout = setTimeout(() => {
            counter_autotim++;
            if (counter_autotim >= length_slider) {
                counter_autotim = 0;
            }
            slider(counter_autotim);
            autoTim()
        }, tim)

    }

    if (length_slider > 1) {
        autoTim()
    }

}


upperSlder();



