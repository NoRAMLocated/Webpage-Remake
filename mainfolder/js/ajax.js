// for search enter key
jQuery(document).on('keydown', function(e) {
    //let siteURL = window.location.origin;

    // enter key
    if (e.keyCode == 13) {

        // news search functionality
        let isNewsSearching = jQuery('[role-input="news-search-new"]').is(':focus');
        let newsSearchInput = jQuery("[role-input='news-search-new']");
        let newsKeyword = jQuery.trim(newsSearchInput.val());
        let newsCategoryID = newsSearchInput.attr('role-data-news-category');

        //console.log('news search: ' + newsSearchInput.val());
        if ((isNewsSearching == true) && (newsKeyword.length >= 1)) {
            let ppp = 6; // Post per page
            let pageNumber = 1;
            // let total = jQuery('#totalpages').val();

            // jQuery("#more_posts").attr("disabled", true); // Disable the button, temp.
            // pageNumber++;
            var str = '&news_keyword=' + newsKeyword + '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&catID=' + newsCategoryID + '&action=furman_posts_fetch';
            jQuery.ajax({
                url: the_ajax_script.ajaxurl,
                type: 'post',
                dataType: "html",
                //data: { action: 'furman_posts_fetch', news_keyword: newsSearchInput.val() },
                data: str,
                success: function(response) {
                    // = JSON.parse(response);
                    //console.log('ajax.js: ' + $data);

                    let $items = JSON.parse(response);

                    if ($items) {
                        jQuery("#module-block-content-latest-news").empty();

                        for (var item of $items) {
                            let p_title = item.post_title;
                            let p_content = item.post_content;
                            let p_image = item.featured_image;
                            let p_link = item.post_link;
                            let $thumb_image = '';

                            if (p_image) {
                                $thumb_image = '<div class="latest-news__article-thumbnail" style="background-image: url(' + p_image + ')"></div>';
                            } else {
                                $thumb_image = '<div class="latest-news__article-thumbnail no-thumbnail"></div>';
                            }

                            $htmls = '<a class="latest-news__item" href="' + p_link + '"><article class="latest-news__article">' + $thumb_image + '<div class="latest-news__article-content"><h3 class="latest-news__article-title">' + p_title + '</h3><p class="latest-news__article-excerpt">' + p_content + '</p></div></article></a>';
                            jQuery("#module-block-content-latest-news").append($htmls);
                        }
                    }

                }
            });

        }


        return false;
    }



})