import data from './data.js';
const cardsContainer = document.querySelector('.cards__container');

const cards = data
	.map((el) => {
		return `<div class="card ${
			el.score === 80
				? 'card__red'
				: el.score === 92
				? 'card__yellow'
				: el.score === 61
				? 'card__green'
				: el.score === 72
				? 'card__purple'
				: ''
		}">
    <div class="card__right__side">
       <img src='${el.icon}' alt='${el.category}' class="icon"/>
       <p class="card__right__side__name">${el.category}</p>
    </div>
     <p class="card__score">
       ${el.score} <span class="card__score__out__of">/ 100</span>
     </p>
  </div>`;
	})
	.join('');

cardsContainer.innerHTML = cards;
