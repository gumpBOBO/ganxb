!function t(r,i,a){function u(n,e){if(!i[n]){if(!r[n]){var o="function"==typeof require&&require;if(!e&&o)return o(n,!0);if(f)return f(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}o=i[n]={exports:{}},r[n][0].call(o.exports,function(e){return u(r[n][1][e]||e)},o,o.exports,t,r,i,a)}return i[n].exports}for(var f="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,n,o){jQuery(document).ready(function(){var n=$("#QRBox"),o=$("#board+#QRBox"),t=$("#MainBox"),r=$("#MainBox img");function i(e){e&&r.attr("src",e),$("#DonateText,#donateBox,#github").addClass("blur"),0===o.length&&($("#board").after(n),o=$("#board+#QRBox")),n.fadeIn(300,function(e){t.addClass("showQR")})}$("#donateBox>li").click(function(e){var n=$(this).attr("id");"BTC"===n?i("./img/weixin_pay.webp"):"AliPay"===n?i("./img/zfb_pay.webp"):"WeChat"===n&&i("./img/weixin_pay.webp")}),t.click(function(e){t.removeClass("showQR").addClass("hideQR"),setTimeout(function(e){n.fadeOut(300,function(e){t.removeClass("hideQR")}),$("#DonateText,#donateBox,#github").removeClass("blur")},600)})})},{}]},{},[1]);