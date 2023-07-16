function searchDisplayPrices() {
    const price_description_li = document.querySelectorAll('.price_description_li'),
        close_block = document.querySelectorAll('.price_description_small_block img'),
        wrap_price_description = document.querySelectorAll('.wrap_price_description'),
        rest_search_data = document.querySelector('.rest_search'),
        input_search = document.querySelector('.input_search');

    let before_block = [];
    let before_sub_block = [];
    let time_on = 400;
    let time_two = 300;
    let index;
    let  data_offset_Height;

    for (let i = 0; i < price_description_li.length; i++) {
        price_description_li[i].onclick = () => {
            rememberPreviousValue(i);
            close_block[i].style.transform = 'translate(-50%, -50%) rotate(180deg)';
            if (rest_search_data.children.length !== 0) {
                rest_search_data.innerHTML = '';
                input_search.value = '';
            }


        }
    }

    const rememberPreviousValue = (i) => {
        if (before_block[0] === i) return;
        if (before_block.length <= 2) {
            before_block.unshift(i);
            if (before_block.length === 3) {
                before_block.pop();
            }
        }
        openPrice(i);
    };

    const remembersPreviousValuesSubmenu = (i) => {
        if (before_sub_block[0] === i) return;
        if (before_sub_block.length <= 2) {
            before_sub_block.unshift(i);
            if (before_sub_block.length === 3) {
                before_sub_block.pop();
            }

        }

    };


    const scrollTop = () => {
        const scroll = document.querySelector('.main_block');
        scroll.scrollTo(0,  200);



    };


    const openPrice = (i) => {

        for (let x = 0; x < wrap_price_description[i].children.length; x++) {
            if (wrap_price_description[i].children[x].classList.contains('additional_price_list')) {
                wrap_price_description[i].children[x].onclick = () => {
                    remembersPreviousValuesSubmenu(x);
                    if (before_sub_block[1] !== undefined) {
                        wrap_price_description[i].children[before_sub_block[1]].children[1].style.display = 'none';
                    }
                    wrap_price_description[i].children[x].children[1].style.display = 'flex';
                    scrollTop()
                }

            } else {
                index = x;
                wrap_price_description[i].children[x].style.display = 'flex';

                setTimeout(() => {
                    wrap_price_description[i].children[x].style.opacity = '1';

                }, time_two);
                clearSubmenu();
            }
        }

        if (before_block[1] !== undefined) {
            setTimeout(() => {
                wrap_price_description[before_block[1]].style.height = '0';
                setTimeout(() => {
                    wrap_price_description[before_block[1]].style.display = 'none';
                    wrap_price_description[before_block[1]].style.height = '100%';
                    openOneSectionPriceList(i);
                }, time_on)

            }, time_two);

            close_block[before_block[1]].style.transform = 'translate(-50%, -50%) rotate(0deg)'
        }else {
            openOneSectionPriceList(i)
        }

    };

    const openOneSectionPriceList =(i)=>{
        wrap_price_description[i].style.display = 'block';
        setTimeout(() => {
          data_offset_Height = wrap_price_description[i].offsetHeight;
            wrap_price_description[i].style.height = `${data_offset_Height}px`;
            scrollTop();
            if(wrap_price_description[i].children[0].className === 'additional_price_list'){
                wrap_price_description[i].style.height = `100%`;
            }

        }, time_on)
    };


    const clearSubmenu = () => {
        for (let i = 0; i < wrap_price_description.length; i++) {
            for (let x = 0; x < wrap_price_description[i].children.length; x++) {
                if (wrap_price_description[i].children[x].classList.contains('additional_price_list')) {
                    wrap_price_description[i].children[x].children[1].style.display = 'none';

                }
            }
        }

    };

    const search = () => {
        const input_search = document.querySelector('.input_search');
        const list_search = document.querySelectorAll('.price_description_sub_li ');
        const error_title = document.querySelector('.error_title');
        const sorting_data = [];
        let $str = [];
        let filter_sorting_data;
        let rest_search;
        let before_index;


        input_search.addEventListener('keyup', () => {
            rest_search = input_search.value.toLowerCase();
            if (input_search.value.length === 0) {
                rest_search = '';
                error_title.style.display = 'none'
            }
            if (rest_search.length >= 3) {
                before_index = $str.length;
                $str = rest_search.match(/[^\s]+/g);
                searchEnteredValue($str);
            } else {
                rest_search_data.innerHTML = '';
                error_title.style.display = 'none'
            }

        });
        for (let i = 0; i < list_search.length; i++) {
            sorting_data.push(list_search[i].children[0].innerHTML.toLowerCase())
        }
        const searchEnteredValue = (query) => {
            filter_sorting_data = sorting_data.map((el, index) => {
                if (el.indexOf(query[query.length - 1]) !== -1) {
                    return index
                }
            });

            rest_search_data.innerHTML = '';
            filter_sorting_data.map((el) => {
                if (el !== undefined) {
                    let clone_list = list_search[el].cloneNode(true);
                    rest_search_data.appendChild(clone_list);
                    error_title.style.display = 'none'
                } else {
                    if (rest_search_data.children.length === 0) {
                        error_title.style.display = 'block'
                    }
                }
            })

        };


    };
    search();
}


searchDisplayPrices();