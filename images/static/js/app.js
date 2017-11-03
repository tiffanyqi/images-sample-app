function getCorgi() {
    var corgis = [
        "http://cdn.akc.org/corgi-4.jpg",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/13417489_1727894694118512_6809314816731714698_n.jpg?oh=805de1de7648ae057f1a7af6852525eb&oe=5A642741",
        "http://cdn3-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-4.jpg",
        "http://mosaicsandcorgis.com/wp-content/uploads/2015/06/DSC_9511.jpg",
        "http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg",
        "http://cdn2-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-6.jpg",
        "http://3.bp.blogspot.com/-AXnXOPZgqMk/Un-xCBAa4gI/AAAAAAAAsWA/z_lZsvDoCRk/s1600/derpstages.jpg",
        "http://1.bp.blogspot.com/-5HJshY2CgMs/Un-x7BxZfcI/AAAAAAAAsWM/kwRcF-G11Fo/s640/derpoc.jpg",
        "http://buzzsharer.com/wp-content/uploads/2015/06/jumping-corgi-winter.jpg",
        "http://4fluffypaws.com/wp-content/uploads/2017/02/corgi-jumping-off-dock.png"
    ];
    var randomNumber = Math.floor((Math.random() * corgis.length));
    var chosenCorgi = corgis[randomNumber];
    document.getElementById("corgi_image").src = chosenCorgi;
}