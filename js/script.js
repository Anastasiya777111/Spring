const cardBox = document.querySelector('.mainContent .containerMain .displ1');

const searchInput = document.querySelector('#search');

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

 function searchFilter(result) {
  result.forEach(el => {
       cardBox.insertAdjacentHTML('afterbegin', getCardHtml(el));
    });
  }
  
  function errorString() {
      cardBox.insertAdjacentHTML('afterbegin', `<p class="noResults">No results</p>`);
  }

  function clearCardBox() {
     cardBox.innerHTML = '';
  }

  function renderFirst() {
    for (let i = 0; i < data.length; i++) {
      const cardHtml = getCardHtml(data[i]);
      cardBox.insertAdjacentHTML('beforeEnd', cardHtml);
    }
  }
  
  renderFirst();

  searchInput.addEventListener('keyup', e => {
    const result = data.filter(word =>
      word.title.toLowerCase().includes(e.target.value.toLowerCase())||
      word.desc.toLowerCase().includes(e.target.value.toLowerCase())    
    );
    setTimeout(clearCardBox, 300)
    if(result.length != 0){
      setTimeout(searchFilter, 300, result);}else{
       setTimeout(errorString, 300);
    }
    if (e.target.value == '') {
      clearCardBox();
      renderFirst();
    }
  
  });

  