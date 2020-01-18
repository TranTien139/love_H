 function replaceHtmlTag(content) {
    let regex = /(&nbsp;|<([^>]+)>)/ig;
    return content.replace(regex, "");
};

var cw = $('.container').width();
var boxAF = $('.new-right-box .first').width();
var boxAFContinue = $('.new-right-box .continue').width();
var boxAFW = $('.new-right-box').width();
var wBoxCBtom = $('.box-content-bottom').width();
var ch = cw / 2.5;
var mrt = 0.1625 * ch;
var titleSlide = 0.1275 * ch;
var hmid = ch * 0.85;
var hright = ch * 0.92;

var heightPfirst = hmid * 0.31 / 6;
var heightName = hmid * 0.45 / 6;

$('.container').css({'height': ch + 'px'});
$('.slide-left').css({'margin-top': mrt + 'px'});
$('.title-slide').css({'height': titleSlide + 'px', 'margin-bottom': (0.055 * ch) + 'px'});
$('.tv-slidebar').css({'height': (ch * 0.516) + 'px'});
$('.opacity-footer').css({'height': (ch * 0.06) + 'px'});
$('.box-center').css({'height': hmid + 'px', 'margin-top': (ch * 0.045) + 'px'});
$('.box-content-mid').css({'margin-left': cw * 0.036 + 'px'});
$('.box-mid-head').css({'height': (hmid * 0.31) + 'px'});
$('.box-content-bottom ').css({'height': wBoxCBtom * 0.9 + 'px'});
$('.new-right-box').css({'height': hright + 'px', 'margin-top':  '3%',     'margin-right': '5%'});
$('.new-right-box .first').css({'height': ch * 0.24 + 'px', 'margin-bottom': ch * 0.01 + 'px'});
$('.new-right-box .continue').css({'height': ch * 0.1490 + 'px'});
$('p.title-first').css({'height': heightPfirst + 'px', 'font-size': (heightPfirst) + 'px','line-height': heightPfirst + 'px', 'margin-bottom': heightPfirst * 0.5 + 'px'});
$('p.delegate-name').css({'height': heightName + 'px', 'font-size': (heightName) + 'px','line-height': heightName + 'px', 'margin-bottom': heightName * 0.13 + 'px'});
$('p.title-secont').css({'height': heightPfirst + 'px', 'font-size': (heightPfirst) + 'px','line-height': heightPfirst + 'px', 'margin-bottom': heightPfirst * 0.3 + 'px'});
var wBoxFourStar = $('div.box-all-avatar').width();
$('div.box-all-avatar').css({'height': wBoxFourStar + 'px', 'margin-top':  '140px','position': 'relative'});