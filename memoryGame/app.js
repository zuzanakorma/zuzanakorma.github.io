document.addEventListener("DOMContentLoaded", () => {
  const fruits = [
    "apple",
    "banana",
    "watermelon",
    "strawberry",
    "lemon",
    "cherries",
  ];
  const cardArray = [];

  for (let i = 0; i < fruits.length; i++) {
    const my_dict = {};
    my_dict["name"] = fruits[i];
    my_dict["img"] = "images/" + fruits[i] + ".png";
    cardArray.push(my_dict);
    cardArray.push(my_dict);
  }

  // console.log(cardArray);

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const boxElement = document.querySelector(".box");
  const buttonElement = document.querySelector(".close");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/triangle.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for match
  function checkForMatch() {
    // console.log("checkformatch");
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/triangle.png");
      cards[optionTwoId].setAttribute("src", "images/triangle.png");
      cards[optionOneId].addEventListener("click", flipCard);
      cards[optionTwoId].addEventListener("click", flipCard);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      // console.log("reset");
      // remove all event listeners to prevent clicks
      let el = document.getElementById("game");
      let elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      boxElement.classList.remove("hidden");
      buttonElement.addEventListener("click", function () {
        location.reload();
      });
    }
  }

  //flip your card
  function flipCard() {
    // console.log("flipcard");
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    this.removeEventListener("click", flipCard);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
