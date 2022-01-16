$(function(){
    $(".type li").on("click" , function(){
        $(".type li").removeClass("active-bidding") ; 
        $(this).addClass("active-bidding") ; 
    })
    if($(".type-current").hasClass("active-bidding") ){
        $(".current-items").css({"display" : "block"}) ; 
        $(".prev-items").hide() ; 
    }
    $(".type-current").on("click" , function(){
        if($(".type-current").hasClass("active-bidding") ){
            $(".current-items").css({"display" : "block"}) ; 
            $(".prev-items").hide() ; 
        }
    })
    $(".type-prev").on("click" , function(){
        if($(".type-prev").hasClass("active-bidding") ){
            $(".prev-items").css({"display" : "block"}) ; 
            $(".current-items").hide() ; 
        }
    })
})