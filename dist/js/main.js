$(function(){function e(){var e=$(window).width();if(console.log(e),e<=800){0==$("#menu-button").length&&$("header .col:nth-of-type(3)").prepend(menumobileClone),function(){menubutton=$(".menu-mobile"),menu=$(".menu"),$(".menu-mobile a").filter(function(){return"Close"===$.trim($.text(this))}).length&&$(".menu-mobile a").html("Menu");function n(){$(".menu-collapsed").length?menu.removeClass("menu-collapsed"):menu.removeClass("menu-expanded").addClass("menu-collapsed").delay(1e3).queue(function(){$(".sub").css({display:"none"})})}n(),$(".menu-mobile").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),function(){menu.hasClass("menu-expanded")?(menubutton.removeClass("close"),n()):(menubutton.addClass("close"),menu.addClass("menu-expanded").removeClass("menu-collapsed"));$(".close").length?$(".menu-mobile a").html("Close"):$(".menu-mobile a").html("Menu")}(),$(document).on("click",function(e){e.preventDefault(),e.stopPropagation(),"menu-mobile"!=e.target.className&&n()})}),$(".menu a").off("click").on("click",function(e){return e.stopImmediatePropagation(),!0}),$(".has-sub").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation();var n=$(this).find(".sub");$(".sub").not(n).css({display:"none"}),n.css({display:"block"})})}();new Swiper(".swiper-container.menu",{slidesPerView:4,spaceBetween:1,centeredSlides:!0,initialSlide:0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-menu.swiper-button-next",prevEl:".swiper-menu.swiper-button-prev"}});if($("#detail").length){var n=new Swiper("main.profile .swiper-container.navigation",{slidesPerView:2,spaceBetween:1,centeredSlides:!0,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-profile.swiper-button-next",prevEl:".swiper-profile.swiper-button-prev"}}),i=new Swiper("main.profile .swiper-container.content",{slidesPerView:1});(n.controller.control=i).controller.control=n}$("nav.menu.swiper-container").length||($("nav.menu").addClass("swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android").children().addClass("swiper-wrapper").children().addClass("swiper-slide swiper-slide-active"),$("main.profile .swiper-container.navigation").addClass("swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android").children().addClass("swiper-wrapper").children().addClass("swiper-slide swiper-slide-active"))}else $("#menu-button").length&&($(".menu").removeClass("menu-collapsed menu-expanded"),menubutton.removeClass("close"),$("#menu-button").detach()),$(".menu li").hover(function(){$(this).find(".sub").stop().slideDown(200)},function(){$(this).find(".sub").stop().slideUp(200)}),$("nav.menu").removeClass("swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android").children().removeClass("swiper-wrapper").children().removeClass("swiper-slide swiper-slide-active")}console.log("goals"),setTimeout(function(){$("#preload").hide(),$(".container").css({visibility:"visible"})},3e3),$('a.top[href^="#"]').click(function(){return $("html,body").animate({scrollTop:$(this.hash).offset().top},1e3),!1}),menumobile=$('<div id="menu-button" class="menu-mobile"><a href="#">Menu</a></div>'),menumobileClone=menumobile.clone(!0),menumobile.remove(),e(),$(window).on("load resize",function(){window.responsive,clearTimeout(window.responsive),window.responsive=setTimeout(function(){e(),console.log("oy")},0)}),$("#detail").length&&($(".cover img").each(function(){var e=$(this).offset().top;$(this).data("orig-offset",e)}),$(window).scroll(function(){var i=window.pageYOffset||document.documentElement.scrollTop;$(".cover img").each(function(){var e=$(this).data("orig-offset");if(e<=i){var n=(i-e)/$(window).height()*100;console.log(n),$(this).css({transform:"translate3d(0,"+n+"%, 0)"})}})}))});