function love() {
    let array = [
        "😀", "😂","❤", "😆", "😊","❄️"
    ]
    // var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function (e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#ff2d51";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        $elem.style["user-select"] = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        // 随机从数组中取一个
        $elem.innerText = array[Math.floor((Math.random()*array.length))]
        $elem.style.fontSize = Math.random() * 10 + 20 + "px";
        var increase = 0;
        var anim;
        setTimeout(function () {
            anim = setInterval(function () {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};

export default love;