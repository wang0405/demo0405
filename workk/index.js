
define(["jquery"], function($){
    $("#head").mouseover(function() {
        $(".son").css({
            "display":"block",
        });

    });
    $("#head").mouseleave(function() {
        $(".son").css({
            "display":"none",
        });

    });
    $("#head1").mouseover(function() {
        $(".son1").css({
            "display":"block",
        });
    });
        $("#head1").mouseleave(function() {
            $(".son1").css({
                "display":"none",
            });
    
        });
        $("#head2").mouseover(function() {
            $(".son2").css({
                "display":"block",
            });
        });
            $("#head2").mouseleave(function() {
                $(".son2").css({
                    "display":"none",
                });
        
            });
            $("#head3").mouseover(function() {
                $(".son3").css({
                    "display":"block",
                });
            });
                $("#head3").mouseleave(function() {
                    $(".son3").css({
                        "display":"none",
                    });
            
                });
                $("#head4").mouseover(function() {
                    $(".son4").css({
                        "display":"block",
                    });
                });
                    $("#head4").mouseleave(function() {
                        $(".son4").css({
                            "display":"none",
                        });
                
                    });
                    $("#head5").mouseover(function() {
                        $(".son5").css({
                            "display":"block",
                        });
                    });
                        $("#head5").mouseleave(function() {
                            $(".son5").css({
                                "display":"none",
                            });
                    
                        });

                        $(function () {
                            var aBtns = $(".play").find("ol li");
                            var oUl = $(".play").find("ul");
                            var iNow = 0;
                            var timer = null;
                    
                            $(".play").mouseenter(function () {
                              clearInterval(timer);
                            });
                    
                            $(".play").mouseleave(function () {
                              //轮播
                              timer = setInterval(function () {
                                iNow++;
                                tab();
                              }, 2000);
                            });
                    
                            aBtns.click(function () {
                              iNow = $(this).index();
                              tab();
                            });
                    
                            //轮播
                            timer = setInterval(function () {
                              iNow++;
                              tab();
                            }, 2000);
                    
                            function tab() {
                              aBtns.removeClass("active").eq(iNow).addClass("active");
                    
                              if (iNow == aBtns.size()) {
                                aBtns.eq(0).addClass("active");
                              }
                    
                              oUl.animate(
                                {
                                  top: iNow * -400,
                                },
                                500,
                                function () {
                                  //判断是否是最后一张图片
                                  if (iNow === aBtns.size()) {
                                    iNow = 0;
                                    oUl.css("top", 0);
                                  }
                                }
                              );
                            }
                          });
    return {
        body: body
      };
});
