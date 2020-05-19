(function(){

    var _isAuto=false;//默认自动播放为false
    var _ele="#slider";//操作的选择器
    var _index = 0;//当前图片默认为第一张
    var _speed=1500;//图片切换速度
    var _lunbo={
        _init:function(obj){
            _isAuto=obj.auto||isAuto;//默认自动播放为false
            _ele=obj.ele||ele;//操作的选择器
            if(typeof obj.speed=="string"){
                if(obj.speed=="fast"){
                    obj.speed=1000;
                }else if(obj.speed=="normal"){
                    obj.speed=1500;
                }else if(obj.speed=="slow"){
                    obj.speed=2500;
                }
            }
            _speed=obj.speed||speed;
//这里用this报错，就改了
            _lunbo._showCicrl();
            _lunbo._arrows();
            _lunbo._right();
            _lunbo._left();
            _lunbo._clickCircl();
            // lunbo.autoplay();
            if(_isAuto){//如果自动播放为真，才进入自动播放
                // autoplay();
                _lunbo._autoplay();
            }
            _lunbo._mouseOver();
            _lunbo._mouseOut();
        },
//生成圆点
        _showCicrl:function(){
            var str='';
            str+= "<li class='on'></li>";//默认第一个小圆点有样式
            for(var i=1;i<$(_ele).find(' figure').length;i++){
                str+= "<li></li>"
            }
            $(_ele).append(
                ` 
                <div id='tab'>
                    <ul>
                        ${str}
                    </ul>
                </div>`);
        },
//动态生成箭头
        _arrows:function(){
            $(_ele).append(
                "<div id='btn'>"+
                "<div id='left'>&lt;</div>"+
                "<div id='right'>&gt;</div>"+
                "</div>")
        },
//图片增减"active"
        _figureClassChange:function (){
//给每一个图片先移除class
            $(_ele).find('figure').each(function(index,item){
                $(item).removeClass('active');
            });
//给当前的图片添加class
            var arr = $(_ele).find(' figure');
            $(arr[_index]).addClass('active');
        },
//圆点增减class "on"
        _dotsClassChange:function (){
            $('#tab').find('li').each(function(index,item){
                $(item).removeClass('on');
            });
            var arr = $('#tab').find('li');
            $(arr[_index]).addClass('on');
        },
        /* //封装图片和小圆点增减class样式
        function classChange(ele,classStyle){
        $(ele).find(' figure').each(function(index,item){
        $(item).removeClass(classStyle);
        });
        var arr = $(ele);
        $(arr[index]).addClass(classStyle);
        } */
//左箭头点击
        _left:function(){
            $("#left").click(function(){
                _index--;
                if(_index<0){
                    _index=$(_ele).find('figure').length-1;
                }
                /* classChange('#slider','active');
                classChange('#tab','on'); */
                _lunbo._figureClassChange();//先移除图片的所有样式，给当前的添加样式
                _lunbo._dotsClassChange();
            })
        },
//右箭头点击
        _right:function(){
            $("#right").on("click",function(){
                _index++;
                if(_index>=$(_ele).find('figure').length){
                    _index=0;
                }
                _lunbo._figureClassChange();
                _lunbo._dotsClassChange();
            })
        },
//点击圆点
        _clickCircl:function(){
            $("#tab li").each(function(index,item){
                $(item).click(function(){ //小圆点点击的时候，先移出所有小圆点样式，再给当前的小圆点添加样式
                    $('#tab').find('li').each(function(index,item){//先移出所有小圆点的样式
                        $(item).removeClass('on');
                    });
                    $(this).addClass('on');
//实现图片和小圆点的一一对应
//这里的代码没办法用封装好的figureClassChange（），原因还在找
                    $(_ele).find('figure').each(function(index,item){
                        $(item).removeClass('active');
                    });
                    var arr = $(_ele).find('figure');
                    $(arr[_index]).addClass('active');
                    /* classChange('#slider','active'); */
                })
            })
        },
//自动播放
        _autoplay:function(){
            timer= setInterval(function(){
                $("#right").click(); //JQuery 自动触发事件
            },_speed)
        },
//鼠标移入
        _mouseOver:function(){
            $(_ele).find('figure').on("mouseover",function(){
                clearInterval(timer);
            })
        },
//鼠标移出
        _mouseOut:function(){
            $(_ele).find('figure').on("mouseout",function(){
                _lunbo._autoplay();
            })
        }
    }
    window._lunbo={_init:_lunbo._init};
})();