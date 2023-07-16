window.onload = function () {




    const lowerCallbackForm = () => {
        const form = document.querySelector('.animation_form');
        const button = document.querySelector('.button');
        //const input_phone = document.querySelector('.input_phone');
        const animation_button_title = document.querySelector('.animation_button_title');
        // const height_bloc_form = document.querySelector('.call_back_form');
        // let length_input = height_bloc_form.clientHeight;
        let control_button = true;
        let isDisableButtonPhone;


        button.addEventListener('click', () => {
            if (control_button ) {
                opensForm();
            }

        });

        window.addEventListener("resize", () => {
            matchMedia();
            disableButtonPhone();

        }, false);

        const matchMedia = () => {
            isDisableButtonPhone = window.matchMedia("(max-width: 550px)").matches;

        };
        matchMedia();
        let css_block_button = `transform: translateX(175px);
                                cursor: default;
                                width:0;`;
        // let css_block_button2 = `transform: translateX(10px);
        //                        width:0;`;

        function opensForm() {
            control_button = false;
            animation_button_title.style.opacity = '0';
            form.style.visibility = 'visible';
            setTimeout(() => {
                animation_button_title.style.padding = '0';
                form.style.height = '1px';
                setTimeout(() => {
                    animation_button_title.style.fontSize = '0';
                    disableButtonPhone();
                    animateForm()
                }, 100)
            }, 250);

            const animateForm = () => {
                setTimeout(() => {
                    if(!window.matchMedia("(max-width: 550px)").matches){
                        form.style.height = `${46}px`;
                    }else {
                        form.style.height = `unset`;
                    }

                    setTimeout(() => {
                        form.style.overflow = 'visible';
                    }, 200);

                }, 600);
            }
        }

        const disableButtonPhone = () => {
            if (!isDisableButtonPhone) {
                if (!control_button) {
                    button.style.cssText = css_block_button;
                }
            } else {
                if (!control_button) {
                    button.style.transform = 'scale(0)';

                    setTimeout(()=>{
                        button.style.display = 'none';
                    },400)
                }
            }

        }

    };


    function formRegistrationDoctor() {

        const main_list_menu = document.querySelectorAll('.selection_doctor_li');
        const open_forms = document.querySelector('.record_doctor_forms');
        const close = document.querySelector('.close_record_forms');
        const modal_wndow = document.querySelector('.section_record_forms');
        const wrap_menu = document.querySelector('.selection_doctor_ul');
        const registration_doctor_button = document.querySelector('.registration_doctor');
        const registration_form = document.querySelector('.record_doctor');
        const selection_doctor = document.querySelector('.selection_doctor');
        const record_selected_service = document.querySelector('.record_selected_service');
        let array_index = [];
        let service_direction;

        open_forms.addEventListener('click', () => {
            document.body.style.overflowY = 'hidden';
            openModalFormWindow()
        }, false);

        registration_doctor_button.addEventListener('click', () => {
            fillingOutForm()
        });

        close.addEventListener('click', close_form, false);

        main_list_menu.forEach((el, index) => {
            el.children[0].addEventListener('click', () => {
                if (el.children[1] !== undefined) {

                    openAdditionalNavigation(index);
                } else {
                    service_direction = main_list_menu[index].children[0].innerText.toLowerCase();
                    fillingOutForm();
                }

            })
        });

        if (document.querySelector('.content_personal')) {

            const wrap_content = document.querySelectorAll('.wrap_content_doctors_appointment_fa_fa');

            wrap_content.forEach(el => {
                el.addEventListener('click', (e) => {
                    if (e.target.classList.contains("record_doctor_forms")) {

                        openModalFormWindow();
                        service_direction = e.currentTarget.children[1].innerHTML;
                        fillingOutForm()


                    }
                })
            })

        }

        const openModalFormWindow = () => {
            modal_wndow.style.display = 'flex';
            setTimeout(() => {
                modal_wndow.style.opacity = '1';
            }, 10);
        };
        const openAdditionalNavigation = (i) => {
            if (main_list_menu[i].children[1].classList.contains('active_sub_menu')) {
                main_list_menu[i].children[1].classList.remove('active_sub_menu');
                main_list_menu[i].children[0].classList.remove('active_sub_menu_dot');
                array_index.pop();
                if (array_index.length === 0) wrap_menu.style.marginTop = '70px';
                returnOriginalStyles()


            } else {
                wrap_menu.style.marginTop = '0';
                array_index.push(i);
                setTimeout(() => {
                    main_list_menu[i].children[1].classList.add('active_sub_menu');
                    main_list_menu[i].children[0].classList.add('active_sub_menu_dot');
                    main_list_menu[i].children[1].addEventListener('click', (e) => {
                        service_direction = e.target.innerText;
                        fillingOutForm()
                    })
                }, 200)


            }

        };


        const fillingOutForm = () => {
            selection_doctor.style.opacity = '0';
            setTimeout(() => {
                selection_doctor.style.display = 'none';
                registration_form.style.display = 'flex';
                setTimeout(() => {
                    registration_form.style.opacity = '1';
                    record_selected_service.innerHTML = service_direction ? service_direction : '';


                }, 100)
            }, 100)


        };

        let css_close_registration_form = `opacity : '0'; display :'none'`;
        let css_selection_doctor = `opacity : '1'; display :'flex'`;
        let css_close = `transform :translate(-50%,-50%) rotate(0deg);`;
        let css_revert_styles_close_line_on = `transform :translate(-50%,-50%) rotate(-45deg);`;
        let css_revert_styles_close_line_two = `transform :translate(-50%,-50%) rotate(45deg);`;

        function close_form() {
            service_direction = '';
            registration_form.style.cssText = css_close_registration_form;
            modal_wndow.style.opacity = '0';
            close.children[0].style.cssText = css_close;
            close.children[1].style.cssText = css_close;
            setTimeout(() => {
                modal_wndow.style.display = 'none';
                document.body.style.overflowY = 'visible';
                setTimeout(() => {
                    close.children[0].style.cssText = css_revert_styles_close_line_on;
                    close.children[1].style.cssText = css_revert_styles_close_line_two;
                    selection_doctor.style.cssText = css_selection_doctor;
                    returnOriginalStyles();

                }, 200)
            }, 300)
        }

        const returnOriginalStyles = () => {
            wrap_menu.style.marginTop = '70px';
            for (let i = 0; i < main_list_menu.length; i++) {
                if (main_list_menu[i].children[1] !== undefined) {
                    main_list_menu[i].children[1].classList.remove('active_sub_menu');
                    main_list_menu[i].children[0].classList.remove('active_sub_menu_dot');
                }
            }

        };
    }

    function determiningHeightMainContent() {

            const section_main_content = document.querySelector('.section_main_content');
            const minor_block = document.querySelector('.minor_block');
            const footer = document.querySelector('.footer ');
            const header = document.querySelector('.header');
            const upper_slider = document.querySelector('.upper_slider_list');

            let summarizeTotal;

            window.addEventListener("resize", () => {
                setBlockSize()

            }, true);
            const setBlockSize = () => {
                console.log('lovv test')
                if (window.matchMedia("(min-width: 950px)").matches) {
                    console.log('test')
                    summarizeTotal = footer.offsetHeight + header.offsetHeight + minor_block.offsetHeight;
                    section_main_content.style.height = `  ${Math.abs(summarizeTotal - window.innerHeight)}px`;
                    console.log(section_main_content)
                    if (upper_slider !== null) {
                        upper_slider.style.height = `  ${Math.abs(summarizeTotal - window.innerHeight)}px`;
                    }

                } else {
                    section_main_content.style.height = 'unset';
                    if (upper_slider !== null) {
                        upper_slider.style.height = '90vh';
                    }
                }

            };
            setBlockSize();
        }





    function formGlobalSiteSearch() {
        const form = document.querySelector('.form_global_site_search');
        const input_search = document.querySelector('.site_search');
        const search_button_on_panel = document.querySelector('.search_link');
        const close_search_form = document.querySelector('.close_search_form');
        const button_site_search = document.querySelector('.button_site_search');
        let isControl_form = true;
        let css_style_input = ` max-width: 200px;
                                 padding: 9px 15px 9px 12px;`;
        let css_style_input_off = ` max-width: 0;
                                 padding: 0;`;
        search_button_on_panel.addEventListener('click', () => {
            isControl_form = true;
            displayForumScreen();
        });

        close_search_form.addEventListener('click',()=>{
            isControl_form =false;
            displayForumScreen();
        });

        const displayForumScreen = () => {
            if(isControl_form){
                form.style.display = 'flex';
                button_site_search.style.opacity = '1';
                setTimeout(() => {

                    input_search.style.cssText = css_style_input;
                    close_search_form.style.transform = 'scale(1)'
                }, 300)
            }else {
                if (!window.matchMedia("(max-width: 400px)").matches){
                    input_search.style.cssText =  css_style_input_off;
                    setTimeout(() => {
                        form.style.display = 'none';
                        close_search_form.style.transform = 'scale(0)';
                        button_site_search.style.opacity = '0';

                    }, 400)
                }else {
                    input_search.style.cssText =  css_style_input_off;
                    form.style.display = 'none';
                    close_search_form.style.transform = 'scale(0)';
                    button_site_search.style.opacity = '0';


                }

            }

        }
    }

    formGlobalSiteSearch();
    determiningHeightMainContent();
    formRegistrationDoctor();
    lowerCallbackForm();
};



