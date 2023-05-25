$(document).ready(function(){
    //메인화면 - 오른쪽 장바구니 나오기
    $(`#main_cart_call_btn`).on('click', ()=> {
        let cartWidth = $( '.main_cart_area' ).width();
        if( cartWidth == 0 ) {
            $('.main_cart_area').css('width', '24rem');
            $('.main_cart_area').css('opacity', '1');
            $(`.main_menulist_area`).css("width", "43rem")
            $(`.main_body_area`).css("width", "61rem")
            $(`#main_menulist_wrap_area`).css("width", "43rem")
        } 
        if (  cartWidth == 240  ) {
            $('.main_cart_area').css('width', '0rem');
            $('.main_cart_area').css('opacity', '0');

            $(`.main_menulist_area`).css("width", "67rem")
            $(`.main_body_area`).css("width", "85.7rem")
            $(`#main_menulist_wrap_area`).css("width", "67rem")
        }
    });

    //메인화면 - 왼쪽 메뉴바 스크롤에따라 색 변경
    let title1 = $("#main_menulist_title1").offset().top-10;
    let title2 = $("#main_menulist_title2").offset().top-10;
    let title3 = $("#main_menulist_title3").offset().top-10;
    let title4 = $("#main_menulist_title4").offset().top-10;
    let title5 = $("#main_menulist_title5").offset().top-10;
    let title6 = $("#main_menulist_title6").offset().top-10;
    let title7 = ($("#main_menulist_title7").offset().top)-10;
    $('.main_menulist_area').scroll(function(){
        let menulist_height = $('.main_menulist_area').scrollTop()+ 141;
        if(title1 <= menulist_height && title2 > menulist_height ) {
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu1').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu1').css('color','rgb(240, 240, 240)');
        } else if(title2 <= menulist_height && title3 > menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu2').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu2').css('color','rgb(240, 240, 240)');
        } else if(title3 <= menulist_height && title4 > menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu3').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu3').css('color','rgb(240, 240, 240)');
        } else if(title4 <= menulist_height && title5 > menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu4').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu4').css('color','rgb(240, 240, 240)');
        } else if(title5 <= menulist_height && title6 > menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu5').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu5').css('color','rgb(240, 240, 240)');
        } else if(title6 <= menulist_height && title7 > menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu6').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu6').css('color','rgb(240, 240, 240)');
        } else if(title7 <= menulist_height){
            $('.main_menuBar').css('background-color','rgb(240, 240, 240)');
            $('.main_menuBar').css('color','rgb(50, 50, 50)');
            $('.main_menuBar_menu7').css('background-color','rgb(245, 95, 80)');
            $('.main_menuBar_menu7').css('color','rgb(240, 240, 240)');
        }
    });

    //메인화면 - 상단 중앙 시간 표시하기
    function getClock() {
        let nowDateTime = new Date();
        let ampm = '';
        let main_date_year = String(nowDateTime.getFullYear());
        let main_date_month = String((nowDateTime.getMonth()+1)).padStart(2, "0");
        let main_date_day = String(nowDateTime.getDate()).padStart(2, "0");
        $('.main_time_date').text(`${main_date_year}년 ${main_date_month}월 ${main_date_day}일`);

        let main_time_hours = String(nowDateTime.getHours()).padStart(2, "0");
        ampm = main_time_hours > 12 ? 'PM' : 'AM';
        let main_time_minutes = String(nowDateTime.getMinutes()).padStart(2, "0");
        $('.main_time_time').text(`${main_time_hours}:${main_time_minutes} ${ampm}`);
    }
    getClock();
    setInterval(getClock, 1000);
    
    //메인화면 - 장바구니 숫자 증감
    let resultNum = $('.main_cart_list_number');
    let i = 0;
    resultNum.val(i);

    $(`.main_cart_list_incBtn`).on('click', ()=> {
        if(i < 20) {
            i++;
            resultNum.val(i);
        }
    });
    $(`.main_cart_list_decBtn`).on('click', ()=> {
        if(i > 0) {
            i--;
            resultNum.val(i);
        }
    });



    // 직원호출 모달창 토글
    $(`.main_staffCall_btn`).click(function () {
        // $(`#modal_staffCall`).toggle();
        $("#modal_staffCall").css("display", "inline-block");
    })
    $(`#modal_staffCall_exist_btn`).click(function () {
        // $(`#modal_staffCall`).toggle();
        $("#modal_staffCall").css("display", "none");
    })
    // 직원호출 선택
    $(`.modal_staffCall_serviceList`).click(function () {
        $(`.modal_staffCall_guideWord`).hide();

        $(`.modal_staffCall_guideWord`).after(`
            <div class="modal_staffCall_choiceCall_box">
                <div class="modal_staffCall_choiceContent_box">${this.innerHTML}</div>
                <div class="modal_staffCall_choiceAmount_box">
                    <div class="modal_staffCall_choiceAmount_btnBox">
                        <button class="modal_staffCall_minus_btn">-</button>
                        <input class="modal_staffCall_choiceAmount" type="text" value=0 readonly />
                        <button class="modal_staffCall_plus_btn">+</button>
                    </div>
                    <div class="modal_staffCall_choiceDelete_btn">삭제</div>
                </div>
            </div>
        `);
        $(`.modal_staffCall_showChoice_box`).css("flex-flow", "column nowrap").css("justify-content", "flex-start");

        //직원호출 모달창 - 호출용품 숫자 증감
        // let staffCall_resultNum = $('.modal_staffCall_choiceAmount');
        // let resultNum = 0;

        $(`.modal_staffCall_plus_btn`).on('click',function() {
            // let resultNum = Number($(this).prev().val())+1;
            //     console.log("resultNum : " + resultNum);
            // console.log(Number($(this).prev().val()));
            // $(this).prev().attr('id', 'test');
            // $(this).prev().val(Number($(this).prev().val())+1);

            console.log($(this));

            console.log($('.modal_staffCall_choiceCall_box').find("input").eq(0).css("background","red"));







        });

        $(`.modal_staffCall_minus_btn`).on('click', function() {
            // resultNum = Number($(this).prev().val())-1;
            // console.log("resultNum : " + resultNum);
            // $(this).prev().val(Number($(this).prev().val())-1);








        });
    });


















    //상세페이지 모달창 띄우기
    $(".main_menulist_box").click(function() {
        $(".modal_selectMenu").css("display", "inline-block");
    });

    // 옵션 추가
    $(".modal_selectMenu_option_check_all").click(function() {
        if( $(this).text() == "" ) {
            $(this).text("✔");
        } else { 
            $(this).text("");
        }
    });

    //상세페이지 모달창 닫기
    $(".modal_selectMenu_exist_btn").click(function() {
        $(".modal_selectMenu").css("display", "none");
    });

    //상세페이지 모달창 장바구니 담기 버튼
    $('#modal_selectMenu_add_btn').on('click', function() {


    }); 


























});
