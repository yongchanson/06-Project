// $ = jquery; 

// Top 버튼
    // var timeOut;
    // function scrollToTop() {
    //     if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    //         window.scrollBy(0,-50);
    //         timeOut=setTimeout('scrollToTop()',10);
    //     }
    //     else clearTimeout(timeOut);
    // }


$("document").ready(function(){
    // $(window).scroll(function(){
    //     var pos =

    // })

    var $nav_li = $("nav .nav-wrap .nav-content"),
        $submenu = $("nav .submenu"),
        $sub = $submenu.find("ul");


    $nav_li.mouseover(function(){
        var i = $(this).index();
        console.log(i)

        $submenu.addClass("submenu-hover");
        $nav_li.css("background-color", "red");

    })

    $sub.mouseover(function(){
        var i = $(this).index();
        console.log(i)
        $submenu.addClass("submenu-hover");
    })


})


