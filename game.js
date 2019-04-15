
class Game {

  constructor(deckofcards,turnwinner,gamewinner){
    this.deckofcards = deckofcards;
    this.turnwinner = turnwinner;
    this.gamewinner = gamewinner;

  }

dealCards(player) {
  //
  // evens to player1 odds to player 2
  //
let hand1 = [];
let hand2 = [];

for (let i = 0; i < this.deckofcards.length; i++) {
  if (i % 2 === 0 ) {
      hand1.push(this.deckofcards[i]);
  } else{
      hand2.push(this.deckofcards[i]);
    };
};
if (player.name === "Player1") {
    player.card = hand1; }
    else {
            player.card = hand2;
          }
};

setPointWinner(player1Points,player2Points){
  //   after obvious tests,  if they equal there's no change to the winner
  if (player1Points > player2Points){
      this.turnwinner = "Player1";
      return;
  } else
        {
          if (player2Points > player1Points){
             this.turnwinner = "Player2";
          }
        }
};


getCategoryPoints(player,category){
  let localcard = player.card[0];

  switch (category) {
    case "intelligence":
       return localcard.intelligence;
       break;
    case "strength":
       return localcard.strength;
       break;
    case "agility":
       return localcard.agility;
       break;
    default: break;
  };
};


actOnWin(player1,player2)
{
//
// give the 2 played cards to the winner and place then on the bottom of their cards
// this menas removing from top....
  let card1;
  let card2;



  let maxcard1 = player1.card.length-1;
  let maxcard2 = player2.card.length-1;



  card1 = player1.card[0];
  card2 = player2.card[0];

  player1.card.splice(0,1);
  player2.card.splice(0,1);


  switch (this.turnwinner) {
    case "Player1":
      player1.card[maxcard1] = card1;
      player1.card[maxcard1+1] = card2;
      break;

    case "Player2":
      player2.card[maxcard2] = card1;
      player2.card[maxcard2+1] = card2;
      break;

    default:

  };
};

  whoHasWonGame(player1,player2) {
  if ( player1.card.length === 0) {
     this.gamewinner = "Player2";
   }

  if ( player2.card.length === 0) {
      this.gamewinner = "Player1";
  };
};
};
module.exports = Game;
