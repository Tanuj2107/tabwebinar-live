$(".full-slider").slick({dots:!0,autoplay:!1,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,navigation:!0,adaptiveHeight:!0,infinite:!0});var slickoptions={rows:1,dots:!0,appendDots:$(".slick-nav"),appendArrows:$(".slick-nav"),accessibility:!0,speed:300,slidesToShow:3,slidesToScroll:3,infinite:!1,responsive:[{breakpoint:991,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:768,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:575,settings:{slidesPerRow:1,slidesToScroll:1,slidesToShow:1,dots:!0}}]};$(document).ready(function(){$(".avil-webinars-slider").slick(slickoptions);function s(i,e){this.object=i,this.item=e,this.filterFunc=function(){$(".active").removeClass("active"),$('.js-filter[data-filter="'+this.item+'"]').addClass("active");var i=t.filter(this.item);o.css({opacity:"0",left:"50px"}),setTimeout(function(){o.slick("unslick").empty().append(i).slick(slickoptions).css({opacity:"100",left:"0px"})},600)}}var o=$(".avil-webinars-slider"),t=$(".avil-webinars-slider-wrapper .slick-slide > div > *").clone();$("js-filter");function i(){$(".magicBorder").css({width:$("nav.header_nav > ul > li:first-child").width()+40,left:$("nav.header_nav > ul > li:first-child").position().left}),$("nav.header_nav > ul > li:not(.no-magic)").hover(function(){var i=$(this).width()+40,e=$(this).position().left;$(".magicBorder").css({width:i,left:e})},function(){$(".magicBorder").css({width:$("nav.header_nav > ul > li:first-child").width()+40,left:$("nav.header_nav > ul > li:first-child").position().left})})}function e(){$(".selected-cat").length<1&&$(".no-selected-val").show()}jQuery(".js-filter").on("click",function(i){var e=jQuery(this).attr("data-filter");new s(this,e).filterFunc()}),$(".speakers_gallery").slick({dots:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:3,slidesToScroll:1,navigation:!0,infinite:!0,responsive:[{breakpoint:991,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:768,settings:{slidesToScroll:1,slidesToShow:2,dots:!0}},{breakpoint:575,settings:{slidesPerRow:1,slidesToScroll:1,slidesToShow:1,dots:!0}}]}),$(".hamburger_icon").click(function(){$("#header_nav").slideToggle(300)}),$(".search-icon").click(function(i){i.stopPropagation(),$("body").addClass("search-show"),$(".search-wrapper input#search").focus()}),$("body").click(function(){$("body").removeClass("search-show")}),$(".search-wrapper").detach().appendTo("body"),$(".search-wrapper form").click(function(i){i.stopPropagation()}),$(window).scroll(function(){100<$(window).scrollTop()&&$("body").removeClass("search-show")}),$(".sidebar-filter-btn").click(function(i){i.preventDefault(),$("body").addClass("filter-show")}),$(".close-sidebar").click(function(i){i.preventDefault(),$("body").removeClass("filter-show")}),$(".short-btn").click(function(){$(this).toggleClass("active"),$(this).next("ul").fadeToggle(200)}),$("nav.header_nav > ul").append('<div class="magicBorder"></div>'),$(".topic-filter ul").append('<div class="magicBorderClick"></div>'),$(document).ready(function(){i()}),$(window).on("resize",i),$(".remove-cat").click(function(){$(this).parent().remove()}),e(),$(".remove-cat").click(function(){e()})});