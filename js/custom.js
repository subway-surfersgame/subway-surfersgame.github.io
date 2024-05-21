/*

Custom script

This file will not be overwritten by the updater

*/

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}
function sortByOrder(games) {
  return games.sort((a, b) => b.order - a.order);
}
/* Lấy thông tin về game trong file data hiển thị */
function loadAllGame(dataJson){
  fetch(dataJson,{
      headers: {
          'Content-Type': 'application/json',
          },
      }).then(response => response.json())
  .then(data => {
      listGame = sortByOrder(data);
      for (var j=listGame.length-1; j>=0; j--) {
          var item = listGame[j];
          var img = "/images/logo/"+item.img;
          var slug = item.slug + ".html";
          var title = item.title;
          const htmlItem = `
              <a href="${slug}">
                  <div class="game-item">
                      <div class="list-game">
                          <div class="list-thumbnail"><img src="${img}" class="lazyload" alt="${title}"></div>
                      </div>
                  </div>
              </a>
          `;
          const e = document.createElement('div');
          e.className  = "col-lg-2 col-md-4 col-6 grid-3";
          e.innerHTML = htmlItem;
          document.getElementById('listgame').appendChild(e);
      }
  });
}

window.addEventListener('load', function() {
  loadAllGame("/game/all.json");
});