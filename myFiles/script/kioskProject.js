$(document).ready(function(){
    //메인화면 - 오른쪽 장바구니 나오기
    $(`#main_cart_call_btn`).on('click', ()=> {
        let cartWidth = $( '.main_cart_area' ).width();
        if( cartWidth == 0 ) {
            $('.main_cart_area').css('width', '24rem');
            $('.main_cart_area').css('opacity', '1');
            $('.main_cart_list_area').css('width', '23.5rem');
            $(`.main_menulist_area`).css("width", "43rem")
            $(`.main_body_area`).css("width", "61rem")
            $(`#main_menulist_wrap_area`).css("width", "43rem")
        } else if ( cartWidth == 240 ) {
            $('.main_cart_area').css('width', '0rem');
            $('.main_cart_area').css('opacity', '0');
            $('.main_cart_list_area').css('width', '0rem');
            $(`.main_menulist_area`).css("width", "67rem")
            $(`.main_body_area`).css("width", "85.7rem")
            $(`#main_menulist_wrap_area`).css("width", "67rem")
        }
    });

    //메인화면 - 왼쪽 메뉴바 스크롤에따라 색 변경
    $('.main_menulist_area').scroll(function(){
        if ( $('.main_cart_list_area').width() > 200 ) {
            let title1 = $("#main_menulist_title1").offset().top-10;
            let title2 = $("#main_menulist_title2").offset().top+100;
            let title3 = $("#main_menulist_title3").offset().top+950;
            let title4 = $("#main_menulist_title4").offset().top+1900;
            let title5 = $("#main_menulist_title5").offset().top+3400;
            let title6 = $("#main_menulist_title6").offset().top+4200;
            let title7 = $("#main_menulist_title7").offset().top+5500;
            let menulist_height = $('.main_menulist_area').scrollTop()+50;
                //console.log(menulist_height);
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
        } else {
            let title1 = $("#main_menulist_title1").offset().top-10;
            let title2 = $("#main_menulist_title2").offset().top+10;
            let title3 = $("#main_menulist_title3").offset().top+750;
            let title4 = $("#main_menulist_title4").offset().top+1400;
            let title5 = $("#main_menulist_title5").offset().top+2500;
            let title6 = $("#main_menulist_title6").offset().top+3000;
            let title7 = $("#main_menulist_title7").offset().top+3900;
            let menulist_height = $('.main_menulist_area').scrollTop()+280;
        // console.log(menulist_height);
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
        }
    });





    //메인화면 - 상단 중앙 시간 표시하기
    function getClock() {
        let nowDateTime = new Date();
        let ampm = nowDateTime.getHours() >= 12 ? 'PM' : 'AM';
        let [main_time_hours, main_time_minutes] = nowDateTime.toLocaleTimeString('en-US', {hour12: true}).split(/:| /);
        let main_date_year = nowDateTime.getFullYear();
        let main_date_month = (nowDateTime.getMonth() + 1).toString().padStart(2, '0');
        let main_date_day = nowDateTime.getDate().toString().padStart(2, '0');
        $('.main_time_date').text(`${main_date_year}년 ${main_date_month}월 ${main_date_day}일`);
        $('.main_time_time').text(`${main_time_hours.padStart(2, '0')}:${main_time_minutes.padStart(2, '0')} ${ampm}`);
    }

    getClock();
    setInterval(getClock, 20000);
    

    // 직원호출 모달창 토글
    $(`.main_staffCall_btn`).click(function () {
        // $(`#modal_staffCall`).toggle();
        $("#modal_staffCall").css("display", "inline-block");
        $(".modalOfModal_alert_new").css("display", "flex");
    })
    $(`#modal_staffCall_exist_btn`).click(function () {
        // $(`#modal_staffCall`).toggle();
        $("#modal_staffCall").css("display", "none");
        $(".modalOfModal_alert_new").css("display", "none");
    })

    //직원호출 요청하기 누르면
    $('#modal_staffCall_choiceEnd_box').click(function () {
        $(`.modalOfModal_modal p`).remove();
        $('.modalOfModal_alert').css('display', 'flex');
        $(`.modalOfModal_modal`).append(`${modalOfModalText("staffCallConfirm")}`);
        $('.modal_staffCall').css('display', 'none');

        setTimeout(() => {
            $(`.modalOfModal_alert`).css("display", "none");
            $(`.modalOfModal_alert_new`).css("display", "none");
        }, 1600);

    });
    // 직원호출 선택
    // $(`.modal_staffCall_serviceList`).click(function () {
    //     $(`.modal_staffCall_guideWord`).hide();

    //     $(`.modal_staffCall_guideWord`).after(`
    //         <div class="modal_staffCall_choiceCall_box">
    //             <div class="modal_staffCall_choiceContent_box">${this.innerHTML}</div>
    //             <div class="modal_staffCall_choiceAmount_box">
    //                 <div class="modal_staffCall_choiceAmount_btnBox">
    //                     <button class="modal_staffCall_minus_btn">-</button>
    //                     <input class="modal_staffCall_choiceAmount" type="text" value=0 readonly />
    //                     <button class="modal_staffCall_plus_btn">+</button>
    //                 </div>
    //                 <div class="modal_staffCall_choiceDelete_btn">삭제</div>
    //             </div>
    //         </div>
    //     `);
    //     $(`.modal_staffCall_showChoice_box`).css("flex-flow", "column nowrap").css("justify-content", "flex-start");
    // });







/* 상세페이지 모달창 관련 js */

    //상세페이지 모달창 띄우기
    $(".main_menulist_box").click(function() {
        $(".modal_selectMenu").css("display", "inline-block");
        $(".modalOfModal_alert_new").css("display", "flex");
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
        $(".modalOfModal_alert_new").css("display", "none");
    });


/* 결제 전 주문 확인페이지 모달창 관련 js */

    //결제 전 주문 확인페이지 띄우기
    //$(".main_cart_order_btn").click(function() {
    //    $(".modal_checkMenu").css("display", "flex");
    //});

    //결제 전 주문 확인페이지 닫기
    $(".modal_checkMenu_exist_btn").click(function() {
        $(".modalOfModal_alert_new").css("display","none");
        $(".modal_checkMenu").css("display", "none");
    });

/* ----------------------------- */


/* 주문내역 확인 모달창 관련 js */

    //주문내역 확인 창 띄우기
    $(".main_orderHistory_btn").click(function() {
        $(".modalOfModal_alert_new").css("display", "flex");
        $(".modal_orderHistory").css("display", "flex");
    });

    //주문내역 확인 창 닫기
    $(".modal_orderHistory_exist_btn").click(function() {
        $(".modalOfModal_alert_new").css("display", "none");
        $(".modal_orderHistory").css("display", "none");
    });

/* ----------------------------- */

/* 모달의 모달 innerText 반환 함수 시작 */
//let modalOfModalText = needAlertText => {
//    switch (needAlertText) {
//        case "menuPutInCartConfirm": return "<p>주문이 장바구니에 담겼습니다.</p>";
//        case "mininumAlert": return "<p>최소 수량은 1개입니다.</p>";
//        case "maximumAlert": return "<p>최대 수량은 20개입니다.</p>";
//        case "membershipConfirm": return "<p>멤버십이 확인되었습니다.</p>";
//        case "membershipConfirmFail": return "<p>존재하지 않는 회원입니다.</p><p>멤버십 신규 가입은 어플을 이용해 주세요.</p>";
//        case "membershipNoExist": return "<p>유효하지 않은 번호입니다.</p>";
//        case "paymentCancel": return "결제가 취소되었습니다.";
//        // case "menuOrderConfirm": return "<p>주문이 완료되었습니다.</p>";
//        case "staffCallConfirm": return "<p>요청이 완료되었습니다.</p>";
//    }
//}
/* 모달의 모달 innerText 반환 함수 끝 */





/* 멤버십창 관련 js */

/* 멤버십 입력 모달창 jquery 시작 */
/*
let membershipPrintValue = "";
$(`.modal_membership_enter_num_btn`).on("click", function () {
    membershipPrintValue += $(this).text();
    if (membershipPrintValue.length > 11) {
        membershipPrintValue = membershipPrintValue.slice(0, membershipPrintValue.length - 1);
    }
    $(`.modal_membership_printTel`).val(membershipPrintValue);
});
$(`.modal_membership_enter_reset_btn`).on("click", function () {
    $(`.modal_membership_printTel`).val("");
    membershipPrintValue = "";
});
$(`.modal_membership_enter_delete_btn`).on("click", function () {
    membershipPrintValue = membershipPrintValue.slice(0, membershipPrintValue.length - 1);
    $(`.modal_membership_printTel`).val(membershipPrintValue);
});
*/
/*
$(`#modal_membership_control_btn_enterFinish`).on("click", function () {
    $(`.modalOfModal_modal p`).remove();
    let phoneNumRegexr = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (phoneNumRegexr.test(membershipPrintValue)) {
        $(`.modalOfModal_alert`).css("display", "flex");
        // 회원일 때

        //kiosk2.js 에서 가져옴 !!!!!!!!!!!!!!!!!!!!!!!!!
        //if (phoneNumRegexr.test($("#modal_membership_printTel").val())) {
        //    $.ajax({
        //        url: "/member",
        //        data: {phoneNumber: $("#modal_membership_printTel").val()},
        //        method: "POST",
        //        dataType: "json",
        //    }).done((json) => {
        //        $("#modal_membership_printTel").val(json.result?.point);
        //    });
        //}
        //kiosk2.js 에서 가져옴 !!!!!!!!!!!!!!!!!!!!!!!!!

        console.log(sangmooMember.getThisTel);
        for(let i=0; i<sangmooMember.length; i++){
            if ($(`.modal_membership_printTel`).val() == sangmooMember[i].getThisTel) {
                console.log("sangmooMember[i].getThisTel");
                
                //$(`.modalOfModal_modal`).append(`${modalOfModalText("membershipConfirm")}`);
                $(`.modalOfModal_modal`).append(`${modalOfModalText("membershipConfirm")}`);
                let matchFlag = true;
                $(".modal_payment_cardPlease_btn").on("click", function () {
                    $(".modal_payment_cardPlease_box").css("display", "none");
                    matchFlag = false;
                });
                
                setTimeout(() => {
                    $(".modal_payment_cardPlease_box").css("display", "flex");
                    $(`.modalOfModal_alert_new`).css("display", "none");
                    //3초후에 카드삽입창 닫힘
                    setTimeout(() => {
                        if (matchFlag) {
                            $(`.modal_payment_cardPlease_box`).css("display", "none");
                            $(`.modal_payment_process_box`).css("display", "flex");
                            
                            //결제완료창 - 5초 후에 창이 닫힙니다. 문구(숫자 감소)
                            let j = 6;
                            let paymentTimeOut = setInterval(() => {
                                console.log(typeof j);
                                console.log(j);
                                $(`.modal_payment_clear_desc p:last-child span`).text(`${j}`);
                                j--;
                            }, 1000);
                            
                            //2초후에 결제중 창 닫힘,
                            setTimeout(() => {
                                $(`.modal_payment_process_box`).css("display", "none");
                                $(`.modal_payment_clear_box`).css("display", "flex");
                                
                                //5초 후에 완료창 닫히면서 메인화면으로 이동
                                setTimeout(() => {
                                    
                                    $(`.modal_payment_clear_box`).css("display", "none");
                                    $(".modal_membership").css("display", "none");
                                    clearInterval(paymentTimeOut);
                                }, 4800);
                            }, 2000);
                        }
                    }, 3000);
                }, 1600);
    
                
                for(let i=0; i<mainMenu.length; i++){
                    $("#modal_orderHistory_list").remove();
                }
                //주문내역 - 주문시간
                let payment_time_hour = String(new Date().getHours()).padStart(2, "0");
                let payment_ampm = payment_time_hour > 12 ? '오후' : '오전';
                payment_time_hour = payment_time_hour >= 12 ? String(payment_time_hour - 12).padStart(2, "0") : payment_time_hour;
                let payment_time_minute = String(new Date().getMinutes()).padStart(2, "0");
                let payment_time_second = String(new Date().getSeconds()).padStart(2, "0");
                let payment_time = `${payment_ampm} ${payment_time_hour}:${payment_time_minute}:${payment_time_second}`
                let orderHistoryTotalPrice = 0;
                
                // 주문내역 내용 삽입 및 합계금액 새로 계산해서 출력
                for(let i=0; i<mainMenu.length; i++){
                    if(mainMenu[i].getThisCount > 0){
                        cartOrderMenu[junCount] = new SangmooCartTable(mainMenu[i].getThisName, mainMenu[i].getThisPrice, mainMenu[i].getThisCount);
                        junCount++;
                    }
                }
                for(let i=0; i<cartOrderMenu.length; i++){
                    let modalOrderHistory = `
                        <div id="modal_orderHistory_list" class="modal_orderHistory_list_01">
                            <div class="modal_orderHistory_time_01">${payment_time}</div>
                            <div class="modal_orderHistory_name_01">${cartOrderMenu[i].getThisName}</div>
                            <div class="modal_orderHistory_count_01">${cartOrderMenu[i].getThisCount}개</div>
                            <div class="modal_orderHistory_amount_01">${numberComma(cartOrderMenu[i].getThisPrice)}원</div>
                            <div class="modal_orderHistory_total_01">${numberComma(cartOrderMenu[i].getThisPrice * cartOrderMenu[i].getThisCount)}원</div>
                        </div>
                    `;
                    orderHistoryTotalPrice += cartOrderMenu[i].getThisCount * cartOrderMenu[i].getThisPrice;
                    $("#modal_orderHistory_wrap").html($("#modal_orderHistory_wrap").html() + modalOrderHistory);
                }
                $("#modal_orderHistory_total_amount").html(numberComma(orderHistoryTotalPrice));
                console.log(cartOrderMenu)
                
                for(let i=0; i<mainMenu.length; i++){
                    $("#displayWrap"+i).remove();
                    $("#modal_checkMenu_list"+i).remove();
                    mainMenu[i].setThisCount = 0;
                }
                console.log(cartOrderMenu);
                $("#main_cart_total_price").html('0원');
                $("#modal_checkMenu").css("display", "none");
                $("#modal_checkMenu_total_amount").html('0');
                
                setTimeout(() => {
                    console.log("setTimeOut ok");
                    $(`.modalOfModal_alert`).css("display", "none");
                    $(`.modal_membership_printTel`).val("");
                    membershipPrintValue = "";
                }, 1600);
                
                // 회원이 아닐 때
            } else {
                
                console.log("meiyou");
                $('.modal_join_memberShip_ask').css("display","flex");
                $('.modalOfModal_alert').css("display","none");
                $('.modal_join_memberShip_phoneNumber').html($(`.modal_membership_printTel`).val());
                $(`.modal_membership_printTel`).val("");
                membershipPrintValue = "";
                // 회원가입 예 버튼
                //$("#modal_join_memberShip_btn_yes")
                
                
                // $(`.modalOfModal_modal`).append(`${modalOfModalText("membershipConfirmFail")}`);
                // console.log($("#modal_membership_printTel").val());
            }
            
        }
        // 번호가 유효하지 않을 때 (형식안맞음)
    } else {
        console.log("no");
        $(`.modalOfModal_alert`).css("display", "flex");
        $(`.modalOfModal_modal`).append(`${modalOfModalText("membershipNoExist")}`);

        setTimeout(() => {
            console.log("setTimeOut ok");
            $(`.modalOfModal_alert`).css("display", "none");
            $(`.modal_membership_printTel`).val("");
            membershipPrintValue = "";
        }, 1600);
    }


});
*/
/* 회원가입창 */
$(`.modal_join_memberShip_btn_no`).on("click", function () {
    $('.modal_join_memberShip_ask').css("display","none");
    $('.modalOfModal_alert_member').css("display","none");
    $(`.modal_membership_printTel`).val("");
});



/* 멤버십 입력 모달창 jquery 끝 */


// //결제하기 버튼 누르면 멤버십창 띄우기
// $(".modal_selectMenu_add_btn").click(function () {
//     $('.modal_checkMenu').css('display', 'none');
//     $(".modal_membership").css("display", "flex");
// });

//멤버십창 닫기
$('.modal_membership_icon').click(function () {
    $(".modal_membership").css("display", "none");
    $('.modalOfModal_alert_new').css("display","none");
});

//멤버십창에서 건너뛰기 눌렀을때
/*$('#modal_membership_control_btn_pass').click(function () {
    $(".modal_payment_cardPlease_box").css("display", "flex");

    let matchFlag = true;
    $(".modal_payment_cardPlease_btn").on("click", function () {
        $(".modal_payment_cardPlease_box").css("display", "none");
        matchFlag = false;
    });

    //3초후에 카드삽입창 닫힘
    setTimeout(() => {
        if (matchFlag) {
            $(`.modal_payment_cardPlease_box`).css("display", "none");
            $(`.modal_payment_process_box`).css("display", "flex");

            //결제완료창 - 5초 후에 창이 닫힙니다. 문구(숫자 감소)
            let j = 6;
            let paymentTimeOut = setInterval(() => {
                console.log(typeof j);
                console.log(j);
                $(`.modal_payment_clear_desc p:last-child span`).text(`${j}`);
                j--;
            }, 1000);

            //2초후에 결제중 창 닫힘,
            setTimeout(() => {
                $(`.modal_payment_process_box`).css("display", "none");
                $(`.modal_payment_clear_box`).css("display", "flex");

                //5초 후에 완료창 닫히면서 메인화면으로 이동
                setTimeout(() => {
                    $(`.modal_payment_clear_box`).css("display", "none");
                    $(".modal_membership").css("display", "none");
                    clearInterval(paymentTimeOut);
                }, 4800);
            }, 2000);
        }
    }, 3000);
});*/


    //멤버십창 닫기 버튼 (왼쪽 화살표)
    $('.modal_payment_clear_btn').click(function () {
        $(`.modal_payment_clear_box`).css("display", "none");
        $(".modal_membership").css("display", "none");
        $('.modalOfModal_alert_new').css("display","none");
    });

    //시작페이지 동영상 누르면 없어지기
    $('.modal_intro_video_area').click(function () {
        $(`.modal_intro_video_area`).css("display", "none");
    });
});
