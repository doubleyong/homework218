(function () {
    function msgFactory(type, value) {
        if (this instanceof msgFactory) {
            var result = new this[type](value);
            return result;
        } else {
            return new msgFactory(type, value);
        }
    }

    msgFactory.prototype = {
        email: function (value) {
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!reg.test(value)) {
                this.err = "邮箱格式不正确，请重新输入";
            }else{
                this.succ = "邮箱格式正确";
            }
        }
        ,
        phone: function (value) {
            var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
            if (!reg.test(value)) {
                this.err = "手机号码格式不正确，请重新输入";
            }
        },
        id: function (value) {
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if (!reg.test(value)) {
                this.err = "身份证号码格式不正确，请重新输入";
            }
        }

    }

    window.msgFactory = msgFactory;
})();

