document.write("HELLO我是林鑫辰 ")

var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count+=2;
      counterElement.textContent = count;
    }