"use strict";$(document).ready(function(){var e=$(".modal"),i=$(".service-box"),s=$(".service-price");$(".btn").click(function(i){i.preventDefault(),e.is(":visible")?e.hide():e.show()}),$(".close").click(function(i){i.preventDefault(),e.hide()}),$(".menu").on("click",function(){$(".l-site").hasClass("is-open")?($(".menu").removeClass("is-active"),$(".l-site").removeClass("is-open")):($(".menu").addClass("is-active"),$(".l-site").addClass("is-open"))}),i.click(function(e){e.preventDefault(),$(this).fadeOut(300)}),s.click(function(e){e.preventDefault(),$(this).prev().fadeIn(300)})});