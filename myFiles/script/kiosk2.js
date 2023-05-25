//$("#modal_membership_control_btn_enterFinish").on("click", () => {
//
//    //kioskProject.js로 옮김!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//    if (/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test($("#modal_membership_printTel").val())) {
//        $.ajax({
//            url: "/member",
//            data: {phoneNumber: $("#modal_membership_printTel").val()},
//            method: "POST",
//            dataType: "json",
//        }).done((json) => {
//            console.log(json)
//            $("#modal_membership_printTel").val(json.result?.point);
//            if (json.result?.point) {
//                phoneNumberFlag = true;
//                console.log("ajax Point")
//            }
//        });
//    }
//})

//$("#modal_join_memberShip_btn_yes").on("click", () => {
//    console.log("im work membership btn yes")
//    let checkAjax = false;
//    setTimeout(() => {
//        console.log("checkAjaxTime is work")
//        if (!checkAjax) {
//        $.ajax({
//            url: "/memberNew",
//            data: {phoneNumber: $(".modal_join_memberShip_phoneNumber").html(), memPoint: addPoint},
//            method: "POST",
//            dataType: "json",
//        }).done((json) => {console.log(json.phoneNumber)});
//        $(".modal_join_memberShip_ask").css("display", "none");
//        console.log('inside ajax: ' + sangmooMember);
//      }
//    }, 3000)
//})