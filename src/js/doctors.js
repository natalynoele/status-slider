function openNavList() {
    const side_item = document.querySelectorAll('.side_item');
    const side_block = document.querySelector('.side_block');
    const main_block = document.querySelector('.main_block');
    const button_nav = document.querySelector('.button_nav_mobile_2');
    const button_nav_mobile = document.querySelector('.button_nav_mobile');
    let isModalWindow = true;
    let clearTim;
    let control_screen_rotation = true;
    let item_index = 0;
    let clear = true;
    let sideListsize = 0;
    let control_button_nav = false;
    let isButtonСontrol = false;
    let cssOpen = `margin :7px 0`;
    let cssClose = `
            opacity : 0;
            margin :0;`;


    for (let i = 0; i < side_item.length; i++) {
        side_item[i].onmouseenter = (e) => {
            if (window.matchMedia("(min-width: 950px)").matches) {
                e.preventDefault();
                clear = false;
                checkPresenceBlock(i)
            }
        };
    }


    for (let i = 0; i < side_item.length; i++) {
        side_item[i].onclick = () => {
            checkPresenceBlock(i)
        };
    }

    const checkPresenceBlock = (i) => {
        if (side_item[i].childNodes[2].nextSibling !== null) {
            control_screen_rotation = true;
            item_index = i;
            openSubMenu(i);
        }
    };


    button_nav.addEventListener('click', switchMobileNavigation, false);

    window.addEventListener('resize', resizeBlock, false);

    function switchMobileNavigation() {
        if (control_button_nav) {
            isButtonСontrol = !isButtonСontrol;

            if (isButtonСontrol) {
                side_block.style.left = '0';
                button_nav_mobile.style.display = 'none';
                closed();
            } else {
                side_block.style.left = '-400px';
                button_nav_mobile.style.display = 'flex';
                closed();
            }

        }

    }

    // button animation close
    const closed = () => {
        const buttonMobileItem = document.querySelectorAll('.button_nav_mobile_item_2');

        if (isButtonСontrol) {
            buttonMobileItem[1].style.cssText = cssClose;
            setTimeout(() => {
                buttonMobileItem[0].classList.add('close_top');
                buttonMobileItem[2].classList.add('close_bottom');
            }, 200)


        } else {
            buttonMobileItem[1].style.cssText = cssOpen;
            buttonMobileItem[0].classList.remove('close_top');
            buttonMobileItem[2].classList.remove('close_bottom');
        }
    };

    function resizeBlock() {

        control_button_nav = window.matchMedia("(max-width: 950px)").matches;
        isModalWindow = false;
        sideListsize = side_block.offsetWidth;
        control_screen_rotation = false;
        animClose(item_index);


    }


    const openSubMenu = (i) => {

        animateNavigationList(i);
        close(i);

    };


    const animateNavigationList = (i) => {
        if (isModalWindow) {
            side_item[i].childNodes[2].nextSibling = 'flex';
            side_item[i].childNodes[2].nextSibling = `${sideListsize}px`;
            side_item[i].childNodes[2].nextSibling.firstElementChild.style.opacity = '1';
            side_item[i].childNodes[2].nextSibling.lastElementChild.style.opacity = '1';


        } else {

            side_item[i].childNodes[2].nextSibling.style.display = 'flex';
            side_item[i].childNodes[2].nextSibling.style.transform = `translate(${sideListsize}px , -50%)`;
            side_item[i].childNodes[2].nextSibling.style.opacity = '1';
            side_item[i].childNodes[2].nextSibling.lastElementChild.style.opacity = '1';

            setTimeout(() => {
                side_item[i].childNodes[2].nextSibling.firstElementChild.childNodes[1].style.opacity = '1';
                side_item[i].childNodes[2].nextSibling.childNodes[1].style.opacity = '1';
                side_item[i].childNodes[2].nextSibling.style.maxWidth = `${sideListsize - 50}px`;
                clear = true
            }, 5)


        }
    };

    const close = (index) => {

        side_item[index].childNodes[2].nextSibling.addEventListener('click', () => {
            animClose(index)
        }, false);
        main_block.addEventListener('mouseenter', () => {
            animClose(index);
        });
        side_item[index].onmouseleave = (e) => {
            e.preventDefault();
            side_item[index].childNodes[2].nextSibling.firstElementChild.childNodes[1].style.opacity = '0';
            clearTim = setTimeout(() => {
                animClose(index);
            }, 300)
        };
        side_item[index].childNodes[2].nextSibling.onmouseenter = () => {
            clearTimeout(clearTim);
            animateNavigationList(index)
        };

    };

    const animClose = (index) => {

        side_item[index].childNodes[2].nextSibling.lastElementChild.style.opacity = '0';
        side_item[index].childNodes[2].nextSibling.firstElementChild.childNodes[1].style.opacity = '0';
        side_item[index].childNodes[2].nextSibling.childNodes[1].style.opacity = '0';

        if (!control_screen_rotation) {
            side_item[index].childNodes[2].nextSibling.style.maxWidth = `${0}px`;
            side_item[index].childNodes[2].nextSibling.style.transition = 'unset';
            side_item[index].childNodes[2].nextSibling.style.opacity = '0';
            setTimeout(() => {
                side_item[index].childNodes[2].nextSibling.style.transition = '0.5s';
            }, 400)
        }
        setTimeout(() => {
            side_item[index].childNodes[2].nextSibling.style.maxWidth = `${0}px`;
            setTimeout(()=>{
                side_item[index].childNodes[2].nextSibling.style.display = 'none';
            },400)



        }, 300);
    };
    resizeBlock();


}

//navigation bar our services
function mobilelNav() {
    const button_nav_mobile = document.querySelector('.button_nav_mobile');
    const buttonNavMobItem = button_nav_mobile.querySelectorAll('.button_nav_mobile_item');
    const wrap_nav = document.querySelector('.wrap_header_info');
    const button_nav = document.querySelector('.block_side_service');
    const wrap_header_info = document.querySelector('.wrap_header_info');
    const change_navigation_positioning = document.querySelector('.header');
    const return_position_navigation = document.querySelector('.record_doctor_forms');
    const search_button = document.querySelector('.search_link');


    let cssOpen = `
            margin :7px 0px;`;
    let cssClose = `
            opacity : 0;
            margin :0;`;

    let control = false;

    return_position_navigation.addEventListener('click',()=>{

        returnPositionNavigation()
    });
    search_button.addEventListener('click',()=>{
        returnPositionNavigation()

    });




    button_nav_mobile.addEventListener('click', () => {
        control = !control;
        mobileWindow(control);
        close();
        setTimeout(()=>{
            controlChangeNavigationPositioning();
        },400)

    }, false);

    wrap_nav.addEventListener('click', (e) => {
        if (control && e.target.className !== 'nav_item_title' && e.target.className !== 'nav_bar_item') {
            setTimeout(()=>{
                mobileWindow(control = false);
                close()
            },100);



        }
    }, false);

    const mobileWindow = (control) => {

        if (control) {
            wrap_nav.style.display = 'flex';
            setTimeout(() => {
                wrap_nav.style.maxHeight = '700px';
                setTimeout(() => {
                    button_nav.style.display = 'none';
                }, 100);


            }, 10)
        } else {
            setTimeout(() => {
                wrap_nav.style.display = 'none';
                button_nav.style.display = 'flex';
            }, 100);

            wrap_nav.style.maxHeight = '0';


        }

    };


    window.addEventListener("resize", function () {
        controlChangeNavigationPositioning();
        flippingScreen()
    });


const  controlChangeNavigationPositioning =()=>{
    if (window.matchMedia("(max-width: 950px)").matches) {
        if (wrap_header_info.offsetHeight + 200 >= window.innerHeight  ) {
            change_navigation_positioning.style.position = 'absolute';
        } else {
            change_navigation_positioning.style.position = 'fixed';

        }
    }else {
        change_navigation_positioning.style.position = 'relative';
    }
};

    const returnPositionNavigation =()=>{
        if (window.matchMedia("(max-width: 950px)").matches) {
            change_navigation_positioning.style.position = 'fixed';
        }
    };

    const flippingScreen = () => {

        if (window.matchMedia("(min-width: 1201px)").matches) {
            wrap_nav.style.display = 'flex';
            wrap_nav.style.maxHeight = '600px';
            button_nav_mobile.style.display = 'none';

        }

        if (window.matchMedia("(max-width: 1200px)").matches) {
            if (!control) {
                wrap_nav.style.display = 'none';
                button_nav_mobile.style.display = 'flex';

            }else {
                button_nav_mobile.style.display = 'flex';
            }


        }
    };


//---button animation close
    const close = () => {
        const buttonMobileItem = button_nav_mobile.querySelectorAll('.button_nav_mobile_item');
        if (control) {
            buttonMobileItem[1].style.cssText = cssClose;
            setTimeout(() => {
                buttonMobileItem[0].classList.add('close_top');
                buttonNavMobItem[2].classList.add('close_bottom');
            }, 200)


        } else {
            buttonMobileItem[1].style.cssText = cssOpen;
            buttonMobileItem[0].classList.remove('close_top');
            buttonNavMobItem[2].classList.remove('close_bottom');
        }
    }


}

mobilelNav();

openNavList();