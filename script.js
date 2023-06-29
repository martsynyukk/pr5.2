window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("CH");
  var buttonC = document.getElementById("P");
  var buttonCI = document.getElementById("R");
  var buttonSH = document.getElementById("O");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("М. Гоголь Дивуєшся дорогоцінності мови нашої: в ній що не звук, то подарунок, все крупно, зернисто, як самі перла.");
  });

  buttonGr.addEventListener("click", function() {
    alert("Українці — стародавній народ, а мова їхня мова багатша і всеосяжніша, ніж персидська, китайська, монгольська і всілякі інші.");
  });

  buttonC.addEventListener("click", function() {
    alert("Раби — це нація, котра не має Слова. Тому й не зможе захистить себе.");
  });

  buttonCI.addEventListener("click", function() {
    alert("Відчуваю й усвідомлюю, яка це красива й легка українська мова.");
  });

  buttonSH.addEventListener("click", function() {
    alert("Для всіх ти мертва і смішна, Для всіх ти бідна і нещасна, Моя Україно пре-красна, Пісень і волі сторона.");
  });
};
