var links = document.getElementsByTagName("a"); function scrollToMessage(b, c) { var a = document.getElementById("chatlog__message-container-" + c); a && (b.preventDefault(), a.classList.add("chatlog__message-container--highlighted"), window.scrollTo({ top: a.getBoundingClientRect().top - document.body.getBoundingClientRect().top - window.innerHeight / 2, behavior: "smooth" }), window.setTimeout(function () { a.classList.remove("chatlog__message-container--highlighted") }, 2e3)) } function showSpoiler(b, a) { a && (a.classList.contains("chatlog__attachment--hidden") && (b.preventDefault(), a.classList.remove("chatlog__attachment--hidden")), a.classList.contains("chatlog__markdown-spoiler--hidden") && (b.preventDefault(), a.classList.remove("chatlog__markdown-spoiler--hidden"))) } Array.prototype.forEach.call(links, function (a, c) { var b = a.getAttribute("href"); b && b.includes("#") && a.addEventListener("click", function (a) { a.preventDefault(), document.getElementById(b.replace(/#/g, "")).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }) }) }), document.addEventListener("DOMContentLoaded", () => { document.querySelectorAll(".chatlog__markdown-pre--multiline").forEach(a => hljs.highlightBlock(a)) }), document.addEventListener("DOMContentLoaded", () => { document.querySelectorAll(".chatlog__sticker--media[data-source]").forEach(a => { let b = a.getAttribute("data-source"), c = lottie.loadAnimation({ container: a, renderer: "svg", loop: !0, autoplay: !0, path: b }); c.addEventListener("data_failed", () => a.innerHTML = "<strong>[Sticker cannot be rendered]</strong>") }) })
// Mobile Redirect
// if (('ontouchstart' in window) || (window.innerWidth / (window.devicePixelRatio || 1)) < 400) {
//   var ud = getCookie('YOURCOOKIENAME');
//   if (ud == null || ud == ''){
//       setCookie('YOURCOOKIENAME', 'MOBILESITE', 365);
//       var targetDomain = 'https://arsipast.palpale.xyz/mobile';
//   }
//   else if(ud.match(/MOBILESITE/)){
//       var targetDomain = 'https://arsipast.palpale.xyz/mobile';
//   }
//   else {
//       var targetDomain = 'https://arsipast.palpale.xyz/';
//   }
//   var targetUrl = window.location.href.replace(window.location.origin, targetDomain);
//   document.location.href = targetUrl;
// }
// function getCookie(c_name){
//   var i, name, value, cookies = document.cookie.split(';');
//   for (i = 0; i < cookies.length; i++){
//       name = cookies[i].substr(0, cookies[i].indexOf('='));
//       value = cookies[i].substr(cookies[i].indexOf('=') + 1);
//       name = name.replace(/^\s+|\s+$/g, '');
//       if (name == c_name){
//           return decodeURIComponent(value);
//       }
//   }
// }
// function setCookie(name, value, days) {
//   var expires = '';
//   if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + (days*24*60*60*1000));
//       var expires = '; expires=' + date.toGMTString();
//   }
//   document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
// }