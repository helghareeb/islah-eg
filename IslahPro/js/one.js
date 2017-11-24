/*jslint plusplus: true*/
/* global console, alert*/


/********************* Owl carousel ******************/

$("#mainSlider").owlCarousel({
	items:1,
	loop:true,
	autoplay:false,
	responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$("#newsSlider").owlCarousel({
    items:4,
    loop:true,
    autoplay:false,
    autoplayHoverPause:true,
	nav:true,
    navText: [
        "<i class='icon icon-arrow-left'></i>",
        "<i class='icon icon-arrow-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
$("#videoSlider").owlCarousel({
    items:4,
    loop:true,
    autoplay:false,
    nav:true,
    navText: [
        "<i class='icon icon-arrow-left'></i>",
        "<i class='icon icon-arrow-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


var sliderItems = document.getElementsByClassName('itemX'),
	navMenu = document.getElementById('navAnim'),
	navMenuHeight = navMenu.clientHeight,
	navBrand = document.getElementById('brand'),
    navToggle = document.getElementById('navToggle'),
	mMenu = 0,
	i;

for (i = 0; i <sliderItems.length; i++) {
		sliderItems[i].style.height = window.innerHeight + 'px';
	}
window.addEventListener('resize', function () {
	'use strict';
	for (i = 0; i <sliderItems.length; i++) {
		sliderItems[i].style.height = window.innerHeight + 'px';
	}
}, false);


/************************* Menu *************************/
function navScroll() {
	'use strict';
	var scrollNow = window.pageYOffset;
	if (scrollNow > navMenuHeight) {
		navMenu.style.backgroundColor = '#fffefc';
		navMenu.style.marginTop = '0px';
		navMenu.style.boxShadow = '0px 2px 2px 0px rgba(0, 0, 0, 0.08)';
		navBrand.style.margin = '12px 0px 12px 40px';
		navBrand.style.width = '29px';
		navBrand.style.height = '36px';
		if (scrollNow > mMenu) {
			navMenu.classList.add('menuOut');
			navMenu.classList.remove('menuIn');
		} else {
			navMenu.classList.add('menuIn');
			navMenu.classList.remove('menuOut');
		}
		mMenu = scrollNow;
	} else {
		navMenu.style.backgroundColor = 'transparent';
		navMenu.style.marginTop = '60px';
		navMenu.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)';
		navBrand.style.margin = '12px 0px 12px 40px';
		navBrand.style.width = '32px';
		navBrand.style.height = '40px';
		}
}
window.addEventListener('scroll', navScroll, false);

navToggle.addEventListener('click', function () {
	'use strict';
	this.classList.toggle('butAct');
}, false);


console.log(navToggle);




