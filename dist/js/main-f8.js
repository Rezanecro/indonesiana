$(function(){var n=new Framework7({activeState:!1,clicks:{externalLinks:".external"},materialRipple:!1});setTimeout(function(){$("#preload").hide(),$(".container").css({visibility:"visible"})},3e3),$('a.top[href^="#"]').on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},1e3)}),menumobile=$('<div id="menu-button" class="menu-mobile"><a href="#">Menu</a></div>'),menumobileClone=menumobile.clone(!0),menumobile.remove();var o=$("#detail .recommendation");function e(){var e=$(window).width();console.log(e);n.swiper.create(".swiper-container.menu",{slidesPerView:4,navigation:{nextEl:".swiper-menu.swiper-button-next",prevEl:".swiper-menu.swiper-button-prev"}});e<=800?(console.log("mobile"),0==$("#menu-button").length&&$("header .col:nth-of-type(3)").prepend(menumobileClone),function(){menubutton=$(".menu-mobile"),menu=$(".menu"),$(".menu-mobile a").filter(function(){return"Close"===$.trim($.text(this))}).length&&$(".menu-mobile a").html("Menu");function n(){$(".menu-collapsed").length?menu.removeClass("menu-collapsed"):menu.removeClass("menu-expanded").addClass("menu-collapsed").delay(1e3).queue(function(){$(".sub").css({display:"none"})})}n(),$(".menu-mobile").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),function(){menu.hasClass("menu-expanded")?(menubutton.removeClass("close"),n()):(menubutton.addClass("close"),menu.addClass("menu-expanded").removeClass("menu-collapsed"));$(".close").length?$(".menu-mobile a").html("Close"):$(".menu-mobile a").html("Menu")}(),$(document).on("click",function(e){e.preventDefault(),e.stopPropagation(),"menu-mobile"!=e.target.className&&n()})}),$(".menu a").off("click").on("click",function(e){return e.stopImmediatePropagation(),!0}),$(".has-sub").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation();var n=$(this).find(".sub");$(".sub").not(n).css({display:"none"}),n.css({display:"block"})})}(),$("nav.menu.swiper-container").length||$("nav.menu").addClass("swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android").children().addClass("swiper-wrapper").children().addClass("swiper-slide swiper-slide-active"),o.insertAfter(".content .card:nth-child(1)")):($("#menu-button").length&&($(".menu").removeClass("menu-collapsed menu-expanded"),menubutton.removeClass("close"),$("#menu-button").detach()),$(".menu li").hover(function(){$(this).find(".sub").stop().slideDown(200)},function(){$(this).find(".sub").stop().slideUp(200)}),console.log("desktop"),$("nav.menu").removeClass("swiper-container swiper-container-horizontal swiper-container-ios swiper-container-android").children().removeClass("swiper-wrapper").children().removeClass("swiper-slide swiper-slide-active"),o.appendTo("main.profile .wrapper > *:nth-child(3) > .wrapper"))}e(),$(window).on("load resize",function(){window.responsive,clearTimeout(window.responsive),window.responsive=setTimeout(function(){e(),console.log("oy")},0)});var t=$(".tooltip");if(t.each(function(){$(this).data("title",$(this).attr("title")),$(this).removeAttr("title")}),t.on("mouseenter",function(e){e.stopImmediatePropagation(),$(this).after('<div class="tooltip-content">'+$(this).data("title")+"</div>");var n=t.find(".tooltip-content"),o=$(this).find(n);n.not(o).remove()}),t.on("mouseleave",function(){$(".tooltip-content").remove()}),t.on("mouseleave",function(){$(".tooltip-content").remove()}),$("#detail").length){$(".image img").each(function(){var e=$(this).offset().top;$(this).data("orig-offset",e)}),$(window).on("scroll",function(){var o=window.pageYOffset||document.documentElement.scrollTop;$(".image img").each(function(){var e=$(this).data("orig-offset");if(e<=o){var n=(o-e)/$(window).height()*100;console.log(n),$(this).css({transform:"translate3d(0,"+n+"%, 0)"})}})}),$(window).on("load",function(){n.swiper.create(".tabs-swipeable-wrap.swiper-container",{})});var i=$("#comment"),a=$("#comment textarea"),s=$("form .username"),l=$("form .username h2");l.html("Sampaikan sesuatu..."),a.on("focus",function(){i.addClass("active"),l.html(l.attr("data-user")),$(".typing").length?s.removeClass("typing"):s.addClass("typing")}).on("blur",function(){l.html("Sampaikan sesuatu..."),s.removeClass("typing"),i.removeClass("active")})}var r=$(".toolbar.user.active"),c=$(".sign");r.length?console.log("logged"):(console.log("login"),$("header nav .button.default").on("click",function(e){console.log("popup"),e.stopImmediatePropagation(),c.addClass("active"),$(document).on("click",function(e){$(e.target).closest(c).length?console.log("di dalam"):c.removeClass("active")})}));$(window).on("load",function(){setTimeout(function(){console.log("hi!")},5e3)})});