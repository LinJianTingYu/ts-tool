'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendQuery = exports.colorToRGB = exports.isObjectEqual = exports.insertStr = exports.checkPwd = exports.changeCase = exports.trim = exports.average = exports.sum = exports.min = exports.max = exports.formArray = exports.remove = exports.intersect = exports.union = exports.unique = exports.sort = exports.contains = exports.changeToChinese = exports.numberToChinese = exports.random = exports.isCardID = exports.checkStr = exports.copyTextToClipboard = exports.shuffle = exports.elementIsVisibleInViewport = exports.scrollToTop = exports.getScrollPosition = exports.removeClass = exports.addClass = exports.hasClass = exports.download = exports.injectScript = exports.getQueryString = exports.removeHtmltag = exports.isPC = exports.isIos = exports.isSpider = exports.isQQBrowser = exports.isDeviceMobile = exports.isWeiXin = exports.isSet = exports.isPromise = exports.isSymbol = exports.isError = exports.isRegExp = exports.isDate = exports.isArray = exports.isObj = exports.isUndefined = exports.isNull = exports.isFunction = exports.isBoolean = exports.isNumber = exports.isString = exports.isURL = exports.isPhone = exports.isMobile = exports.isEmail = void 0;
// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
// var _arguments = arguments;
// 1.邮箱
function isEmail(s) {
    return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s));
}
exports.isEmail = isEmail;
;
// 2.手机号码
function isMobile(s) {
    return (/^1[0-9]{10}$/.test(s + ''));
}
exports.isMobile = isMobile;
;
// 3.电话号码
function isPhone(s) {
    return (/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s + ''));
}
exports.isPhone = isPhone;
;
// 4.是否url地址
function isURL(s) {
    return (/^http[s]?:\/\/.*/.test(s));
}
exports.isURL = isURL;
;
// 5.是否字符串
function isString(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}
exports.isString = isString;
;
// 6.是否数字
function isNumber(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
}
exports.isNumber = isNumber;
;
// 7.是否boolean
function isBoolean(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}
exports.isBoolean = isBoolean;
;
// 8.是否函数
function isFunction(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
}
exports.isFunction = isFunction;
;
// 9.是否为null
function isNull(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
}
exports.isNull = isNull;
;
// 10.是否undefined
function isUndefined(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
}
exports.isUndefined = isUndefined;
;
// 11.是否对象
function isObj(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
exports.isObj = isObj;
;
// 12.是否数组
function isArray(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
}
exports.isArray = isArray;
;
// 13.是否时间
function isDate(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
}
exports.isDate = isDate;
;
14; // .是否正则
function isRegExp(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
}
exports.isRegExp = isRegExp;
;
// 15.是否错误对象
function isError(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
}
exports.isError = isError;
;
// 16.是否Symbol函数
function isSymbol(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
}
exports.isSymbol = isSymbol;
;
// 17.是否Promise对象
function isPromise(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
}
exports.isPromise = isPromise;
;
// 18.是否Set对象
function isSet(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
}
exports.isSet = isSet;
;
// 19.是否是微信浏览器
function isWeiXin() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('microMessenger') > -1;
}
exports.isWeiXin = isWeiXin;
;
// 20.是否是移动端
function isDeviceMobile() {
    const ua = navigator.userAgent.toLowerCase();
    return (/android|webos|iphone|ipod|balckberry/i.test(ua));
}
exports.isDeviceMobile = isDeviceMobile;
;
// 21.是否是QQ浏览器
function isQQBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
}
exports.isQQBrowser = isQQBrowser;
;
// 22.是否是爬虫
function isSpider() {
    const ua = navigator.userAgent.toLowerCase();
    return (/adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua));
}
exports.isSpider = isSpider;
;
// 23.是否ios
function isIos() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //安卓手机
        return false;
    }
    else if (u.indexOf('iPhone') > -1) {
        //苹果手机
        return true;
    }
    else if (u.indexOf('iPad') > -1) {
        //iPad
        return false;
    }
    else if (u.indexOf('Windows Phone') > -1) {
        //winphone手机
        return false;
    }
    else {
        return false;
    }
}
exports.isIos = isIos;
;
// 24.是否为PC端
function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
exports.isPC = isPC;
;
// 25.去除html标签
function removeHtmltag(str) {
    return str.replace(/<[^>]+>/g, '');
}
exports.removeHtmltag = removeHtmltag;
;
// 26.获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var search = window.location.search.split('?')[1] || '';
    var r = search.match(reg) || [];
    return r[2];
}
exports.getQueryString = getQueryString;
;
// 27.动态引入js
function injectScript(src) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    var t = document.getElementsByTagName('script')[0];
    t.parentNode && t.parentNode.insertBefore(s, t);
}
exports.injectScript = injectScript;
;
// 28.根据url地址下载
function download(url) {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}
exports.download = download;
;
// 29.el是否包含某个class
function hasClass(el, className) {
    return Array.from(el.classList).indexOf(className) > -1 ? true : false;
}
exports.hasClass = hasClass;
;
// 30.el添加某个class
function addClass(el, className) {
    if (hasClass(el, className)) {
        return;
    }
    el.classList.add(className);
}
exports.addClass = addClass;
;
// 31.el去除某个class
function removeClass(el, className) {
    if (!hasClass(el, className)) {
        return;
    }
    el.classList.remove(className);
}
exports.removeClass = removeClass;
;
// 32.获取滚动的坐标
function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
}
exports.getScrollPosition = getScrollPosition;
;
// 33.滚动到顶部
function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
exports.scrollToTop = scrollToTop;
;
// 34.el是否在视口范围内
function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _el$getBoundingClient = el.getBoundingClientRect(), top = _el$getBoundingClient.top, left = _el$getBoundingClient.left, bottom = _el$getBoundingClient.bottom, right = _el$getBoundingClient.right;
    var _window = window, innerHeight = _window.innerHeight, innerWidth = _window.innerWidth;
    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
exports.elementIsVisibleInViewport = elementIsVisibleInViewport;
;
// 35.洗牌算法随机
function shuffle(arr) {
    var result = [], random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random]);
        arr.splice(random, 1);
    }
    return result;
}
exports.shuffle = shuffle;
;
// 36.拦截粘贴板
function copyTextToClipboard(value) {
    var textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
    }
    catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
exports.copyTextToClipboard = copyTextToClipboard;
;
// 37.判断类型集合
function checkStr(str, type) {
    switch (type) {
        case 'phone':
            //手机号码
            return (/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str));
        case 'tel':
            //座机
            return (/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str));
        case 'card':
            //身份证
            return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str));
        case 'pwd':
            //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return (/^[a-zA-Z]\w{5,17}$/.test(str));
        case 'postal':
            //邮政编码
            return (/[1-9]\d{5}(?!\d)/.test(str));
        case 'QQ':
            //QQ号
            return (/^[1-9][0-9]{4,9}$/.test(str));
        case 'email':
            //邮箱
            return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str));
        case 'money':
            //金额(小数点2位)
            return (/^\d*(?:\.\d{0,2})?$/.test(str));
        case 'URL':
            //网址
            return (/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str));
        case 'IP':
            //IP
            return (/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str));
        case 'date':
            //日期时间
            return (/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str));
        case 'number':
            //数字
            return (/^[0-9]$/.test(str));
        case 'english':
            //英文
            return (/^[a-zA-Z]+$/.test(str));
        case 'chinese':
            //中文
            return (/^[\\u4E00-\\u9FA5]+$/.test(str));
        case 'lower':
            //小写
            return (/^[a-z]+$/.test(str));
        case 'upper':
            //大写
            return (/^[A-Z]+$/.test(str));
        case 'HTML':
            //HTML标记
            return (/<("[^"]*"|'[^']*'|[^'">])*>/.test(str));
        default:
            return true;
    }
}
exports.checkStr = checkStr;
;
// 38.严格的身份证校验
function isCardID(sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误');
        return false;
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    // if (!sId.substr(0, 2)) return
    if (sId.substr(0, 2) && !aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法');
        return false;
    }
    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"), d = new Date(sBirthday);
    if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
        console.log('身份证上的出生日期非法');
        return false;
    }
    // 身份证号码校验
    var sum = 0, weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], codes = "10X98765432";
    for (var i = 0; i < sId.length - 1; i++) {
        sum += Number(sId[i]) * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法');
        return false;
    }
    return true;
}
exports.isCardID = isCardID;
;
// 39.随机数范围
function random(min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    else {
        return null;
    }
}
exports.random = random;
;
// 40.将阿拉伯数字翻译成中文的大写数字
function numberToChinese(num) {
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2)
            re = AA[0] + re;
        re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }
    if (a.length > 1) // 加上小数部分(如果有小数部分)
     {
        re += BB[6];
        for (var i = 0; i < a[1].length; i++) {
            re += AA[a[1].charAt(i)];
        }
    }
    if (re == '一十')
        re = "十";
    if (re.match(/^一/) && re.length == 3)
        re = re.replace("一", "");
    return re;
}
exports.numberToChinese = numberToChinese;
;
// 41.将数字转换为大写金额
function changeToChinese(Num) {
    //判断如果传递进来的不是字符的话转换为字符
    var newNum;
    // if (typeof Num == "number") {
    //   newNum = String(Num);
    // };
    newNum = String(Num).replace(/,/g, ""); //替换tomoney()中的“,”
    newNum = String(Num).replace(/ /g, ""); //替换tomoney()中的空格
    newNum = String(Num).replace(/￥/g, ""); //替换掉可能出现的￥字符
    if (isNaN(Num)) {
        //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return "";
    }
    ;
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(".");
    var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            return "";
            //若数量超过拾亿单位，提示
        }
        var tmpnewchar = "";
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar)
                    tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar)
                    tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar)
                    tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar)
                    tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar)
                    tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar)
                    tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (String(Num).indexOf(".") != -1) {
        if (part[1].length > 2) {
            // alert("小数点之后只能保留两位,系统将自动截断");
            part[1] = part[1].substr(0, 2);
        }
        for (i = 0; i < part[1].length; i++) {
            tmpnewchar = "";
            perchar = part[1].charAt(i);
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i == 0)
                tmpnewchar = tmpnewchar + "角";
            if (i == 1)
                tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search("零零") != -1) {
        newchar = newchar.replace("零零", "零");
    }
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) == "元") {
        newchar = newchar + "整";
    }
    return newchar;
}
exports.changeToChinese = changeToChinese;
;
// 42.判断一个元素是否在数组中
function contains(arr, val) {
    return arr.indexOf(val) != -1 ? true : false;
}
exports.contains = contains;
;
// 43.数组排序，{type} 1：从小到大 2：从大到小 3：随机
function sort(arr) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.sort(function (a, b) {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    });
}
exports.sort = sort;
;
// 44.去重
function unique(arr) {
    if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(arr));
    }
    else {
        var n = {}, r = [];
        for (var i = 0; i < arr.length; i++) {
            if (!n[arr[i]]) {
                n[arr[i]] = true;
                r.push(arr[i]);
            }
        }
        return r;
    }
}
exports.unique = unique;
;
// 45.求两个集合的并集
function union(a, b) {
    var newArr = a.concat(b);
    return unique(newArr);
}
exports.union = union;
;
// 46.求两个集合的交集
function intersect(a, b) {
    a = unique(a);
    return a.map(function (o) {
        return contains(b, o) ? o : null;
    });
}
exports.intersect = intersect;
;
// 47.删除其中一个元素
function remove(arr, ele) {
    var index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
exports.remove = remove;
;
// 48.将类数组转换为数组
function formArray(ary) {
    var arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    }
    else {
        arr = Array.prototype.slice.call(ary);
    }
    ;
    return arr;
}
exports.formArray = formArray;
;
// 49.最大值
function max(arr) {
    return Math.max.apply(null, arr);
}
exports.max = max;
;
// 50.最小值
function min(arr) {
    return Math.min.apply(null, arr);
}
exports.min = min;
;
// 51.求和
function sum(arr) {
    return arr.reduce(function (pre, cur) {
        return pre + cur;
    });
}
exports.sum = sum;
;
// 52.平均值
function average(arr) {
    return sum(arr) / arr.length;
}
exports.average = average;
;
// 53.去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
function trim(str, type) {
    type = type || 1;
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}
exports.trim = trim;
;
// 54.字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
function changeCase(str, type) {
    type = type || 4;
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                }
                else {
                    return word.toLowerCase();
                }
            }).join('');
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}
exports.changeCase = changeCase;
;
// 55.检测密码强度
function checkPwd(str) {
    var Lv = 0;
    if (str.length < 6) {
        return Lv;
    }
    if (/[0-9]/.test(str)) {
        Lv++;
    }
    if (/[a-z]/.test(str)) {
        Lv++;
    }
    if (/[A-Z]/.test(str)) {
        Lv++;
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++;
    }
    return Lv;
}
exports.checkPwd = checkPwd;
;
// // 56.函数节流器
// var debouncer = exports.debouncer = function debouncer(fn, time) {
//     var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
//     if (time - (window.debounceTimestamp || 0) > interval) {
//         fn && fn();
//         window.debounceTimestamp = time;
//     }
// };
// 57.在字符串中插入新字符串
function insertStr(soure, index, newStr) {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}
exports.insertStr = insertStr;
;
// 58.判断两个对象是否键值相同
function isObjectEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
exports.isObjectEqual = isObjectEqual;
;
// 59.16进制颜色转RGBRGBA字符串
function colorToRGB(val, opa) {
    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
    var isOpa = typeof opa == 'number'; //判断是否有设置不透明度
    if (!pattern.test(val)) {
        //如果值不符合规则返回空字符
        return '';
    }
    var v = val.replace(/#/, ''); //如果有#号先去除#号
    var rgbArr = [];
    var rgbStr = '';
    for (var i = 0; i < 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2);
        var num = parseInt(item, 16);
        rgbArr.push(num);
    }
    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
}
exports.colorToRGB = colorToRGB;
;
// 60.追加url参数
function appendQuery(url, params) {
    var query = '';
    for (const k in params) {
        query += '&' + k + '=' + params[k];
    }
    if (!url.includes('?')) {
        url += '?';
        query = query.slice(1);
    }
    url += query;
    return url;
}
exports.appendQuery = appendQuery;
;
