"use strict";$(document).ready(function(){function e(e){e.preventDefault(),d.removeClass("slide-in").find("li").show(),v.removeClass("move-left"),$("body").removeClass("cd-overlay")}var t=$(window),n=$("nav"),o=$("nav .link"),a=$(".toggle"),s=$(".modal"),c=$(".service-bottom");a.on("click",function(e){e.preventDefault(),a.parent().toggleClass("active")}),$(".btn").click(function(e){e.preventDefault(),s.is(":visible")?s.hide():s.show()}),$(".close").click(function(e){e.preventDefault(),s.hide()}),$(".map-btn").click(function(e){e.preventDefault(),$("#contact .fancy-box").css({display:"block"})}),$(".fancy-box img").click(function(e){e.preventDefault(),$("#contact .fancy-box").css({display:"none"})}),c.click(function(e){var t=$(this).siblings(".service-box");e.preventDefault(),t.fadeToggle()}),t.scroll(function(){t.scrollTop()>10?(n.css({"background-color":"white","box-shadow":"0 .125rem .25rem rgba(51,61,71,.4)","background-image":"none"}),o.css({color:"black"})):(n.css({"background-color":"transparent","box-shadow":"none","background-image":"linear-gradient(to bottom,rgba(25,25,25,0.95),transparent)"}),o.css({color:"white"}))});var l=768,i=1024,r=$(".cd-faq-trigger"),d=$(".cd-faq-items"),f=$(".cd-faq-categories"),u=f.find("a"),v=$(".cd-close-panel");u.on("click",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t);$(window).width()<l?(d.scrollTop(0).addClass("slide-in").children("ul").removeClass("selected").end().children(t).addClass("selected"),v.addClass("move-left"),$("body").addClass("cd-overlay")):$("body,html").animate({scrollTop:n.offset().top-19},200)}),$("body").bind("click touchstart",function(t){($(t.target).is("body.cd-overlay")||$(t.target).is(".cd-close-panel"))&&e(t)}),d.on("swiperight",function(t){e(t)}),r.on("click",function(e){e.preventDefault(),$(this).next(".cd-faq-content").slideToggle(200).end().parent("li").toggleClass("content-visible")}),$(window).on("resize",function(){$(window).width()<=i&&f.removeClass("is-fixed").css({"-moz-transform":"translateY(0)","-webkit-transform":"translateY(0)","-ms-transform":"translateY(0)","-o-transform":"translateY(0)",transform:"translateY(0)"}),f.hasClass("is-fixed")&&f.css({left:d.offset().left})})});