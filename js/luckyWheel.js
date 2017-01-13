

$(function(){

    function startmarquee(lh,speed,delay) {
        var p=false;
        var t;
        var o=document.getElementById("marqueebox");
        o.innerHTML+=o.innerHTML;
        o.style.marginTop=0;
        o.onmouseover=function(){p=true;}
        o.onmouseout=function(){p=false;}
        function start(){
            t=setInterval(scrolling,speed);
            if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
        }
        function scrolling(){
            if(parseInt(o.style.marginTop)%lh!=0){
                o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
                if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0;
            }else{
                clearInterval(t);
                setTimeout(start,delay);
            }
        }
        setTimeout(start,delay);
    }
    startmarquee(20,20,1500);

    $('.wheel').click(function(){
        $('.wheel').rotate({ //inner内部指针转动，outer外部转盘转动
            duration : 15000, //转动时间
            angle : 0, //开始角度
            animateTo : 3600 + 270, //转动角度
            easing : $.easing.easeOutSine, //动画扩展
            callback : function() {
                console.log("hahaha");
            }
        });
    });

    $('.rule').click(function(){
        $('.mask').fadeIn();
    });


});


