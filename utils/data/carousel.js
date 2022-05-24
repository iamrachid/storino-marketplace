export const baseSlider4 = {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    }
}

export const baseSlider8 = {
    slidesPerView: 3,
    pagination: {
        el: '.swiper-dots',
        clickable: true
    },
    breakpoints: {
        575: {
            slidesPerView: 1
        },
        767: {
            slidesPerView: 2
        }
    }
}

export const baseSlider13 = {
    slidesPerView: 4,
    spaceBetween: 10,
    direction: 'vertical',
    slideToClickedSlide: true,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    },
    breakpoints: {
        991: {
            direction: 'horizontal',
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 3.2,
            direction: 'vertical'
        },
        1050: {
            slidesPerView: 3.3,
            direction: 'vertical'
        },
        1100: {
            slidesPerView: 3.5,
            direction: 'vertical'
        },
        1199: {
            slidesPerView: 3.9,
            direction: 'vertical'
        },
        1400: {
            slidesPerView: 4,
            direction: 'vertical'
        }
    }
}

export const baseSlider16 = {
    slidesPerView: 6,
    loop: true,
    breakpoints: {
        575: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        },
        1199: {
            slidesPerView: 5
        }
    }
}

export const baseSlider17 = {
    slidesPerView: 4,
    pagination: {
        el: '.swiper-dots',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
}

export const baseSlider18 = {
    slidesPerView: 4,
    pagination: false,
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    },
    spaceBetween: 10
}

// home
export const introSlider = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-dots',
        clickable: true
    }
}

export const serviceSlider = {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        575: {
            slidesPerView: 1
        },
        767: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
}

export const bannerSlider = {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-dots',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 1
        }
    }
}

export const relatedSlider = {
    slidesPerView: 4,
    spaceBetween: 1,
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
}