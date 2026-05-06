var fn;

fn = {

    adjustNavigitionModalContents: function(mediaQuery) {
        if (mediaQuery.matches) {
            // console.log('991 down');
            jQuery('[role-div=nav-modal-tier-menus]').detach().insertAfter('[role-div=nav-modal-topbar]');
            jQuery('[role-div=nav-modal-small-nav]').detach().insertAfter('[role-div=nav-modal-tier-menus]');
            jQuery('[role-div=nav-modal-four-buttons]').detach().insertAfter('[role-div=nav-modal-small-nav]');
            jQuery('[role-div=nav-modal-news-pill]').detach().insertAfter('[role-div=nav-modal-four-buttons]');
        } else {
            // console.log('992 up');
            // jQuery('[role-div=nav-modal-tier-menus]').detach().appendTo('[role-div=full-style-nav-modal-left]');
            // jQuery('[role-div=nav-modal-small-nav]').detach().appendTo('[role-div=full-style-nav-modal-left]');
            // jQuery('[role-div=nav-modal-news-pill]').detach().appendTo('[role-div=full-style-nav-modal-right]');

            // jQuery('[role-div=nav-modal-four-buttons]').detach().insertAfter('[role-div=full-style-nav-modal]');
        }
    },
    adjustQuotesSlider: function(mediaQuery) {
        if (mediaQuery.matches) { // If media query matches
            jQuery('.quotes-slider-controllers-progress-control').detach().appendTo('.quotes-slider-controllers');

            let controllerHeight = jQuery('.quotes-slider-controllers').outerHeight();
            let quotesLeftCol = jQuery('.module-content-block-quotes-col-left').outerHeight();
            let newQuotesLeftColMarginTop = quotesLeftCol + 120;
            //console.log('newQuotesLeftColMarginTop: ' + newQuotesLeftColMarginTop);

            jQuery('.module-content-block-quotes-col-right').css('margin-top', controllerHeight + 'px');
            jQuery('.quotes-slider-controllers').css('margin-top', newQuotesLeftColMarginTop + 'px');
        } else {
            jQuery('.quotes-slider-controllers-progress-control').detach().prependTo('.quotes-slider-controllers');

            jQuery('.module-content-block-quotes-col-right').css('margin-top', '0px');
            jQuery('.quotes-slider-controllers').css('margin-top', '40px');
        }
    },
    adjustMediaCarouselSlider: function(mediaQuery) {
        if (mediaQuery.matches) {
            let mediaImage = jQuery('.module-content-block-media-carousel-image').outerHeight();
            let mediaImageNewTop = mediaImage + 20;
            let dotsWidth = jQuery('.module-content-block-media-carousel-slider .slick-dots').width();

            jQuery('.module-content-block-media-carousel-slider .slick-dots').css('top', mediaImageNewTop + 'px');
            jQuery('.module-content-block-media-carousel .module-content-block-media-carousel-slider-controller').css({ 'top': mediaImageNewTop + 'px', 'left': dotsWidth + 'px', 'margin': '1% 0px 0px 0px' });
        } else {
            jQuery('.module-content-block-media-carousel-slider .slick-dots').css('top', '31%');
            jQuery('.module-content-block-media-carousel .module-content-block-media-carousel-slider-controller').css({ 'top': '38%', 'left': 'unset', 'margin': '0' });

        }
    },
    adjustTFASlider: function(mediaQuery) {
        if (mediaQuery.matches) {
            //jQuery('.module-content-block-tfa-top-block').detach().appendTo('.tfa-slider-with-accordion');
        } else {
            // jQuery('.module-content-block-tfa-top-block').detach().appendTo('.module-content-block-tfa-top-block-holder');
        }
    },
    changeFormDropdownArrow: function() {
        // remove the old svg icon
        let oldDropdownArrow = jQuery('.module-content-block-form-field .vs__actions svg');
        oldDropdownArrow.remove();

        // add the new svg icon
        let newDropdownArrow = jQuery('.module-content-block-form-field .vs__actions');
        newDropdownArrow.append('<svg xmlns="http://www.w3.org/2000/svg" width="19.762" height="19.762" viewBox="0 0 19.762 19.762"><path d="M0,0H12.974V12.974" transform="translate(9.174 0.707) rotate(45)" fill="none" stroke="#fff" stroke-width="2"/></svg>');
    },
    addRoleAttr: function() {
        let ulRoleSlickDots = jQuery('ul.slick-dots');
        let ulRoleSlickDotsLI = jQuery('ul.slick-dots li');

        // ulRoleSlickDots.attr('role', 'tablist');
        // ulRoleSlickDotsLI.attr('role', 'tab');


        // MEDIA CAROUSEL
        let removeUnwantedAriaMC = jQuery('.module-content-block-media-carousel-slide');
        removeUnwantedAriaMC.each(function() {
            jQuery(this).removeAttr('aria-describedby');
        });

        // TFA SLIDER
        let removeUnwantedAriaTFA = jQuery('.module-content-block-tfa-slide');
        removeUnwantedAriaTFA.each(function() {
            jQuery(this).removeAttr('aria-describedby');
        });

    },
    adjustItemsHeight: function() {
        let quotesNavThumbHeight = jQuery('.module-content-block-quotes-slider-nav .slick-slide').outerHeight();
        let quotesNavThumbOverlay = jQuery('.module-content-block-quotes-slider-nav-slide .overlay');

        let newThumbOverlayHeight = quotesNavThumbHeight + 1; // 7px margin top bottom
        // let newThumbOverlayHeight = quotesNavThumbHeight + 14; // 7px margin top bottom

        // quotesNavThumbOverlay.each(function() {
        //     jQuery(this).css({ 'height': newThumbOverlayHeight + 'px' });
        // });

        let minWidth1441 = window.matchMedia("(min-width: 1441px)");

        if (minWidth1441.matches) {
            quotesNavThumbOverlay.css({ 'height': newThumbOverlayHeight + 'px' });
        } else {
            quotesNavThumbOverlay.css({ 'height': '101%' });
        }


    },
    addSmallDiamondsBgToSlider: function(mediaQuery) {
        if (mediaQuery.matches) {
            jQuery('.module-content-block-tfa-slider-contents-left').prepend('<div class="module-content-block-tfa-slider-contents-left-diamonds-bg"></div>');
        } else {
            jQuery('.module-content-block-tfa-slider-contents-left-diamonds-bg').remove();
        }

    },
    defaultFirstTierMenus: function(currentItem) {
        // default of first tier
        let firstTierMenuItems = jQuery('[role-button=first-tier-menu-item]');

        firstTierMenuItems.each(function() {
            jQuery(this).removeAttr('tier-menu-open');

            let firstTierMenuIcon = jQuery(this).children().first().children().first();
            firstTierMenuIcon.attr('src', firstTierMenuIcon.attr('role-img-menu-open'));

            firstTierMenuIcon.removeAttr('role-button');
        });

        // enabled controls
        jQuery('[role-button=first-tier-menu-item]').parent().removeClass('muted-control');
        let rightSectionFullNavModalSecondtier = jQuery('.full-style-nav-modal-right .tm-second-tier');
        rightSectionFullNavModalSecondtier.removeClass('show animate__fadeInUp');
        // rightSectionFullNavModalSecondtier.detach().insertAfter(currentItem);
        jQuery('[role-div=nav-modal-news-pill]').removeClass('muted');



        // reset first tier
        jQuery('[role-button=first-tier-menu-item]').next().removeClass('hide');
        jQuery('[role-button=first-tier-menu-item]').next().removeClass('show animate__fadeInUp');


    },
    defaultSecondTierMenus: function() {
        // default of second tier
        let secondTierMenuItems = jQuery('[role-button=second-tier-menu-item]');

        secondTierMenuItems.each(function() {
            jQuery(this).removeAttr('tier-menu-open');

            let secondTierMenuIcon = jQuery(this).children().first().next().children().first();
            secondTierMenuIcon.attr('src', secondTierMenuIcon.attr('role-img-menu-open'));

            secondTierMenuIcon.removeAttr('role-button');
        });

        // enabled controls
        jQuery('[role-button=second-tier-menu-item]').parent().removeClass('muted-control');

        // enabled summary block
        jQuery('[role-button=second-tier-menu-item]').parent().parent().prev().removeClass('muted-control');

        // reset third tier
        jQuery('[role-button=second-tier-menu-item]').next().removeClass('hide');
        jQuery('[role-button=second-tier-menu-item]').next().removeClass('show animate__fadeInUp');
    },
    adjustBrandMomentBg: function(mediaQuery) {
        let brandMomentDiv = jQuery('[role-div=brand-moment]');

        brandMomentDiv.each(function() {
            const roleBgMobile = jQuery(this).attr('role-bg-mobile')

            if (mediaQuery.matches && roleBgMobile) {
                jQuery(this).css('background-image', 'url(' + roleBgMobile + ')');
            } else {
                jQuery(this).css('background-image', 'url(' + jQuery(this).attr('role-bg-desktop') + ')');
            }
        });

    },
    customPeopleGroupDivSearchCounselor: function() {
        var searchInput = document.getElementById('people-group-counselors');
        text_filter = searchInput.value.toUpperCase();
        divList = jQuery('.peoplegroup-counselor-item');

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < divList.length; i++) {
            td0 = divList[i].getAttribute('data-content');
            if (td0) {
                if (td0.toUpperCase().indexOf(text_filter) > -1) {
                    divList[i].style.display = "";
                    jQuery('.peoplegroup-counselor-list').removeClass('people-group-search-results-rearrange');
                } else {
                    divList[i].style.display = "none";
                    jQuery('.peoplegroup-counselor-list').addClass('people-group-search-results-rearrange');
                }
            }
        }

    },
    customPeopleGroupDivSearchAbassador: function() {
        var searchInput = document.getElementById('people-group-ambassadors');
        text_filter = searchInput.value.toUpperCase();
        divList = jQuery('.peoplegroup-ambassador-item');

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < divList.length; i++) {
            td0 = divList[i].getAttribute('data-content');
            if (td0) {
                if (td0.toUpperCase().indexOf(text_filter) > -1) {
                    divList[i].style.display = "";
                    jQuery('.peoplegroup-ambassador-list').removeClass('people-group-search-results-rearrange');
                } else {
                    divList[i].style.display = "none";
                    jQuery('.peoplegroup-ambassador-list').addClass('people-group-search-results-rearrange');
                }
            }
        }

    },
    overrideIframCSS: function() {
        console.log('overrideIframCSS');
        jQuery(".taggbox-container iframe").on("load", function() {
            let iframe_id = jQuery(".taggbox-container iframe");
            console.log(iframe_id[0]['id']);
            //console.log(iframe_id.contents());

            //let iframe_contents = jQuery("#" + iframe_id[0]['id']);
            //console.log(iframe_contents);


            // let head = jQuery("#iframe_id").contents().find("head");
            // let css = '<style> body { background: red; } .postContentCard {display: none;} </style>';
            // jQuery(head).append(css);
        });
    },
    a360Updates: function() {
        //console.log('A360 running!');

        // media gallery
        let media_gallery = jQuery('.module-content-block-media-gallery-slider .slick-dots li');
        media_gallery.each(function(counter = 0) {
            jQuery(this).attr('role', 'button');

            jQuery(this).prepend('<span class="sr-only">Go to slide ' + (counter + 1) + '</span>');
            jQuery(this).children('button').attr('aria-hidden', true);
        });

        // media carousel
        let media_carousel = jQuery('.module-content-block-media-carousel-slider .slick-dots li');
        media_carousel.each(function(counter = 0) {
            if (jQuery(this).attr('class') != "media-carousel-nav-arrow") {
                jQuery(this).attr('role', 'button');
                jQuery(this).attr('tabindex', '0');
                jQuery(this).prepend('<span class="sr-only">Go to slide ' + (counter + 1) + '</span>');
            } else {
                jQuery(this).removeAttr('role');
            }
        });

        // quotes slider
        let quotes_slider_nav = jQuery('.module-content-block-quotes-slider-nav .slick-track .module-content-block-quotes-slider-nav-slide');
        quotes_slider_nav.each(function() {
            jQuery(this).attr('role', 'button');
        });

        // add default aria-current="true" to slick dot
        jQuery('.slick-dots').find('li.slick-active').attr('aria-current', 'true');

        // all slider with slick-dots class
        jQuery('.slick-dots li').each(function() {
            jQuery(this).attr('role-button', 'slick-dot');
            jQuery(this).children('a.dot').attr('aria-hidden', true);
        });

        // quotes slider
        jQuery('.module-content-block-quotes-slider-nav .slick-prev').text('').append('<span class="sr-only">Previous slide</span>');
        jQuery('.module-content-block-quotes-slider-nav .slick-next').text('').append('<span class="sr-only">Next slide</span>');

        // media carousel
        jQuery('.module-content-block-media-carousel-slider .slick-dots .module-content-block-slider-control-btn-prev').text('').append('<span class="sr-only">Previous slide</span>');
        jQuery('.module-content-block-media-carousel-slider .slick-dots .module-content-block-slider-control-btn-next').text('').append('<span class="sr-only">Next slide</span>');


        // tfa slider
        jQuery('.slick-dots .tfa-nav-arrow .module-content-block-tfa-slider-control-btn-prev').text('').append('<span class="sr-only">Previous slide</span>');
        jQuery('.slick-dots .tfa-nav-arrow .module-content-block-tfa-slider-control-btn-next').text('').append('<span class="sr-only">Next slide</span>');


        let tfa_slider = jQuery('.module-content-block-tfa-slider .slick-dots li');
        tfa_slider.each(function(counter = 0) {
            jQuery(this).attr('role', 'button');

            if (jQuery(this).attr('class') == "tfa-nav-arrow") {
                jQuery(this).removeAttr('role');
            }

            if (jQuery(this).attr('class') !== "tfa-nav-arrow") {
                // console.log(jQuery(this).attr('class'));
                jQuery(this).attr('tabindex', '0');
                jQuery(this).prepend('<span class="sr-only">Go to slide ' + (counter + 1) + '</span>');
            }
        });

        let tfa_slider_top = jQuery('.module-content-block-tfa-slider-top-dots .slick-dots li');
        tfa_slider_top.each(function(counter = 0) {
            jQuery(this).attr('role', 'button');

            if (jQuery(this).attr('class') == "tfa-nav-arrow") {
                jQuery(this).removeAttr('role');
            }

            if (jQuery(this).attr('class') !== "tfa-nav-arrow") {
                jQuery(this).attr('tabindex', '0');
                jQuery(this).prepend('<span class="sr-only">Go to slide ' + (counter + 1) + '</span>');
            }
        });





    },

    getSectionMenuV2Offset: () => {
        const sectionMenuV2 = document.querySelector('#section-menu-container > .section-menu-trigger');

        if (!sectionMenuV2) {
            return false;
        }

        const sectionMenuV2Offset = jQuery(sectionMenuV2).offset();

        return sectionMenuV2Offset.top;
    },

    adjustAdditionalItems: function() {
        let wysiwygBlock = jQuery('.module-content-block-wysiwyg');
        let wysiwygBlockUlLi = jQuery('.module-content-block-wysiwyg ul li');

        if (wysiwygBlockUlLi.children('strong').length > 0) {
            wysiwygBlock.addClass('module-content-block-wysiwyg-custom');
        }

        let wysiwygList = jQuery('.module-content-block-wysiwyg-content ul');
        wysiwygList.each(function() {
            let wysiwygListCount = jQuery(this).children().length;
            if (wysiwygListCount == 1) {
                jQuery(this).addClass('full-width-uls');
            }
        });

        // remove empty p tag
        jQuery('.module-content-block-wysiwyg-content p').each(function() {
            var $p = jQuery(this);
            if (jQuery(this).html().replace(/\s|&nbsp;/g, '').length === 0) {
                $p.remove();
            }
        });

        // custom wysiwyg block with blockquote fix
        let wysiwygBlockContent = jQuery('.module-content-block-wysiwyg .module-content-block-wysiwyg-content');

        wysiwygBlockContent.each(function() {
            let blockquoteItem = jQuery(this).find('blockquote');

            if (blockquoteItem.length > 0) {
                jQuery(this).addClass('module-content-block-wysiwyg-content-blockquote');
            }
        });

    },
    skipToMainContent: function() {
        let isSkipLink = jQuery('[role-action="skip-link"]').is(':focus');
        if (isSkipLink == true) {
            jQuery('html,body').animate({ scrollTop: jQuery('#main-content').offset().top }, 'slow');
        }
    },

    perspectiveModuleAddons: function() {
        let mainBottomButton = jQuery('[role-item="perspective-main-button"]');

        mainBottomButton.each(function() {
            jQuery(this).prev().css({ "bottom": "32px" });
        });

    },

    // slate form ID: e7a5ee15-07ec-47a8-a964-bcf4c4c7c332
    // page: https://www.furman.edu/admissions-aid/request-information/
    // Degree Type Block
    wpPageAmissionAidRequestInformation: function() {
        let slate_form = jQuery('#form_e7a5ee15-07ec-47a8-a964-bcf4c4c7c332_container');

        let slate_form_radio_option_1 = jQuery('#form_60628101-6407-4569-a5bb-d10557379f93_1');
        let slate_form_radio_option_2 = jQuery('#form_60628101-6407-4569-a5bb-d10557379f93_2');

        let submit_btn = slate_form.children().closest('div.form_action');
       
        if ((slate_form_radio_option_1.is(':checked') != true) && (slate_form_radio_option_1.is(':checked') != true)) {
            submit_btn.children().first().attr("disabled", true);
        }

        slate_form_radio_option_1.click(function() {
            submit_btn.children().first().removeAttr("disabled");
        });

        slate_form_radio_option_2.click(function() {
            submit_btn.children().first().removeAttr("disabled");
        });
        

    },

}


jQuery(document).ready(function() {

    jQuery('a.module-content-block-quotes-slider-nav-slide').each(function () {
        jQuery(this).click(function (e) {
            console.log('thumbnail clicked');
            e.preventDefault();
        });
    });

    fn.wpPageAmissionAidRequestInformation();

    jQuery('.module-content-block-form-fields .form_button_submit').on('click', function (e) {
        let formInputsWithErrors = jQuery(this).parent().prev().first('input[aria-invalid=true]');
        
        formInputsWithErrors.each(function (i) {
            if (i === 0) {
                jQuery(this).focus();
            }

            jQuery(this).attr('aria-invalid', 'true');
        })
    });

    //fn.overrideIframCSS();


    let pageModules = jQuery('body').attr('role-page');

    /** Banner */
    jQuery('[role-image=button]').hover(
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-hover'));
        },
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-default'));
        }
    );

    let iframeBannerVideo = jQuery('#banner-video');

    if (iframeBannerVideo && iframeBannerVideo.length > 0) {
        if (iframeBannerVideo.data('type') == 'vimeo') {
            var vimeoBannerVideoIFrame = document.getElementById('banner-video');
            var vimeoBannerPlayer = new Vimeo.Player(vimeoBannerVideoIFrame);
        }

        jQuery(".hero-banner-button-play").hide();
        jQuery(".hero-banner-button-pause").click(function() {

            jQuery(".hero-banner-button-pause").hide();
            jQuery(".hero-banner-button-play").show();

            if (iframeBannerVideo.data('type') == 'vimeo') {
                vimeoBannerPlayer.pause();
            } else {
                jQuery('#banner-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }
        });

        jQuery(".hero-banner-button-play").click(function() {

            jQuery(".hero-banner-button-pause").show();
            jQuery(".hero-banner-button-play").hide();

            if (iframeBannerVideo.data('type') == 'vimeo') {
                vimeoBannerPlayer.play();
            } else {
                jQuery('#banner-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }
        });
    }

    let uploadedBannerVideo = document.getElementById('uploaded-banner-video');

    if (uploadedBannerVideo) {
        jQuery(".hero-banner-button-play").hide();
        jQuery(".hero-banner-button-pause").click(function() {

            jQuery(".hero-banner-button-pause").hide();
            jQuery(".hero-banner-button-play").show();

            uploadedBannerVideo.pause();
        });

        jQuery(".hero-banner-button-play").click(function() {

            jQuery(".hero-banner-button-pause").show();
            jQuery(".hero-banner-button-play").hide();

            uploadedBannerVideo.play();
        });
    }
    /** End of Banner */

    // Uploaded Video
    let uploadedHeroVideo = document.getElementById('uploaded-hero-video');

    if (uploadedHeroVideo) {
        jQuery(".hero-banner-button-play").hide();
        jQuery(".hero-banner-button-pause").click(function() {
            jQuery(".hero-banner-button-pause").hide();
            jQuery(".hero-banner-button-play").show();

            uploadedHeroVideo.pause();
        });

        jQuery(".hero-banner-button-play").click(function() {
            jQuery(".hero-banner-button-pause").show();
            jQuery(".hero-banner-button-play").hide();

            uploadedHeroVideo.play();
        });
    }

    //here video banner
    //vimeo
    let iframeVideo = jQuery('#vimeo-video-bg').length;
    if (iframeVideo > 0) {
        let iframeVimeo = document.getElementById('vimeo-video-bg');
        let playerVimeo = new Vimeo.Player(iframeVimeo);

        jQuery(".hero-banner-button-play").hide();
        jQuery(".hero-banner-button-pause").click(function() {
            jQuery(".hero-banner-button-pause").hide();
            jQuery(".hero-banner-button-play").show();

            playerVimeo.pause();
        });

        jQuery(".hero-banner-button-play").click(function() {
            jQuery(".hero-banner-button-pause").show();
            jQuery(".hero-banner-button-play").hide();

            playerVimeo.play();
        });
    }


    // youtube
    let iframeYTVideo = jQuery('#youtube-video-bg').length;
    if (iframeYTVideo > 0) {

        jQuery(".hero-banner-button-play").hide();
        jQuery(".hero-banner-button-pause").click(function() {
            jQuery(".hero-banner-button-pause").hide();
            jQuery(".hero-banner-button-play").show();

            jQuery('#youtube-video-bg')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            //console.log('pause yt vid');
        });

        jQuery(".hero-banner-button-play").click(function() {
            jQuery(".hero-banner-button-pause").show();
            jQuery(".hero-banner-button-play").hide();

            jQuery('#youtube-video-bg')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            //console.log('play yt vid');
        });
    }


    //if (pageModules == 'modules') {

    var time = 5;
    var $bar,
      isPause,
      tick,
      percentTime;

    const quoteSliderNavSlidesToShow = 3;

    const quoteSliderLength = jQuery('.module-content-block-quotes-slider').children().length;

    if (quoteSliderLength <= quoteSliderNavSlidesToShow) {
      const quoteSliderContent = jQuery('.module-content-block-quotes-slider').html();
      jQuery('.module-content-block-quotes-slider').append(quoteSliderContent);
    }

    jQuery('.module-content-block-quotes-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.module-content-block-quotes-slider-nav'
    });

    jQuery('.module-content-block-quotes-slider').on('init', function (slick) {
      jQuery('a.module-content-block-quotes-slider-nav-slide').each(function () {
        jQuery(this).click(function (e) {
          e.preventDefault();
        });
      });
    });

    const quoteSliderNavLength = jQuery('.module-content-block-quotes-slider-nav').children().length;

    if (quoteSliderNavLength <= quoteSliderNavSlidesToShow) {
      const quoteSliderNavContent = jQuery('.module-content-block-quotes-slider-nav').html();
      jQuery('.module-content-block-quotes-slider-nav').append(quoteSliderNavContent);
    }

    jQuery('.module-content-block-quotes-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,
      infinite: true,
      dots: false,
      focusOnSelect: true,
      arrows: false,
      asNavFor: '.module-content-block-quotes-slider'
    });
    
    var $quotesCarousel = jQuery('.module-content-block-quotes-slider');
    var $quotesCarouselNav = jQuery('.module-content-block-quotes-slider-nav');
    
    $quotesCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      resetProgressbar();
      isPause = false;
  
      jQuery(slick.$slides[currentSlide]).removeAttr('aria-current');
      jQuery(slick.$slides[nextSlide]).attr('aria-current', 'true');
    })
    
    $quotesCarouselNav.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      jQuery(slick.$slides[currentSlide]).removeAttr('aria-current');
      console.log('jQuery(slick.$slides[nextSlide])', jQuery(slick.$slides[nextSlide]));
      jQuery(slick.$slides[nextSlide]).attr('aria-current', 'true');
    })

    jQuery('.module-content-block-quotes-slider-nav').prepend('<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>');
    jQuery('.module-content-block-quotes-slider-nav').append('<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>');

    jQuery('.module-content-block-quotes-slider-nav .slick-prev').click(function() {
      $quotesCarouselNav.slick('slickPrev');
    });

    jQuery('.module-content-block-quotes-slider-nav .slick-next').click(function() {
        $quotesCarouselNav.slick('slickNext');
    });


    $bar = jQuery('.quotes-slider-progress .progress');

    jQuery(".quotes-slider-button-play").show();
    jQuery(".quotes-slider-button-pause").hide();

    jQuery(".quotes-slider-button-pause").click(function() {
        isPause = true;
        jQuery(".quotes-slider-button-pause").hide();
        jQuery(".quotes-slider-button-play").show();
    });

    jQuery(".quotes-slider-button-play").click(function() {
        if (isPause == true) {
            isPause = false;
        } else {
            startProgressbar();
        }

        jQuery(".quotes-slider-button-pause").show();
        jQuery(".quotes-slider-button-play").hide();
    });

    jQuery('.module-content-block-quotes-slider-nav').on('click', '.slick-slide', function(e) {
        var $currTarget = jQuery(e.currentTarget),
            index = $currTarget.data('slick-index'),
            slickObj = jQuery('.module-content-block-quotes-slider').slick('getSlick');

        slickObj.slickGoTo(index);
        //startProgressbar();
        jQuery(".quotes-slider-button-pause").hide();
        jQuery(".quotes-slider-button-play").show();
    });

    jQuery('.module-content-block-quotes-slider-nav .slick-prev').click(function(e) {
        // startProgressbar();
        $quotesCarousel.slick('slickPrev');
        jQuery(".quotes-slider-button-pause").hide();
        jQuery(".quotes-slider-button-play").show();
    });

    jQuery('.module-content-block-quotes-slider-nav .slick-next').click(function(e) {
        // startProgressbar();
        $quotesCarousel.slick('slickNext');
        jQuery(".quotes-slider-button-pause").hide();
        jQuery(".quotes-slider-button-play").show();
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $quotesCarousel.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    // start the progress bar
    //startProgressbar();
    jQuery('.quotes-slider-button-play').click();


    jQuery('.media-gallery-slider-one').on('init', function(event, slick) {
        //console.log("initialized -- media-gallery-slider-one")
        jQuery(slick.$slides[0]).attr('aria-current', 'true');

    });

    jQuery('.media-gallery-slider-one').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        jQuery(slick.$slides[currentSlide]).removeAttr('aria-current');
        jQuery(slick.$slides[nextSlide]).attr('aria-current', 'true');
    });


    jQuery('.media-gallery-slider-one').each(function() {
        jQuery(this).slick({
            dots: true,
            infinite: true,
            speed: 300,
            accessibility: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '170px',
            appendArrows: jQuery(this).next('.media-gallery-slider-one-arrows'),
            prevArrow: '<div class="media-gallery-slider-prev-arrow-holder"><button type="button" class="slick-prev">Previous</button></div>',
            nextArrow: '<div class="media-gallery-slider-next-arrow-holder"><button type="button" class="slick-next">Next</button></div>',
            responsive: [{
                    breakpoint: 960,
                    settings: {
                        centerPadding: '10px',
                    }
                },

            ]
        });

        /* #263 */
        jQuery(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            let slideDirection = nextSlide > currentSlide

            if (slideDirection && nextSlide < 3) {
                return false
            }

            if (!slideDirection && (slick.slideCount - nextSlide) < 4) {
                return false
            }

            jQuery(this).find('.slick-dots').animate({
                scrollLeft: ((nextSlide - 2) * 36)
            }, 500);
        });
        /* !#263 */
    })

    jQuery('.media-gallery-slider-two').on('init', function(event, slick) {
        //console.log("initialized")
        jQuery(slick.$slides[0]).attr('aria-current', 'true');
        jQuery(slick.$slides[0]).find('a').each(function () {
            jQuery(this).removeAttr('tabindex');
        });

        let slickDots = jQuery(this).children('.slick-dots').first();
        slickDots.insertAfter(jQuery(this).next('.media-gallery-slider-two-arrows'));
    });

    jQuery('.media-gallery-slider-two').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        jQuery(slick.$slides[currentSlide]).removeAttr('aria-current');
        jQuery(slick.$slides[nextSlide]).attr('aria-current', 'true');

        jQuery(slick.$slides[currentSlide]).find('a').each(function () {
            jQuery(this).attr('tabindex', '-1');
        });

        jQuery(slick.$slides[nextSlide]).find('a').each(function () {
            jQuery(this).removeAttr('tabindex');
        })
    });

//     jQuery('.media-gallery-slider-two').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         accessibility: false,
//         slidesToShow: 1,
//         centerMode: true,
//         centerPadding: '170px',
//         appendArrows: jQuery(this).next('.media-gallery-slider-two-arrows'),
//         prevArrow: '<div class="media-gallery-slider-prev-arrow-holder"><button type="button" class="slick-prev">Previous</button></div>',
//         nextArrow: '<div class="media-gallery-slider-next-arrow-holder"><button type="button" class="slick-next">Next</button></div>',
//         responsive: [{
//                 breakpoint: 960,
//                 settings: {
//                     centerPadding: '10px',
//                 }
//             },
// 
//         ]
//     });
    jQuery('.media-gallery-slider-two').each(function() {
      var $slider = jQuery(this);
      var $arrowContainer = $slider.next('.media-gallery-slider-two-arrows');
      $slider.slick({
        dots: true,
        infinite: true,
        speed: 300,
        accessibility: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '170px',
        appendArrows: $arrowContainer,
        prevArrow: '<div class="media-gallery-slider-prev-arrow-holder"><button type="button" class="slick-prev">Previous</button></div>',
        nextArrow: '<div class="media-gallery-slider-next-arrow-holder"><button type="button" class="slick-next">Next</button></div>',
        responsive: [{
          breakpoint: 960,
          settings: {
            centerPadding: '10px',
          }
        }]
      });
    });
    
    jQuery('.media-gallery-slider-three').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '170px',
        appendArrows: '.media-gallery-slider-three-arrows',
        prevArrow: '<div class="media-gallery-slider-prev-arrow-holder"><button type="button" class="slick-prev">Previous</button></div>',
        nextArrow: '<div class="media-gallery-slider-next-arrow-holder"><button type="button" class="slick-next">Next</button></div>',
        responsive: [{
                breakpoint: 960,
                settings: {
                    centerPadding: '10px',
                }
            },

        ]
    });

    // media carousel module
    var $mediaCarouselSlider = jQuery('.module-content-block-media-carousel-slider');

    jQuery('.module-content-block-media-carousel-slider').slick({
        infinite: true,
        speed: 300,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        nextArrow: '',
        prevArrow: '',
        customPaging: function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<a class="dot" aria-hidden="true">' + (i + 1) + '</a>';
        },
    });

    // jQuery('.module-content-block-media-carousel-slider .slick-dots').append('<li class="media-carousel-nav-arrow"><button class="module-content-block-slider-control-btn module-content-block-slider-control-btn-prev">Prev</button></li>');
    // jQuery('.module-content-block-media-carousel-slider .slick-dots').append('<li class="media-carousel-nav-arrow"><button class="module-content-block-slider-control-btn module-content-block-slider-control-btn-next">Next</button></li>');


    // jQuery('.module-content-block-media-carousel-slider .slick-dots .module-content-block-slider-control-btn-prev').click(function() {
    //     $mediaCarouselSlider.slick('slickPrev');
    // });

    // jQuery('.module-content-block-media-carousel-slider .slick-dots .module-content-block-slider-control-btn-next').click(function() {
    //     $mediaCarouselSlider.slick('slickNext');
    // });

    /* #373 */
    jQuery('.module-content-block-media-carousel-slider .slick-dots').wrap('<div class="slick-controls"><div class="slick-pagination"></div></div>');

    jQuery('.module-content-block-media-carousel-slider .slick-controls').prepend('<button class="module-content-block-slider-control-btn module-content-block-slider-control-btn-prev">Prev</button>');
    jQuery('.module-content-block-media-carousel-slider .slick-controls').append('<button class="module-content-block-slider-control-btn module-content-block-slider-control-btn-next">Next</button>');

    jQuery('.module-content-block-media-carousel-slider .module-content-block-slider-control-btn-prev').click(function() {
        $mediaCarouselSlider.slick('slickPrev');
    });

    jQuery('.module-content-block-media-carousel-slider .module-content-block-slider-control-btn-next').click(function() {
        $mediaCarouselSlider.slick('slickNext');
    });

    jQuery('.module-content-block-media-carousel-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        let slideDirection = nextSlide > currentSlide

        if (slideDirection && nextSlide < 3) {
            return false
        }

        if (!slideDirection && (slick.slideCount - nextSlide) < 3) {
            return false
        }

        jQuery(this).find('.slick-dots').animate({
            scrollLeft: ((nextSlide - 2) * 54)
        }, 500);
    });
    /* !#373 */

    // tfa slider module
    var $tfaSliderOne = jQuery('.module-content-block-tfa-slider-js-one');

    jQuery('.module-content-block-tfa-slider-js-one').slick({
        infinite: true,
        speed: 300,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        // nextArrow: '',
        // prevArrow: '',
        customPaging: function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<a class="dot" aria-hidden="true">' + (i + 1) + '</a>';
        },
    });


    jQuery('.module-content-block-tfa-slider-js-one .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-prev">Prev</button></li>');
    jQuery('.module-content-block-tfa-slider-js-one .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-next">Next</button></li>');


    jQuery('.module-content-block-tfa-slider-js-one .slick-dots .module-content-block-tfa-slider-control-btn-prev').click(function() {
        $tfaSliderOne.slick('slickPrev');
    });

    jQuery('.module-content-block-tfa-slider-js-one .slick-dots .module-content-block-tfa-slider-control-btn-next').click(function() {
        $tfaSliderOne.slick('slickNext');
    });

    // tfa slide 2
    var $tfaSliderTwo = jQuery('.module-content-block-tfa-slider-js-two');

    jQuery('.module-content-block-tfa-slider-js-two').slick({
        infinite: true,
        speed: 300,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        // nextArrow: '',
        // prevArrow: '',
        customPaging: function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<a class="dot" aria-hidden="true">' + (i + 1) + '</a>';
        },
    });


    jQuery('.module-content-block-tfa-slider-js-two .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-prev">Prev</button></li>');
    jQuery('.module-content-block-tfa-slider-js-two .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-next">Next</button></li>');


    jQuery('.module-content-block-tfa-slider-js-two .module-content-block-tfa-slider-control-btn-prev').click(function() {
        $tfaSliderTwo.slick('slickPrev');
    });

    jQuery('.module-content-block-tfa-slider-js-two .module-content-block-tfa-slider-control-btn-next').click(function() {
        $tfaSliderTwo.slick('slickNext');
    });

    // tfa slide 3
    var $tfaSliderThree = jQuery('.module-content-block-tfa-slider-js-three');

    jQuery('.module-content-block-tfa-slider-js-three').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        accessibility: false,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        // nextArrow: '',
        // prevArrow: '',
        appendDots: jQuery(".module-content-block-tfa-slider-top-dots"),
        customPaging: function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<a class="dot" aria-hidden="true">' + (i + 1) + '</a>';
        },
    });


    jQuery('.module-content-block-tfa-slider-top-dots .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-prev">Prev</button></li>');
    jQuery('.module-content-block-tfa-slider-top-dots .slick-dots').append('<li class="tfa-nav-arrow"><button class="module-content-block-tfa-slider-control-btn module-content-block-tfa-slider-control-btn-next">Next</button></li>');


    jQuery('.module-content-block-tfa-slider-top-dots .module-content-block-tfa-slider-control-btn-prev').click(function() {
        $tfaSliderThree.slick('slickPrev');
    });

    jQuery('.module-content-block-tfa-slider-top-dots .module-content-block-tfa-slider-control-btn-next').click(function() {
        $tfaSliderThree.slick('slickNext');
    });

    const  moduleContentBlockTfaSliderJsOneYearText = jQuery('.module-content-block-tfa-slider-js-one').attr('data-year-text');
    jQuery('<div class="tfa-nav-group"></div>').insertAfter('.module-content-block-tfa-slider-js-one .slick-list');
    jQuery('.module-content-block-tfa-slider-js-one .tfa-nav-group').prepend('<div class="tfa-nav-year"><span role="heading" aria-level="1"> ' + moduleContentBlockTfaSliderJsOneYearText + ' </span></div>');
    jQuery('.module-content-block-tfa-slider-js-one .slick-dots').detach().insertAfter('.module-content-block-tfa-slider-js-one .tfa-nav-year');

    const  moduleContentBlockTfaSliderJsTwoYearText = jQuery('.module-content-block-tfa-slider-js-two').attr('data-year-text');
    jQuery('<div class="tfa-nav-group"></div>').insertAfter('.module-content-block-tfa-slider-js-two .slick-list');
    jQuery('.module-content-block-tfa-slider-js-two .tfa-nav-group').prepend('<div class="tfa-nav-year"><span role="heading" aria-level="1"> ' + moduleContentBlockTfaSliderJsTwoYearText + ' </span></div>');
    jQuery('.module-content-block-tfa-slider-js-two .slick-dots').detach().insertAfter('.module-content-block-tfa-slider-js-two .tfa-nav-year');

    const  moduleContentBlockTfaSliderJsThreeYearText = jQuery('.module-content-block-tfa-slider-js-three').attr('data-year-text');
    jQuery('.module-content-block-tfa-slider-top-dots').prepend('<div class="tfa-nav-year"><span role="heading" aria-level="1"> ' + moduleContentBlockTfaSliderJsThreeYearText + ' </span></div>');


    // hero video slider
    var $heroImageSlider = jQuery('.hero-image-slider');

    jQuery('.hero-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        infinite: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        // variableWidth: true,
        // adaptiveHeight: true,
    });

    jQuery('.hero-image-slider-arrows').append('<li class="hvis-nav-arrow"><button class="module-hero-image-slider-control-btn-prev"><span class="sr-only">Previous slide</span></button></li>');
    jQuery('.hero-image-slider-arrows').append('<li class="hvis-nav-arrow"><button class="module-hero-image-slider-control-btn-next"><span class="sr-only">Next slide</span></button></li>');


    jQuery('.hero-image-slider-arrows .module-hero-image-slider-control-btn-prev').click(function() {
        $heroImageSlider.slick('slickPrev');
    });

    jQuery('.hero-image-slider-arrows .module-hero-image-slider-control-btn-next').click(function() {
        $heroImageSlider.slick('slickNext');
    });


    //} //end pagemodules

    // magnific popup

    jQuery('.popup-vid').addClass('no-scroll');

    jQuery('.popup-vid').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        fixedContentPos: true,
        focus: ".mfp-close",
        closeOnBgClick: false,
        enableEscapeKey: true,
        iframe: {
            markup: '<div class="mfp-iframe-scaler" role="dialog" aria-modal="true" aria-labelledby="heading" aria-label="video" tabindex="-1">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            patterns: {
              youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            
                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }
            
                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
            },
        },
        callbacks: {
            open: function() {
              jQuery('body').css("overflow-y", "hidden");
            },
            close: function() {
              jQuery('body').css("overflow-y", "auto");
            }
        },
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><span role-button="mfp-closer" aria-hidden="true">close</span</button>',
    });

    jQuery('.fullscreen-item').magnificPopup({
        type: 'image',
        focus: ".mfp-close",
        closeOnBgClick: false,
        enableEscapeKey: true,
        mainClass: 'mfp-fade',
        image: {
            markup: '<div class="mfp-figure" role="dialog" aria-modal="true" aria-labelledby="heading" aria-label="image" tabindex="-1">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>',
                titleSrc: 'title',
        },
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><span role-button="mfp-closer" aria-hidden="true">close</span</button>',
    });


    // accordion

    jQuery('.tfa-slider-content-accordion').collapse();


    // people group sortable search
    // fn.customPeopleGroupDivSearch('peoplegroup-one-list', 'people-group-counselors');
    // fn.customPeopleGroupDivSearch('peoplegroup-two-list', 'people-group-ambassador');




    // use javascript media queries instead of jQuery(window).width() for consistency accorss browsers
    // let maxWidth1100 = window.matchMedia("(max-width: 1100px)");
    // fn.adjustTFASlider(maxWidth1100);

    let maxWidth1100 = window.matchMedia("(max-width: 1100px)");
    fn.addSmallDiamondsBgToSlider(maxWidth1100);


    let maxWidth1070 = window.matchMedia("(max-width: 1070px)");
    fn.adjustMediaCarouselSlider(maxWidth1070);


    let maxWidth992 = window.matchMedia("(max-width: 992px)");
    fn.adjustQuotesSlider(maxWidth992);

    let maxWidth991 = window.matchMedia("(max-width: 991px)");
    fn.adjustNavigitionModalContents(maxWidth991);

    let maxWidth500 = window.matchMedia("(max-width: 500px)");
    fn.adjustBrandMomentBg(maxWidth500);


    // update form dropdown arrow
    fn.changeFormDropdownArrow();

    fn.addRoleAttr();

    fn.adjustItemsHeight();

    fn.a360Updates();

    fn.adjustAdditionalItems();

    fn.perspectiveModuleAddons();

    const initialSectionMenuOffset = fn.getSectionMenuV2Offset();

    if (initialSectionMenuOffset !== false) {
        jQuery('#section-menu-container').attr('data-initial-offset', initialSectionMenuOffset);
    }

    jQuery(document).on('keyup', function (e) {
        var keyCode = e.which || e.key;
        var activeElement = jQuery(document.activeElement);

        if ((keyCode === 40 || keyCode === 38) && activeElement.data('role') == 'dropdown-option') {
          var triggerElement = jQuery('#' + activeElement.data("trigger"));
          
          var activeDescendant = jQuery('#' + triggerElement.attr('aria-activedescendant'));

          if (activeDescendant) {
            activeDescendant.attr('aria-selected', 'false');
          }

          activeElement.attr('aria-selected', 'true');
          triggerElement.attr('aria-activedescendant', activeElement.attr('id'));
        }

        if (keyCode === 37 && activeElement.hasClass('advanced-tabs__nav-link')) {
            let prevTab = activeElement.parent().prev().children('a').first();

            if (prevTab) {
                prevTab.trigger('click');
                prevTab.focus();
            }
        }

        if (keyCode === 39 && activeElement.hasClass('advanced-tabs__nav-link')) {
            let nextTab = activeElement.parent().next().children('a').first();

            if (nextTab) {
                nextTab.trigger('click');
                nextTab.focus();
            }
        }
    });

    jQuery('.advanced-tabs__nav-link').on('focus', function (e) {
        let currentActiveTab = jQuery(e.target);

        currentActiveTab.parent().parent().find('a').attr('tabindex', '-1');
        currentActiveTab.parent().parent().find('a').attr('aria-selected', 'false');

        currentActiveTab.removeAttr('tabindex');
        currentActiveTab.attr('aria-selected', 'true');
    });
    
    jQuery('.program-list__dropdown').on('hide.bs.dropdown', function(e) {
        var activeDescendant = jQuery('#' + jQuery(this).children('.program-list-trigger').first().attr('aria-activedescendant'));
        
        if (!activeDescendant) {
            return false;
        }

        jQuery(this).children('.program-list-trigger').first().removeAttr('aria-activedescendant');
        activeDescendant.attr('aria-selected', 'false');
    });
    
    $quotesCarouselNav.on('afterChange', function(slick, currentSlide) {
      document.querySelectorAll('.module-content-block-quotes-slider-nav-slide:not(.slick-active)').forEach(element => {
        element.setAttribute('tabindex', '-1');
      });
      document.querySelectorAll('.module-content-block-quotes-slider-nav-slide.slick-active').forEach(element => {
        element.setAttribute('tabindex', '0');
      });
    })

});

jQuery(function() {
    // website URL
    let originURL = window.location.origin;

    // hover on main navigation brand
    jQuery('[role-image=main-brand]').hover(
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-hover'));
        },
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-default'));
        }
    );

    jQuery('[role-button=large-play-button]').hover(
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-hover'));
        },
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-default'));
        }
    );


    jQuery('[role-span=search-bar-icon] svg').hover(
        function() {
            jQuery('[role-span=search-bar-icon]').prev().addClass('custom-search-hover');
        },
        function() {
            jQuery('[role-span=search-bar-icon]').prev().removeClass('custom-search-hover');
        }
    );

    jQuery('[role-input=search-bar]').focusin(function() {
        jQuery('[role-span=search-bar-icon] svg').addClass("search-icon-to-hover");
    });

    jQuery('[role-input=search-bar]').focusout(function() {
        jQuery('[role-span=search-bar-icon] svg').removeClass("search-icon-to-hover");
    });


    let alertOnTop = jQuery('[role=alert]').is(":visible");
    let mainNavigation = jQuery('[role-area=main-navigation]');

    // adjust accordingly with the number of alerts
    if (alertOnTop) {
        let alertsCount = jQuery('[role="alert"]:not([class*="tribe"])').length;

        // if (alertsCount == 3) {
        //     mainNavigation.addClass('main-nav-with-three-alert');
        // } else if (alertsCount == 2) {
        //     mainNavigation.addClass('main-nav-with-two-alert');
        // } else if (alertsCount == 1) {
        //     mainNavigation.addClass('main-nav-top-spacer');
        // }
    }

    jQuery('[role-image=media-fullscreen]').hover(
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-hover'));
        },
        function() {
            jQuery(this).attr("src", jQuery(this).attr('role-img-default'));
        }
    );


});

jQuery(window).on('resize', function() {

    // let maxWidth1100 = window.matchMedia("(max-width: 1100px)");
    // fn.adjustTFASlider(maxWidth1100);

    let maxWidth1100 = window.matchMedia("(max-width: 1100px)");
    fn.addSmallDiamondsBgToSlider(maxWidth1100);

    let maxWidth1070 = window.matchMedia("(max-width: 1070px)");
    fn.adjustMediaCarouselSlider(maxWidth1070);

    let maxWidth992 = window.matchMedia("(max-width: 992px)");
    fn.adjustQuotesSlider(maxWidth992);

    let maxWidth991 = window.matchMedia("(max-width: 991px)");
    fn.adjustNavigitionModalContents(maxWidth991);

    let maxWidth500 = window.matchMedia("(max-width: 500px)");
    fn.adjustBrandMomentBg(maxWidth500);

    fn.adjustItemsHeight();



});



jQuery(document).on("scroll", function() {
    let mainNavigation = jQuery('[role-area=main-navigation]');
    let isMainNavLight = mainNavigation.hasClass('main-nav-light');
    let brandImg = jQuery('[role-image=main-brand]');

    const sectionMenuV2Container = jQuery('#section-menu-container');
    // let sectionMenuV2 = document.querySelector('#section-menu-container>.section-menu-trigger');
    // let sectionMenuV2Offset = sectionMenuV2.getBoundingClientRect();

    // sectionMenuV2Container.css({
    //     top: `${mainNavigation.height()}px`,
    //     margin: 0
    // });

    // if (mainNavigation.height() >= sectionMenuV2Offset.top && !sectionMenuV2Container.hasClass('fixed-to-top')) {
    //     sectionMenuV2Container.addClass('fixed-to-top');
    // } else if (mainNavigation.height() < sectionMenuV2Offset.top && sectionMenuV2Container.hasClass('fixed-to-top')) {
    //     sectionMenuV2Container.removeClass('fixed-to-top');
    // }
    if (sectionMenuV2Container) {
        let subtractor = mainNavigation.height();

        if (sectionMenuV2Container.hasClass('is-logged-in') && window.matchMedia('(max-width: 991px)') && window.matchMedia('(min-width: 601px)')) {
            subtractor += 36;
        }

        if (window.scrollY > (jQuery(sectionMenuV2Container).attr('data-initial-offset') - subtractor)) {
            let sectionMenuV2Wrapper = jQuery(sectionMenuV2Container).parent();
            let sectionMenuV2WrapperHeight = jQuery(sectionMenuV2Wrapper).height();

            jQuery(sectionMenuV2Wrapper).css({
                height: sectionMenuV2WrapperHeight
            });
            
            jQuery(sectionMenuV2Container).addClass('fixed-to-top');
        } else {
            jQuery(sectionMenuV2Container).removeClass('fixed-to-top');
        }
    }

    let alertsCount = jQuery('[role="alert"]:not([class*="tribe"]):visible').length;
    // if (window.scrollY > 2.5) {
    //     if (alertsCount == 3) {
    //         jQuery('#mainNav').removeClass('main-nav-with-three-alert');
    //     } else if (alertsCount == 2) {
    //         jQuery('#mainNav').removeClass('main-nav-with-two-alert');
    //     } else if (alertsCount == 1) {
    //         jQuery('#mainNav').removeClass('main-nav-top-spacer');
    //     }
    // } else {
    //     if (alertsCount == 3) {
    //         jQuery('#mainNav').addClass('main-nav-with-three-alert');
    //     } else if (alertsCount == 2) {
    //         jQuery('#mainNav').addClass('main-nav-with-two-alert');
    //     } else if (alertsCount == 1) {
    //         jQuery('#mainNav').addClass('main-nav-top-spacer');
    //     }
    // }

    if (window.scrollY > 39) {
        jQuery('#mainNav').addClass('main-nav-zero-top-margin');
    } else {
        jQuery('#mainNav').removeClass('main-nav-zero-top-margin');
    }

    // section menu stick to main nav
    let sectionMenuInCaptionBox = jQuery('[role-div=banner-button-holder]');
    let sectionMenu = jQuery('[role-div=sticky-section-menu-button-holder]');
    let sectionMenuBox = jQuery('[role-div=section-menu-box]');
    let sectionMenuSMAHeader = jQuery('[role-div=section-menu-sma-header]');

    if (sectionMenuInCaptionBox.length > 0) {
        offsetSectionMenuCaption = sectionMenuInCaptionBox.offset();
        sectionMenuInCaptionBoxY = offsetSectionMenuCaption.top - jQuery(window).scrollTop();

        let bannerCaptionBoxTop = sectionMenuInCaptionBox.offset().top;
        sectionMenuBox.css("top", bannerCaptionBoxTop + "px");

        if (sectionMenuInCaptionBoxY <= 80) {
            sectionMenu.show();
            sectionMenuBox.addClass('sticky-section-menu');

            sectionMenuInCaptionBox.addClass('sticky-section-menu-smaller-form');
            sectionMenuSMAHeader.addClass('sma-header-small-version');
        } else {
            sectionMenu.hide();
            sectionMenuBox.removeClass('sticky-section-menu');

            sectionMenuInCaptionBox.removeClass('sticky-section-menu-smaller-form');
            sectionMenuSMAHeader.removeClass('sma-header-small-version');
        }
    }

    // home banner element
    let homeBanner = jQuery('[role-div=home-banner]');
    let sectionMenuV2Wrapper = jQuery('[role-div=banner-caption]');
    let header = jQuery('header');

    if (window.scrollY > homeBanner.height() || window.scrollY + header.height() > sectionMenuV2Wrapper.offset().top) {
        // change to gray bg navbar
        /** @todo remove if confirmed working **/
        // if (isMainNavLight) {
        //     mainNavigation.addClass('main-navigation');
        //     brandImg.attr('src', '/wp-content/themes/furman/assets/img/academic-logo.svg');
        //     brandImg.attr('role-img-default', '/wp-content/themes/furman/assets/img/academic-logo.svg');
        //     brandImg.attr('role-img-hover', '/wp-content/themes/furman/assets/img/academic-logo-hover.svg');
        // }

        mainNavigation.addClass('fit-main-nav');

        //section menu
        sectionMenu.addClass('sticky-section-menu-button-holder-thin-menu-adjustment');

        sectionMenuBox.addClass('sticky-section-menu-thin-menu-adjustment');

        const sectionMenuV2Container = jQuery('#section-menu-container');

        if (sectionMenuV2Container) {
            sectionMenuV2Container.addClass('fixed-to-fit-main-nav');
        }

    } else {
        /** @todo remove if confirmed working **/
        // if (isMainNavLight) {
        //     mainNavigation.removeClass('main-navigation');
        //     brandImg.attr('src', '/wp-content/themes/furman/assets/img/academic-logo-light.svg');
        //     brandImg.attr('role-img-default', '/wp-content/themes/furman/assets/img/academic-logo-light.svg');
        //     brandImg.attr('role-img-hover', '/wp-content/themes/furman/assets/img/academic-logo-light-hover.svg');
        // }

        mainNavigation.removeClass('fit-main-nav');

        //section menu
        sectionMenu.removeClass('sticky-section-menu-button-holder-thin-menu-adjustment');

        sectionMenuBox.removeClass('sticky-section-menu-thin-menu-adjustment');

        const sectionMenuV2Container = jQuery('#section-menu-container');

        if (sectionMenuV2Container) {
            sectionMenuV2Container.removeClass('fixed-to-fit-main-nav');
        }

    }

});

jQuery(document).on("click", '[role-span="search-bar-icon"]', function(event) {
    event.preventDefault();
    var searchInput = jQuery(this).parent().find('[role-input="search-bar"]');
    window.location.replace("https://www.furman.edu/search?q=" + jQuery.trim(searchInput.val()));
});

var sectionMenuTimeout

jQuery(document).on("click", "[role-button]", function(event) {
    var $trigger = jQuery(this);
    let siteURL = window.location.origin;
    event.preventDefault();

    switch ($trigger.attr("role-button")) {

        case "section-menu-toggle":
            if (jQuery('#section-menu-list-container').hasClass('open')) {
                jQuery('#section-menu-list-container').removeClass('open');
                jQuery('[role-button="section-menu-toggle"]').removeClass('open');
                jQuery('[role-button="section-menu-toggle"]').attr('aria-expanded', false);

                clearTimeout(sectionMenuTimeout)

                sectionMenuTimeout = setTimeout(function () {
                    jQuery('#section-menu-list-container').css({
                        'display': 'none'
                    });
                }, 800);
            } else {
                clearTimeout(sectionMenuTimeout)

                jQuery('#section-menu-list-container').css({
                    'display': 'block'
                });
                jQuery('#section-menu-list-container').addClass('open');
                jQuery('[role-button="section-menu-toggle"]').addClass('open');
                jQuery('[role-button="section-menu-toggle"]').attr('aria-expanded', true);
            }

            break;

        case "section-menu-subsection-toggle":
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active').attr('aria-expanded', false);
            } else {
                jQuery(this).addClass('active').attr('aria-expanded', true);
            }

            jQuery(this).next().slideToggle();
            break;

        case "open-section-menu":
            let bannerCaptionBox = jQuery('[role-div=banner-button-holder]');
            let bannerCaptionBoxTop = bannerCaptionBox.offset().top;

            jQuery(".section-menu").css("top", bannerCaptionBoxTop + "px");
            jQuery(".section-menu").animate({
                width: "toggle"
            });
            jQuery('[role-button="close-section-menu"], [role-button="open-section-menu"]').attr('aria-expanded', 'true');
            break;

        case "close-section-menu":
            jQuery(".section-menu").animate({
                width: "toggle"
            });
            jQuery('[role-button="close-section-menu"], [role-button="open-section-menu"]').attr('aria-expanded', 'false');
            break;

        case "open-section-sub-menu":
            jQuery(this).hide();
            jQuery(this).next().show();
            jQuery(this).parent().next().slideDown();
            jQuery(this).next().focus();
            break;

        case "close-section-sub-menu":
            jQuery(this).hide();
            jQuery(this).prev().show();
            jQuery(this).parent().next().slideUp();
            jQuery(this).prev().focus();
            break;

        case "modal-menu-tab":
            var screenWidth = jQuery(window).width();

            if (screenWidth < 993) {

                jQuery('[role-button=modal-menu-tab]').each(function() {
                    jQuery(this).addClass("muted");
                });

                jQuery(this).removeClass("muted");
                jQuery(this).addClass("active");

                var theTargetDiv = jQuery(this).attr('data-bs-target');
                jQuery(theTargetDiv).addClass("active").addClass("show");

                var chkMenuTab = jQuery('#v-pills-tab > button').hasClass('active');

                if (chkMenuTab) {
                    jQuery('#v-pills-tab > button.muted').each(function() {
                        jQuery(this).prop("disabled", true);
                    });
                } else {
                    jQuery(this).removeClass("active");
                    jQuery('[role-button=modal-menu-tab]').each(function() {
                        jQuery(this).removeClass("muted");
                    });
                    jQuery('#v-pills-tab > button').each(function() {
                        jQuery(this).prop("disabled", false);
                    });
                }

            }

            break;

        case "v-pill-third-layer-closer":
            jQuery('#v-pills-tab > button').each(function() {
                jQuery(this).prop("disabled", false);
                jQuery(this).removeClass("muted");
                jQuery(this).removeClass("active");
            });

            $trigger.parent().parent().addClass("fade");
            $trigger.parent().parent().removeClass("show");
            $trigger.parent().parent().removeClass("active");
            break;

        case "main-navigation-modal-open":
            jQuery('[role-div=navigation-modal]').addClass('navigation-modal-fadein');
            jQuery('body').addClass('nav-modal-open');
            jQuery('[role-button="main-navigation-modal-close"]').focus();
            break;

        case "main-navigation-modal-close":
            jQuery('[role-div=navigation-modal]').addClass('navigation-modal-fadeout');
            jQuery('body').removeClass('nav-modal-open');
            jQuery('[role-button="main-navigation-modal-open"]').focus()

            setTimeout(function() {
                jQuery('[role-div=navigation-modal]').removeClass('navigation-modal-fadein');
                jQuery('[role-div=navigation-modal]').removeClass('navigation-modal-fadeout');
            }, 600);

            // reset to default tier menu
            fn.defaultFirstTierMenus();
            fn.defaultSecondTierMenus();

            break

        case "first-tier-menu-item":
            let maxWidth991 = window.matchMedia("(max-width: 991px)");

            // detech if menu is open?
            if (jQuery(this).attr('tier-menu-open') == 'true') {
                // unset current for all first-tier buttons (A360)
                jQuery('button[role-button=first-tier-menu-item]').attr('aria-current', 'false');
                jQuery('button[role-button=first-tier-menu-item]').attr('aria-expanded', 'false');
                // remove disable from all other first-tier buttons (A360)
                jQuery('button[role-button=first-tier-menu-item]').removeAttr('disabled');
                // restore href to first-tier anchors so tabbing will work on them again (A360)
                jQuery('a[role-button=first-tier-menu-item]').each(function() {
                    let $t = jQuery(this);
                    $t.attr('href', $t.attr('data-href')).removeAttr('data-href');
                });

                // change icon
                let firstTierMenuIcon = jQuery(this).children().first().children().first();
                firstTierMenuIcon.attr('src', firstTierMenuIcon.attr('role-img-menu-open'));

                // add "x" toggle button functionality
                firstTierMenuIcon.removeAttr('role-button');

                // enabled controls
                jQuery('[role-button=first-tier-menu-item]').parent().not(jQuery(this).parent()).removeClass('muted-control');
                // hide second tier
                let secondTierDiv = jQuery(this).next();
                if (maxWidth991.matches) {
                    secondTierDiv.addClass('hide');
                    setTimeout(function() {
                        secondTierDiv.removeClass('show animate__fadeInUp');
                    }, 300);
                } else {
                    secondTierDiv.addClass('hide');
                    setTimeout(function() {
                        secondTierDiv.removeClass('show animate__fadeInUp');
                    }, 300);
                    // let rightSectionFullNavModalSecondtier = jQuery('.full-style-nav-modal-right .tm-second-tier');
                    // rightSectionFullNavModalSecondtier.removeClass('show animate__fadeInUp');
                    // rightSectionFullNavModalSecondtier.detach().insertAfter(jQuery(this));
                    jQuery('[role-div=nav-modal-news-pill]').removeClass('muted');
                }


                // remove open attribute indicator
                jQuery(this).removeAttr('tier-menu-open');

            } else {
                if (jQuery(this).hasClass('no-child')) {
                    window.location.href = jQuery(this).attr('href');
                    return false;
                }

                // set target as current (A360)
                jQuery(this).attr('aria-current', 'true');
                jQuery(this).attr('aria-expanded', 'true');
                // disable all other first-tier buttons that is not the current element (A360)
                jQuery('button[role-button=first-tier-menu-item]').not(jQuery(this)).attr('disabled', 'true').attr('aria-current', 'false');
                // remove href from first-tier anchor so that tabbing over these elements will be skipped (A360)
                jQuery('a[role-button=first-tier-menu-item]').not(jQuery(this)).each(function() {
                    let $t = jQuery(this);
                    $t.attr('data-href', $t.attr('href')).removeAttr('href');
                });

                // add open attribute indicator
                jQuery(this).attr('tier-menu-open', 'true');

                // disabled controls
                jQuery('[role-button=first-tier-menu-item]').parent().not(jQuery(this).parent()).addClass('muted-control');

                // change icon
                let firstTierMenuIcon = jQuery(this).children().first().children().first();
                firstTierMenuIcon.attr('src', firstTierMenuIcon.attr('role-img-menu-close'));

                // add "x" toggle button functionality
                firstTierMenuIcon.attr('role-button', 'first-tier-menu-item-close');

                // show second tier

                // detech if 991px up
                let secondTierDiv = jQuery(this).next();
                if (!maxWidth991.matches) {
                    // secondTierDiv.detach().appendTo('[role-div=full-style-nav-modal-right]');
                    jQuery('[role-div=nav-modal-news-pill]').addClass('muted');
                }
                secondTierDiv.removeClass('hide');
                secondTierDiv.addClass('show animate__fadeInUp');


            }



            // reset to default second tier
            fn.defaultSecondTierMenus();
            break;

        case "second-tier-menu-item":
            // detech if menu is open?
            if (jQuery(this).attr('tier-menu-open') == 'true') {
                // unset current for all second-tier buttons (A360)
                jQuery('button[role-button=second-tier-menu-item]').attr('aria-current', 'false');
                // remove disable from all other second-tier buttons (A360)
                jQuery('button[role-button=second-tier-menu-item]').removeAttr('disabled');
                // restore href to second-tier anchors so tabbing will work on them again (A360)
                jQuery('a[role-button=second-tier-menu-item]').each(function() {
                    let $t = jQuery(this);
                    $t.attr('href', $t.attr('data-href')).removeAttr('data-href');
                });

                // change icon
                let secondTierMenuIcon = jQuery(this).children().first().next().children().first();
                secondTierMenuIcon.attr('src', secondTierMenuIcon.attr('role-img-menu-open'));

                // enabled controls
                jQuery('[role-button=second-tier-menu-item]').parent().not(jQuery(this).parent()).removeClass('muted-control');
                jQuery(this).parent().parent().prev().removeClass('muted-control');

                secondTierMenuIcon.removeAttr('role-button');

                // hide third tier
                let thirdTierDiv = jQuery(this).next();
                thirdTierDiv.addClass('hide');
                setTimeout(function() {
                    thirdTierDiv.removeClass('show animate__fadeInUp');
                }, 300);

                // remove open attribute indicator
                jQuery(this).removeAttr('tier-menu-open');

            } else {
                if (jQuery(this).hasClass('no-child')) {
                    window.location.href = jQuery(this).attr('href');
                    return false
                }

                // set target as current (A360)
                jQuery(this).attr('aria-current', 'true');
                // disable all other second-tier buttons that is not the current element (A360)
                jQuery('button[role-button=second-tier-menu-item]').not(jQuery(this)).attr('disabled', 'true').attr('aria-current', 'false');
                // remove href from second-tier anchor so that tabbing over these elements will be skipped (A360)
                jQuery('a[role-button=second-tier-menu-item]').not(jQuery(this)).each(function() {
                    let $t = jQuery(this);
                    $t.attr('data-href', $t.attr('href')).removeAttr('href');
                });

                // add open attribute indicator
                jQuery(this).attr('tier-menu-open', 'true');

                // disabled controls
                jQuery('[role-button=second-tier-menu-item]').parent().not(jQuery(this).parent()).addClass('muted-control');
                jQuery(this).parent().parent().prev().addClass('muted-control');

                // change icon
                let secondTierMenuIcon = jQuery(this).children().first().next().children().first();
                secondTierMenuIcon.attr('src', secondTierMenuIcon.attr('role-img-menu-close'));

                // add "x" toggle button functionality
                secondTierMenuIcon.attr('role-button', 'second-tier-menu-item-close');


                // show third tier
                jQuery(this).next().removeClass('hide');
                jQuery(this).next().addClass('show animate__fadeInUp');
            }
            break;

        case "first-tier-menu-item-close":
            // unset current for all first-tier buttons (A360)
            jQuery('button[role-button=first-tier-menu-item]').attr('aria-current', 'false');
            // remove disable from all other first-tier buttons (A360)
            jQuery('button[role-button=first-tier-menu-item]').removeAttr('disabled');
            // restore href to first-tier anchors so tabbing will work on them again
            jQuery('a[role-button=first-tier-menu-item]').each(function() {
                let $t = jQuery(this);
                $t.attr('href', $t.attr('data-href')).removeAttr('data-href');
            });
            let currentItem = jQuery(this).parent().parent();
            fn.defaultFirstTierMenus(currentItem);
            fn.defaultSecondTierMenus();
            break;

        case "second-tier-menu-item-close":
            // unset current for all second-tier buttons (A360)
            jQuery('button[role-button=second-tier-menu-item]').attr('aria-current', 'false');
            // remove disable from all other second-tier buttons (A360)
            jQuery('button[role-button=second-tier-menu-item]').removeAttr('disabled');
            // restore href to second-tier anchors so tabbing will work on them again (A360)
            jQuery('a[role-button=second-tier-menu-item]').each(function() {
                let $t = jQuery(this);
                $t.attr('href', $t.attr('data-href')).removeAttr('data-href');
            });
            fn.defaultSecondTierMenus();
            break;

        case "slick-dot":
            jQuery(this).parent().children().removeAttr('aria-current');
            jQuery('.slick-dots').find('li.slick-active').attr('aria-current', 'true');
            break;

        case "large-play-button":
        case "fullscreen-button":
            // video modal
            jQuery('.mfp-close').wrapInner('<span role-button="mfp-closer" aria-hidden="true"></span>').append('<span class="sr-only">Close modal</span>');
            // jQuery('.vp-controls-wrapper .vp-title').attr('tabindex', '-1');
            // console.log(jQuery('.vp-controls-wrapper .vp-title').attr());
            break;

        case "tfa-accordion":
            let is_expanded = jQuery(this).attr('aria-expanded');

            // if (is_expanded == 'false') {
            //     jQuery(this).attr('aria-expanded', 'true');
            // } else {
            //     jQuery(this).attr('aria-expanded', 'false');
            // }
            break;
        case "mfp-closer":
            jQuery.magnificPopup.close();

        case "nav-link-tab":
            // set all tabindex="-1" including button under each.
            jQuery('.nav-item .nav-link-tab').each(function() {
                jQuery(this).attr('tabindex', '-1');
            });

            // set the tabindex to selectable
            jQuery(this).attr('tabindex', '0');
            break;

        case "perspective-video-play":
            // hide the play button
            jQuery(this).hide();
            // show the pause button
            jQuery(this).prev().css("display", "flex");
            // hide image holder
            jQuery(this).parent().next().children().first().hide();
            // show video holder
            jQuery(this).parent().next().children().last().show();
            
            // play video
            if (jQuery(this).parent().next().children().last().children().first().children().first().hasClass('perspective-youtube-video-bg--uploaded')) {
                jQuery(this).parent().next().children().last().children().first().children().first()[0].play();
            } else {
                jQuery(this).parent().next().children().last().children().first().children().first()[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }

            jQuery(this).parent().siblings('.caption').first().css({
                'opacity': 0
            });

            break;

        case "perspective-video-pause":
            // hide the pause button
            jQuery(this).hide();
            // show play button
            jQuery(this).next().show();
            // show image holder
            jQuery(this).parent().next().children().first().show();
            // hide video holder
            jQuery(this).parent().next().children().last().hide();
            // pause video
            if (jQuery(this).parent().next().children().last().children().first().children().first().hasClass('perspective-youtube-video-bg--uploaded')) {
                jQuery(this).parent().next().children().last().children().first().children().first()[0].pause();
            } else {
                jQuery(this).parent().next().children().last().children().first().children().first()[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }

            jQuery(this).parent().siblings('.caption').first().css({
                'opacity': 1
            });

            break;

        case "show-all-latest-news":
            window.location.replace(siteURL + "/news/archive/");
            break;

        case "shareit-facebook":
            let post_url = jQuery(this).attr('href');
            let post_title = jQuery(this).attr('c-attr-title');
            let facebookShareUrl = 'https://www.facebook.com/sharer.php?s=100&p[title]=' + post_title + '&p[url]=' + post_url;
            window.open(facebookShareUrl);
            break;

        case "shareit-twitter":
            let post_url_twitter = jQuery(this).attr('href');
            let post_title_twitter = jQuery(this).attr('c-attr-title');
            let twitterShareUrl = 'http://twitter.com/share?text=' + post_title_twitter + '&url=' + post_url_twitter;
            window.open(twitterShareUrl);
            break;

        case "shareit-linkedin":
            let post_url_linkedin = jQuery(this).attr('href');
            let post_title_linkedin = jQuery(this).attr('c-attr-title');
            let linkedinShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&title=' + post_title_linkedin + '&url=' + post_url_linkedin;
            window.open(linkedinShareUrl);
            break;

        case "shareit-email":
            let post_url_email = jQuery(this).attr('href');
            let post_title_email = jQuery(this).attr('c-attr-title');
            let emailShareUrl = 'mailto:?subject=' + post_title_email + '&body=' + post_url_email;
            window.open(emailShareUrl);
            break;

        case "print-webpage":
            window.print();
            break;


    }
    return false;
});

jQuery(document).on('keydown', function(e) {
    let siteURL = window.location.origin;

    let isMainMenuOpen = jQuery('[role-div=navigation-modal]').hasClass('navigation-modal-fadein');
    let firstFocusableElement = document.querySelector('[role-div=navigation-modal] .navbar-brand')
    let lastFocusableElement = document.querySelector('.nav-modal-menu-last-focusable-item');

    if (e.key == 'Tab' && e.shiftKey && e.target == firstFocusableElement && isMainMenuOpen) {
        e.preventDefault();
        lastFocusableElement.focus();
    } else if (e.key == 'Tab' && !e.shiftKey && e.target == lastFocusableElement && isMainMenuOpen) {
        e.preventDefault();
        firstFocusableElement.focus();
    } else if (e.keyCode == 27 && isMainMenuOpen) {
        jQuery('[role-button="main-navigation-modal-close"]').click();
    }


    // for items that needed keyboard support (Arrow Left and Right)

    let $focused = jQuery(':focus');
    let tab_item = $focused.attr('role-item');

    // left arrow key
    if (e.keyCode == 37) {
        // tabs
        if (tab_item == 'nav-link-tab') {
            jQuery(".nav-link-tab:focus").parent().prev().find('.nav-link-tab').focus();
        }
    }

    // right arrow key
    if (e.keyCode == 39) {
        // tabs
        if (tab_item == 'nav-link-tab') {
            jQuery(".nav-link-tab:focus").parent().next().find('.nav-link-tab').focus();
        }
    }

    // enter key
    if (e.keyCode == 13) {

        // click the focused item
        let selected_item = jQuery(':focus');
        selected_item[0].click();


        // var $input = jQuery(this);
        // switch ($input.attr("role-input")) {
        //     case "search-bar":
        //     break;

        //     case "news-search":
        //         console.log('test news search');
        //         break;


        // }

        // search sitewide functionality
        let isSearching = jQuery('[role-input="search-bar"]').is(':focus');
        let searchInput = $focused.parent().find("[role-input='search-bar']");

        if ((isSearching == true) && (jQuery.trim(searchInput.val()).length >= 1)) {
            window.location.replace(siteURL + "/search?q=" + jQuery.trim(searchInput.val()));
        }

        fn.skipToMainContent();

        // news search functionality
        // let isNewsSearching = jQuery('[role-input="news-search"]').is(':focus');
        // let newsSearchInput = jQuery("[role-input='news-search']");
        // if ((isNewsSearching == true) && (jQuery.trim(newsSearchInput.val()).length >= 1)) {
        //     console.log('news search: ' + newsSearchInput.val());

        //     jQuery.ajax({
        //         //url: '<?php echo admin_url("admin-ajax.php"); ?>',
        //         url: the_ajax_script.ajaxurl, //siteURL + '/wp-admin/admin-ajax.php',
        //         type: 'post',
        //         data: { action: 'furman_posts_fetch', news_keyword: newsSearchInput.val() },
        //         success: function(response) {
        //             //jQuery('#datafetch').html(data);
        //             console.log('res: ' + response);
        //             console.log(response);
        //         }
        //     });

        // }


        return false;
    }

    let activeElement = document.activeElement?.tagName?.toLowerCase() ?? null;
    let isActiveElementButtonInput = activeElement == 'input' && (document.activeElement.getAttribute('type') == 'button' || document.activeElement.getAttribute('type') == 'submit');
    let activeElementHasRoleAttr = document.activeElement.hasAttribute('role-button');

    let overrideTags = ['a', 'button'];

    // space bar
    if (e.keyCode == 32 && (overrideTags.indexOf(activeElement) != -1 || isActiveElementButtonInput || activeElementHasRoleAttr)) {
        // fn.skipToMainContent();

        // click the focused item
        let selected_item = jQuery(':focus');
        selected_item.click();


        return false;
    }

})

const fn2 = {
    initializeMediaSlider: function () {
        const activeSlide = jQuery('.module-block-media-slider__slide.slick-active');

        if (!activeSlide.length) {
            return false;
        }

        const offsetLeft = activeSlide.offset().left;
        const slickPrev = '.module-block-media-slider .module-block-media-slider__slides--images .slick-prev';
        const slickNext = '.module-block-media-slider .module-block-media-slider__slides--images .slick-next';
        const slickDots = '.module-block-media-slider .module-block-media-slider__slides--images .slick-dots';

        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery(slickNext).css({
                left: '77px'
            });
            jQuery(slickDots).css({
                left: '144px'
            });
            jQuery(`${slickPrev}, ${slickNext}, ${slickDots}`).css({
                'margin-left': `${offsetLeft}px`
            });
        } else {
            jQuery(`${slickPrev}, ${slickNext}, ${slickDots}`).css({
                left: '',
                'margin-left': ''
            });
        }
    },
    initializeImageSlider2rows: function () {
        try {
            jQuery('.image-slider__container--2-rows').slick('unslick');
        } catch (e) {
            console.warn(e);
        }

        const hideUI = jQuery('.image-slider__container').data('hide-ui');

        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.image-slider__container--2-rows').slick({
                dots: hideUI ? false : true,
                arrows: hideUI ? false : true,
                rows: 2,
                slidesPerRow: 3,
            });
        } else {
            jQuery('.image-slider__container--2-rows').slick({
                dots: true,
                centerMode: true,
                slidesToShow: 1,
                variableWidth: false,
            });
        }
    },
    initializeLogoGrid: function () {
        try {
            jQuery('.logo-slider__container').slick('unslick');
        } catch (e) {
            console.warn(e);
        }

        const totalSlides = jQuery('.logo-slider__container').data('total-slides');

        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.logo-slider__item').each(function () {
                jQuery(this).css({
                    'flex-basis': jQuery(this).data('width-desktop') + 'px'
                });
                jQuery(this).children('img').css({
                    width: jQuery(this).data('width-desktop') + 'px'
                });
            });

            jQuery('.logo-slider__container').slick({
                dots: totalSlides <= 15 ? false : true,
                arrows: totalSlides <= 15 ? false : true,
                rows: 3,
                slidesPerRow: 5,
            });
        } else {
            jQuery('.logo-slider__item').each(function () {
                jQuery(this).css({
                    'flex-basis': jQuery(this).data('width-mobile') + 'px'
                });
                jQuery(this).children('img').css({
                    width: jQuery(this).data('width-mobile') + 'px'
                });
            });

            jQuery('.logo-slider__container').slick({
                dots: totalSlides <= 10 ? false : true,
                arrows: totalSlides <= 10 ? false : true,
                rows: 5,
                slidesPerRow: 2,
            });
        }
    },
    initializeAdvancedTabs: function () {
        jQuery('.advanced-tabs .advanced-tabs__tabs').children('li.advanced-tabs__nav-item:first-child').addClass('active');
        jQuery('.advanced-tabs .advanced-tabs__tab-panes').children('div.advanced-tabs__tab-pane:first-child').addClass('active');

        jQuery('.advanced-tabs .advanced-tabs__nav-link').on('click', function (e) {
            e.preventDefault();
            const tab      = jQuery(this).parent();
            const tabIndex = tab.index();
            const tabPanes = tab.parent().next();
            const tabPane  = tabPanes.children('.advanced-tabs__tab-pane').eq(tabIndex);

            tab.siblings('.active').removeClass('active');
            tab.addClass('active');
            tabPanes.find('.active').removeClass('active');
            tabPane.addClass('active');
        });
    },
    initAtcColumn: function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.atc-column').each(function () {
                jQuery(this).css({ width: jQuery(this).data('desktop-width') });
            })
        } else {
            jQuery('.atc-column').each(function () {
                jQuery(this).css({ width: jQuery(this).data('mobile-width') });
            })
        }
    },
    initAtcList: function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.atc-list__list-item').each(function () {
                jQuery(this).css({ width: jQuery(this).data('desktop-width') });
            })
        } else {
            jQuery('.atc-list__list-item').each(function () {
                jQuery(this).css({ width: jQuery(this).data('mobile-width') });
            })
        }
    },
    initAtcPurpleButtons: function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.atc-purple-buttons__item').each(function () {
                jQuery(this).css({ width: jQuery(this).data('desktop-width') });
            })
        } else {
            jQuery('.atc-purple-buttons__item').each(function () {
                jQuery(this).css({ width: jQuery(this).data('mobile-width') });
            })
        }
    },
    initAtcCourses: function () {
        try {
            jQuery('.atc-courses').slick('unslick');
        } catch (e) {
            console.warn(e);
        }

        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.atc-courses').slick({
                dots: false,
                variableWidth: true,
                slidesToShow: 2,
            });
        } else {
            jQuery('.atc-courses').slick({
                dots: false,
                variableWidth: true,
                slidesToShow: 1,
            });
        }
    },
    programListRemoveDuplicates: function () {
        let seen = {};
        
        jQuery('.program-list__body-item-title').each(function() {
            let programListBodyItemTitleTxt = jQuery(this).text();
            if (seen[programListBodyItemTitleTxt]) {
                jQuery(this).parent().remove();
            } else {
                seen[programListBodyItemTitleTxt] = true;
            }
        });
    },
    programListRunFilters: function (programListFilterParent) {
        let progamListAreasFilterButtonValue = programListFilterParent.find('.program-list__head-button--area').text();
        let programListTypesFilterButtonValue = programListFilterParent.find('.program-list__head-button--type').text();
        let programListSearchFilterValue = programListFilterParent.find('.program-list__head-search').val().toLowerCase();
        let programListAreasProgramLink = programListFilterParent.find('.program-list__body-item');

        if (progamListAreasFilterButtonValue === 'Area of Study') {
            programListFilterParent.find('.program-list__head-button--area').prev().removeClass('program-list__clear-button--show')
        } else {
            programListFilterParent.find('.program-list__head-button--area').prev().addClass('program-list__clear-button--show')
        }

        if (programListTypesFilterButtonValue === 'Degree Type') {
            programListFilterParent.find('.program-list__head-button--type').prev().removeClass('program-list__clear-button--show')
        } else {
            programListFilterParent.find('.program-list__head-button--type').prev().addClass('program-list__clear-button--show')
        }
        let visibleItemsCount = 0;
        programListAreasProgramLink.each(function () {
            let matchesAreaFilter = jQuery(this).data('area') === progamListAreasFilterButtonValue;
            let matchesTypeFilter = jQuery(this).find(`[data-type="${programListTypesFilterButtonValue}"]`).length > 0;
            let matchesSearchFilter = jQuery(this).data('title').toLowerCase().indexOf(programListSearchFilterValue) !== -1;

            if (progamListAreasFilterButtonValue === 'Area of Study') {
                matchesAreaFilter = true;
            }

            if (programListTypesFilterButtonValue === 'Degree Type') {
                matchesTypeFilter = true;
            }

            if (programListSearchFilterValue == null) {
                matchesSearchFilter = true;
            }

            if (!matchesAreaFilter || !matchesTypeFilter || !matchesSearchFilter) {
                jQuery(this).addClass('program-list__body-item--hidden');
            } else {
                jQuery(this).removeClass('program-list__body-item--hidden');
                visibleItemsCount += 1;
            }
        });
        
        const liveRegion = document.getElementById('live-region');
        const resultsCountText = document.getElementById('results-count-text');
        if (visibleItemsCount > 0) {
          resultsCountText.classList.add('visually-hidden');
          liveRegion.textContent = `${visibleItemsCount} results available.`;
        } else {
          resultsCountText.classList.remove('visually-hidden');
          liveRegion.textContent = 'No results available.';
        }
    },
    initSampleCourses: function () {
        try {
            jQuery('.sample-courses-container').slick('unslick');
        } catch (e) {
            console.warn(e);
        }

        if (window.matchMedia("(min-width: 992px)").matches) {
            jQuery('.sample-courses-container').slick({
                dots: false,
                variableWidth: true,
                slidesToShow: 2,
            });
        } else {
            jQuery('.sample-courses-container').slick({
                dots: false,
                variableWidth: true,
                slidesToShow: 1,
            });
        }
    }
}

jQuery(document).ready(function() {
    jQuery('#v-pills-news-2 .tab-pane .socials li:last-child a').addClass('nav-modal-menu-last-focusable-item');
    
    jQuery('.module-block-media-slider__slides--images').slick({
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        dots: true,
        accessibility:false,
        asNavFor: '.module-block-media-slider__slides--captions',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });

    jQuery('.module-block-media-slider__slides--captions').slick({
        slidesToShow: 1,
        fade: true,
        asNavFor: '.module-block-media-slider__slides--images',
    });

    jQuery('.image-slider__container--1-row').slick({
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });

    let programListSearchDebounce = null;

    jQuery('.program-list__head-search').on('keyup', function () {

        let $trigger = jQuery(this);
        let searchClearButton = $trigger.next();
        let programListFilterParent = $trigger.closest('.program-list__container');
        
        let $triggerValue = $trigger.val();

        if ($triggerValue == '' || $triggerValue == null) {
            searchClearButton.removeClass('program-list__clear-button--show');
        } else if (!searchClearButton.hasClass('program-list__clear-button--show')) {
            searchClearButton.addClass('program-list__clear-button--show');
        }
        
        clearTimeout(programListSearchDebounce);

        programListSearchDebounce = setTimeout(function () {
            fn2.programListRunFilters(programListFilterParent);
        }, 1000);

    });

    jQuery('#program-list-sort-asc').click();

    jQuery('.updates-search').on('keyup', function (e) {
        if (e.code != 'Enter') {
            return false;
        }

        let $target = jQuery(e.target);
        let siteUrl = $target.attr('data-site-url');
        let searchVal = $target.val();

        let request = jQuery.ajax({
            url: `${siteUrl}/wp-json/furman/v1/updates?term_id=0&paged=1&search=${searchVal}`,
            method: 'GET',
        });

        request.done(function (res) {
            jQuery('.module-block-content-latest-news').html(res)
        });
    });

    jQuery('.global-calendar').each(function () {
        const spudConfig = {
            webName: jQuery(this).data('web-name'),
            spudType: jQuery(this).data('spud-type'),
            spudId: jQuery(this).attr('id')
        };

        if (jQuery(this).data('url')) {
            let spudUrlStr = jQuery(this).data('url');
            spudUrlKeyValPairs = spudUrlStr.split('&');
            
            const spudUrlObj = {};
            
            spudUrlKeyValPairs.forEach(keyValPair => {
                const [key, val] = keyValPair.split('=');
                spudUrlObj[key] = val;
            });

            spudConfig['url'] = spudUrlObj;
        }

        window.$Trumba.addSpud(spudConfig);
    });
    
    fn2.programListRemoveDuplicates();
    fn2.initializeMediaSlider();
    fn2.initializeImageSlider2rows();
    fn2.initializeLogoGrid();
    fn2.initializeAdvancedTabs();
    fn2.initAtcColumn();
    fn2.initAtcList();
    fn2.initAtcPurpleButtons();
    fn2.initAtcCourses();
    fn2.initSampleCourses();
});

jQuery(window).on('resize', function () {
    fn2.initializeImageSlider2rows();
    fn2.initializeLogoGrid();
    fn2.initAtcColumn();
    fn2.initAtcList();
    fn2.initAtcPurpleButtons();
    fn2.initAtcCourses();
    fn2.initSampleCourses();

    // if (window.matchMedia("(max-width: 992px)").matches) {
    //     let alertsCount = jQuery('[role="alert"]:not([class*="tribe"])').length;
    //     let alertsCountDesktopOnly = jQuery('[role="alert"]:not([class*="tribe"]).alert-purple--desktop-only').length;
    //     let alertsCountMobile = alertsCount - alertsCountDesktopOnly;
        
    //     if (alertsCount == 3) {
    //         jQuery('#mainNav').removeClass('main-nav-with-three-alert');
    //     } else if (alertsCount == 2) {
    //         jQuery('#mainNav').removeClass('main-nav-with-two-alert');
    //     } else if (alertsCount == 1) {
    //         jQuery('#mainNav').removeClass('main-nav-top-spacer');
    //     }

    //     if (alertsCountMobile == 3) {
    //         jQuery('#mainNav').addClass('main-nav-with-three-alert');
    //     } else if (alertsCountMobile == 2) {
    //         jQuery('#mainNav').addClass('main-nav-with-two-alert');
    //     } else if (alertsCountMobile == 1) {
    //         jQuery('#mainNav').addClass('main-nav-top-spacer');
    //     }
    // } else {
    //     let alertsCount = jQuery('[role="alert"]:not([class*="tribe"])').length;
    //     let alertsCountDesktopOnly = jQuery('[role="alert"]:not([class*="tribe"]).alert-purple--desktop-only').length;
    //     let alertsCountMobile = alertsCount - alertsCountDesktopOnly;

    //     if (alertsCountMobile == 3) {
    //         jQuery('#mainNav').removeClass('main-nav-with-three-alert');
    //     } else if (alertsCountMobile == 2) {
    //         jQuery('#mainNav').removeClass('main-nav-with-two-alert');
    //     } else if (alertsCountMobile == 1) {
    //         jQuery('#mainNav').removeClass('main-nav-top-spacer');
    //     }
        
    //     if (alertsCount == 3) {
    //         jQuery('#mainNav').addClass('main-nav-with-three-alert');
    //     } else if (alertsCount == 2) {
    //         jQuery('#mainNav').addClass('main-nav-with-two-alert');
    //     } else if (alertsCount == 1) {
    //         jQuery('#mainNav').addClass('main-nav-top-spacer');
    //     }
    // }
})

jQuery(document).on("click", "[role-button]", function(event) {
    var $trigger = jQuery(this);
    event.preventDefault();

    switch ($trigger.attr("role-button")) {
        case "smooth-scroll":
            let dataTarget = jQuery(this).data('target');
            let target = document.querySelector(dataTarget);

            target.scrollIntoView();

            break;
        case "program-list-filter-areas":
        case "program-list-filter-types":
            let programListFilterParent = $trigger.closest('.program-list__container');

            var programListFilterButton = $trigger.parent().parent().prev();
            programListFilterButton.text($trigger.data('value'));

            fn2.programListRunFilters(programListFilterParent);
            
            break;
        case "program-list-filter-clear":
            let clearTarget = $trigger.data('target');
            jQuery(clearTarget).click();
            break;
        case "program-list-search-clear":
            jQuery('#program-list__head-search').val(null);
            jQuery(this).removeClass('program-list__clear-button--show');
            fn2.programListRunFilters(jQuery('#program-list__head-search').closest('.program-list__container'));
            break;
        case "program-list-sort":
            let selectedSortingMethod = $trigger.data('value');
            let programListFilterParent2 = $trigger.closest('.program-list__container');
            let programListSort = programListFilterParent2.find('.program-list__head-button--sort');
            let programListLinkList = programListFilterParent2.find('.program-list__body');
            let programListLinks = programListFilterParent2.find('.program-list__body-item');

            programListSort.text(selectedSortingMethod);

            if (selectedSortingMethod === 'A-Z' || selectedSortingMethod === 'Z-A') {
                programListSort.prev().addClass('program-list__clear-button--show')
            } else {
                programListSort.prev().removeClass('program-list__clear-button--show')
            }
            
            let courses = programListLinks.sort(function (a, b) {
                if (selectedSortingMethod === 'A-Z') {
                    let aVal = a.getAttribute('data-title');
                    let bVal = b.getAttribute('data-title');
                    return (aVal < bVal) ? -1 : ((aVal > bVal) ? 1 : 0);
                } else if (selectedSortingMethod === 'Z-A') {
                    let aVal = a.getAttribute('data-title');
                    let bVal = b.getAttribute('data-title');
                    return (aVal > bVal) ? -1 : ((aVal < bVal) ? 1 : 0);
                } else {
                    let aVal = a.getAttribute('data-index');
                    let bVal = b.getAttribute('data-index');
                    return (aVal < bVal) ? -1 : ((aVal > bVal) ? 1 : 0);
                }
            });

            programListLinkList.html(courses);
            break;
        default:
            //
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tabbed-section .custom-tab-container .nav-link-tab[role="tab"]');

  tabButtons.forEach((button, index) => {
    button.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();

        // Determine the new index
        let newIndex = index;
        if (event.key === 'ArrowRight') {
          newIndex = (index + 1) % tabButtons.length;
        } else if (event.key === 'ArrowLeft') {
          newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        }

        // Move focus to the new tab
        activateTab(tabButtons[newIndex]);
      }
    });
  });

  function activateTab(newTab) {
    // Deactivate all tabs
    tabButtons.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });

    // Activate the new tab
    newTab.setAttribute('aria-selected', 'true');
    newTab.setAttribute('tabindex', '0');
    newTab.focus();
  }
});