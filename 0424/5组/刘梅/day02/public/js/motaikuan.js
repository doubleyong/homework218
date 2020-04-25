/**
 * Created by 98088 on 2020/4/14.
 */
var importCssJs = {
    css: function(path) {
        if(!path || path.length === 0) {
            throw new Error('参数"path"错误');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function(path) {
        if(!path || path.length === 0) {
            throw new Error('参数"path"错误');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}
//引用方法
importCssJs.css('layui-v2.5.6/layui/css/layui.css');
importCssJs.js('jQuery%20JavaScript%20Library%20v3.4.1.js');
importCssJs.js('../layui-v2.5.6/layui/layui.js');
importCssJs.js('../layui-v2.5.6/layui/layui.all.js');
importCssJs.js('../layer-v3.1.1/layer/layer.js');
importCssJs.js('../layer-v3.1.1/layer-v3.1.1/layer/layer.js');

