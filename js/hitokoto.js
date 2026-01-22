fetch('https://v1.jinrishici.com/all.json') // 具体接口信息：https://developer.hitokoto.cn/sentence/
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('quote')
        hitokoto.innerText = data.content+'---'+data.author+'《'+data.origin+'》';
    })
    .catch(function (err) {
        console.error(err);
    })



