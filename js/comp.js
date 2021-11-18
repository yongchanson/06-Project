$("document").ready(function(){

    var $content_tab = $(".contentWrap .content")

    $content_tab.show();

    $(".contentWrap .tabButton .first").click(function(){
        var idx = $(this).index();
        $(".contentWrap .imgBanner").addClass("on");
    })
})