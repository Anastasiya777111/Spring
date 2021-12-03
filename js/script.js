const cardBox = document.querySelector('.mainContent .containerMain .displ1');

function getCardHtml(el) {
    return `
        <a class="card shadow">
            <div class="iconCard">
                <img class="iconCardSmall" src="${el.img}">
            </div>
            <div class="sizeTextCard">
                <h3 class="cardDesc">${el.title}</h3>
                <p>
                ${el.desc}
                </p>
            </div>
        </a>
    `;
  }

  function renderFirst() {
    for (let i = 0; i < data.length; i++) {
      const cardHtml = getCardHtml(data[i]);
      cardBox.insertAdjacentHTML('beforeEnd', cardHtml);
    }
  }
  
  renderFirst();
  