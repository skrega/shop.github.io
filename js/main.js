$(function(){
    $('.product-sorting_trand').on('click', function(){
        $('.product-options_trand').toggleClass('active');
    });
    $('.product-sorting_size').on('click', function(){
        $('.product-options_size').toggleClass('active');
    });
    $('.product-sorting_price').on('click', function(){
        $('.product-options_price').toggleClass('active');
    });
    $('.product__sorting-title').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.product-page__filter').hover(function(){
        $('.product-page__filter').toggleClass('visible');
        $('.product__filter-nav').toggleClass('visible');
    });
});
  