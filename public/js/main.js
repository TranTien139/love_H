$(document).ready(function () {

    var numberFourBox = 0;
    var listAvatar = [];
    var ARRAY_FLY = [];
    var listPreview = [];


    for(var k = 0; k<60; k++) {
        listAvatar.push({avatar: './images/avatar'+ (k+1) +'.jpg', code: k});
    }
    
    var arrIsPreview = []

    var numberPick = numberFourBox * 4
    $("[data-avatar=9]").hide()
    $("[data-avatar=0]").hide()
    $("[data-avatar=1]").hide()
    $("[data-avatar=2]").hide()
    $("[data-avatar=3]").hide()
    $("[data-avatar=4]").hide()
    $("[data-avatar=5]").hide()
    $("[data-avatar=6]").hide()
    $("[data-avatar=7]").hide()
    $("[data-avatar=8]").hide()
    var stt = 0
    setInterval(function () {

        var checkPick = listAvatar.slice(numberPick, numberPick+1)
        if(stt%4 == 0 && stt != 0 && stt != 4){
            numberFourBox = numberFourBox + 1
        }
        var numRandomFourBox = numberFourBox
        if(numberFourBox >= 185) {
            numRandomFourBox = 185
            $( "#box-four-avatar185" ).remove();
        }

        var pickPrev = []
        if(checkPick.length==0){
            var rand = Math.floor(Math.random() * (arrIsPreview.length -2))
            pickPrev = listPreview.slice(rand , rand + 1)
        }

        if(checkPick.length > 0 || pickPrev.length > 0) {
            var picked = []
            if(checkPick.length > 0) {
                picked = listAvatar.splice(numberPick, numberPick + 1)
                ARRAY_FLY.push(picked[0].code)
            }else if(pickPrev.length >0){
                picked = pickPrev
            }
            if(picked.length>0) {
                $("#delegate-name").text(picked[0].name)
                if (stt == 0) {
                    $("[data-avatar=0]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)
                }
                if (stt == 1) {
                    $("[data-avatar=1]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)
                    $("[data-avatar=0]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                }

                if (stt == 2) {

                    $("[data-avatar=2]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=1]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=0]").animate({top: '287px', right: '0px'}, 1000)
                }

                if (stt == 3) {

                    $("[data-avatar=3]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=2]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=1]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '207px', right: '0px'}, 1000)
                }

                if (stt == 4) {
                    $("[data-avatar=4]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=3]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=2]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '127px', right: '0px'}, 1000)
                }

                if (stt == 5) {

                    $("[data-avatar=5]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=4]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=3]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=2]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '127px', left: '0px'}, 1000)
                }

                if (stt == 6) {

                    $("[data-avatar=6]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=5]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=4]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=3]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=2]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '127px', left: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '207px', left: '0px'}, 1000)
                }

                if (stt == 7) {

                    $("[data-avatar=7]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=6]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=5]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=4]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=3]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=2]").animate({top: '127px', left: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '207px', left: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '287px', left: '0px'}, 1000)
                }

                if (stt == 8) {

                    $("[data-avatar=8]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=7]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=6]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=5]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=4]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=3]").animate({top: '127px', left: '0px'}, 1000)
                    $("[data-avatar=2]").animate({top: '207px', left: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '287px', left: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '363px', left: '0px'}, 1000)
                }

                if (stt == 9) {
                    $("[data-avatar=3]").css({}).animate({
                        top: '27%',
                        right: '10%',
                        width: '98%',
                        height: '30%',
                        left: '-330%',
                        position: 'absolute'
                    }, 1000)
                    $("[data-avatar=2]").css({}).animate({
                        top: '27%',
                        right: '10%',
                        width: '98%',
                        height: '30%',
                        left: '-232%',
                        position: 'absolute'
                    }, 1000)
                    $("[data-avatar=1]").css({}).animate({
                        top: '57%',
                        right: '10%',
                        width: '98%',
                        height: '30%',
                        left: '-330%',
                        position: 'absolute'
                    }, 1000)
                    $("[data-avatar=0]").css({}).animate({
                        top: '57%',
                        right: '10%',
                        width: '98%',
                        height: '30%',
                        left: '-232%',
                        position: 'absolute'
                    }, 1500)


                    var animateToLogo = setTimeout(function () {
                        var bg0 = $("[data-avatar=0]").attr('data-url');
                        var bg1 = $("[data-avatar=1]").attr('data-url');
                        var bg2 = $("[data-avatar=2]").attr('data-url');
                        var bg3 = $("[data-avatar=3]").attr('data-url');


                        var htmlFly = ''
                        htmlFly += '<div class="box-four-star" style="left: 15% !important; top: 0% !important; position: absolute !important;" id="box-four-avatar' + (numRandomFourBox) + '">\n';

                        htmlFly += '<img class="avatar-sm-new box-avatar-1" src="' + bg0 + '" />\n';


                        htmlFly += '<img class="avatar-sm-new box-avatar-2" src="' + bg1 + '" />\n';

                        htmlFly += '<img class="avatar-sm-new box-avatar-3" src="' + bg2 + '" />\n';


                        htmlFly += '<img class="avatar-sm-new box-avatar-4" src="' + bg3 + '" />\n';

                        htmlFly += '</div>'
                        $('.box-all-avatar').append(htmlFly)
                        $("[data-avatar=0]").remove();
                        $("[data-avatar=1]").remove();
                        $("[data-avatar=2]").remove();
                        $("[data-avatar=3]").remove();

                        $("#box-four-avatar" + (numRandomFourBox)).css({
                            position: 'relative',
                            top: 'auto',
                            left: 'auto',
                            width: 'auto',
                            height: 'auto',
                            float: 'left'
                        }).animate({
                            'float': 'left',
                            'width': '50px',
                            'height': '50px'
                        }, 1000)
                        
                        clearTimeout(animateToLogo)
                    }, 1150)

                }

                if (stt == 10) {
                    $("[data-avatar=9]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)
                    $("[data-avatar=8]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=7]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=6]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=5]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=4]").animate({top: '127px', left: '0px'}, 1000)

                    var timeOut = setTimeout(function () {
                        $("#box-user-wait9").attr('data-avatar', 5)
                        $("#box-user-wait8").attr('data-avatar', 4)
                        $("#box-user-wait7").attr('data-avatar', 3)
                        $("#box-user-wait6").attr('data-avatar', 2)
                        $("#box-user-wait5").attr('data-avatar', 1)
                        $("#box-user-wait4").attr('data-avatar', 0)

                        $("[data-avatar=5]").attr('id', "box-user-wait5")
                        $("[data-avatar=4]").attr('id', "box-user-wait4")
                        $("[data-avatar=3]").attr('id', "box-user-wait3")
                        $("[data-avatar=2]").attr('id', "box-user-wait2")
                        $("[data-avatar=1]").attr('id', "box-user-wait1")
                        $("[data-avatar=0]").attr('id', "box-user-wait0")

                        for (var m = 6; m <= 9; m++) {
                            $('.new-right-box').append('<div data-avatar="' + m + '" id="box-user-wait' + m + '" data-url="" class="box-avatar continue" >\n' +
                                '                <div class="border-avatar-dhd"></div>\n' +
                                '            </div>')
                        }
                        clearTimeout(timeOut)
                    }, 500)
                }
                if (stt == 11) {
                    $("[data-avatar=6]").css({
                        "height": ch * 0.24,
                        "display": "block",
                        "background": 'url(' + picked[0].avatar + ') no-repeat',
                        "background-size": "100% 100%"
                    }).addClass('first').removeClass('continue').attr('data-url', picked[0].avatar).attr('data-code', picked[0].code)

                    $("[data-avatar=5]").removeClass('first').addClass('continue').animate({
                        top: '363px',
                        right: '0px',
                        'height': ch * 0.1490
                    }, 1000)
                    $("[data-avatar=4]").animate({top: '287px', right: '0px'}, 1000)
                    $("[data-avatar=3]").animate({top: '207px', right: '0px'}, 1000)
                    $("[data-avatar=2]").animate({top: '127px', right: '0px'}, 1000)
                    $("[data-avatar=1]").animate({top: '127px', left: '0px'}, 1000)
                    $("[data-avatar=0]").animate({top: '207px', left: '0px'}, 1000)
                    stt = 6
                }
                stt++
            }
        }else {
            $("#delegate-name").text('')
        }
    }, 1350)
})