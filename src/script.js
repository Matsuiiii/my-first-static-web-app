const colors = [
    "赤　りんごの皮を食べましょう。ポリフェノールが豊富です♬",
    "紫　ブルーベリーで目の疲れをリセット！",
    "黄色",
    // 思いついたら追加
];

function dokidoki() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("color");
    quoteElement.textContent = quotes[randomIndex];
}
