function getCorgi() {
    var corgis = [
        "http://cdn.akc.org/corgi-4.jpg",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/13417489_1727894694118512_6809314816731714698_n.jpg?oh=805de1de7648ae057f1a7af6852525eb&oe=5A642741",
        "http://cdn3-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-4.jpg",
        "http://mosaicsandcorgis.com/wp-content/uploads/2015/06/DSC_9511.jpg",
    ];
    var randomNumber = Math.floor((Math.random() * corgis.length));
    var chosenCorgi = corgis[randomNumber];
    document.getElementById("corgi_image").src = chosenCorgi;
}