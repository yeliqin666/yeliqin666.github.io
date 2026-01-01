(function () {
    // 添加应用加载完成标志位
    window.unlockMusicLoaded = false;
    
    // 当页面加载完成时设置标志位
    window.addEventListener('load', function() {
        window.unlockMusicLoaded = true;
    });
    
    setTimeout(function () {
        var ele = document.getElementById("loader-tips-timeout");
        // 只有在应用未加载完成时才显示超时提示
        if (ele != null && !window.unlockMusicLoaded) {
            ele.hidden = false;
        }
    }, 2000);

    var ua = navigator && navigator.userAgent;
    var detected = (function () {
        var m;
        if (!ua) return true;
        if (/MSIE |Trident\//.exec(ua)) return true; // no IE
        
        // Edge >= 17
        m = /Edge\/([\d.]+)/.exec(ua);
        if (m) return parseInt(m[1]) < 17;
        
        // Chrome >= 58
        m = /Chrome\/([\d.]+)/.exec(ua);
        if (m) return parseInt(m[1]) < 58;
        
        // Firefox >= 45
        m = /Firefox\/([\d.]+)/.exec(ua);
        if (m) return parseInt(m[1]) < 45;
        
        // Safari >= 12
        m = /Version\/(\d+)\.\d+.*Safari/.exec(ua);
        if (m) return parseInt(m[1]) < 12;
        
        // Opera >= 45
        m = /Opera\/([\d.]+)/.exec(ua);
        if (m) return parseInt(m[1]) < 45;
        
        // 其他浏览器默认支持
        return false;
    })();
    if (detected) {
        document.getElementById('loader-tips-outdated').hidden = false;
        document.getElementById("loader-tips-timeout").hidden = false;
    }
})();
