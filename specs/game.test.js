const Player = require('../player.js')
const Card = require('../card.js')
const Game = require('../game.js')

describe('Game', () => {

  let player1;
  let player2;


  let game;
  let turn;

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let allcards;
  let player1Score;
  let player2Score;

  beforeEach(() => {


    card1 = new Card ('Superman',6,9,7);
    card2 = new Card ('Scarlet Witch',7,10,5);
    card3 = new Card ('Black Widow',8,6,9);
    card4 = new Card ('The Flash',7,4,10);
    card5 = new Card ('Wonder Woman',8,7,5);
    card6 = new Card ('Batman',10,5,6);
    allcards = [card1,card2,card3,card4,card5,card6];
    game = new Game (allcards,"Player1","No-one yet");


    player1 = new Player('Player1',[]);
    player2 = new Player('Player2',[]);


    game.dealCards(player1);
    game.dealCards(player2);

  });

  test('Player 1 should have name', () => {
    expect(player1.name).toBe("Player1");
  });
  test('Player 1 should have 3 cards', () => {
    expect(player1.card.length).toBe(3);
  });
  test('Player 2 should have name', () => {
    expect(player2.name).toBe("Player2");
  });
  test('Player 2 should have 3 cards', () => {
    expect(player2.card.length).toBe(3);
  });

  //name: 'Superman', intelligence: 6, strength: 9, agility: 7 },
  //         Card { name: 'Black Widow', intelligence: 8, strength: 6, agility: 9 },
  //         Card { name: 'Wonder Woman', intelligence: 8, strength: 7, agility: 5 }

// Test dealing function :  all outcomes need to be tested


  // Player 1 cards begin
  test('Player 1 card 1 should have name of Superman', () => {
     expect(player1.card[0].name).toBe("Superman");
  });

  test('Player 1 card 1 should have intelligence of 6', () => {
     expect(player1.card[0].intelligence).toBe(6);
  });

  test('Player 1 card 1 should have strength of 9', () => {
     expect(player1.card[0].strength).toBe(9);
  });
  test('Player 1 card 1 should have agility of 7', () => {
     expect(player1.card[0].agility).toBe(7);
  });

  test('Player 1 card 2 should have name of Black Widow', () => {
     expect(player1.card[1].name).toBe("Black Widow");
  });

  test('Player 1 card 2 should have intelligence of 8', () => {
     expect(player1.card[1].intelligence).toBe(8);
  });

  test('Player 1 card 2 should have strength of 6', () => {
     expect(player1.card[1].strength).toBe(6);
  });
  test('Player 1 card 2 should have agility of 9', () => {
     expect(player1.card[1].agility).toBe(9);
  });

   test('Player 1 card 3 should have name of Wonder Woman', () => {
      expect(player1.card[2].name).toBe("Wonder Woman");
   });

   test('Player 1 card 3 should have intelligence of 8', () => {
      expect(player1.card[2].intelligence).toBe(8);
   });

   test('Player 1 card 3 should have strength of 7', () => {
      expect(player1.card[2].strength).toBe(7);
   });
   test('Player 1 card 3 should have agility of 5', () => {
      expect(player1.card[2].agility).toBe(5);
   });
  // Player 1 cards end
  //*********************************************

  //*********************************************
  //  Player 2 cards begin


  test('Player 2 card 1 should have name of Scarlet Witch', () => {
     expect(player2.card[0].name).toBe("Scarlet Witch");
  });

  test('Player 2 card 1 should have intelligence of 7', () => {
     expect(player2.card[0].intelligence).toBe(7);
  });

  test('Player 2 card 1 should have strength of 10', () => {
     expect(player2.card[0].strength).toBe(10);
  });
  test('Player 2 card 1 should have agility of 5', () => {
     expect(player2.card[0].agility).toBe(5);
  });

  test('Player 2 card 2 should have name of The Flash', () => {
     expect(player2.card[1].name).toBe("The Flash");
  });

  test('Player 2 card 2 should have intelligence of 7', () => {
     expect(player2.card[1].intelligence).toBe(7);
  });

  test('Player 2 card 2 should have strength of 4', () => {
     expect(player2.card[1].strength).toBe(4);
  });


  test('Player 2 card 2 should have agility of 10', () => {
     expect(player2.card[1].agility).toBe(10);
  });

   test('Player 2 card 3 should have name of Batman', () => {
      expect(player2.card[2].name).toBe("Batman");
   });

   test('Player 2 card 3 should have intelligence of 10', () => {
      expect(player2.card[2].intelligence).toBe(10);
   });

   test('Player 2 card 3 should have strength of 5', () => {
      expect(player2.card[2].strength).toBe(5);
   });

   test('Player 2 card 3 should have agility of 6', () => {
      expect(player2.card[2].agility).toBe(6);
   });
  // Player 2 cards end

  test('Player 2 should have strength card rating of 10 for top card', () => {
     player2points = game.getCategoryPoints(player2,"strength");
     expect(player2points).toBe(10);
  });


//Player 1 grid
  //name: 'Superman', intelligence: 6, strength: 9, agility: 7 },
  //         Card { name: 'Black Widow', intelligence: 8, strength: 6, agility: 9 },
  //         Card { name: 'Wonder Woman', intelligence: 8, strength: 7, agility: 5 }

//Player 2 grid
//name: 'Scarlet Witch',intelligence: 7,strength: 10,agility: 5 },
// Card { name: 'The Flash', intelligence: 7, strength: 4, agility: 10 },
// Card { name: 'Batman', intelligence: 10, strength: 5, agility: 6

// testing getCategoryPoints method

  test('Player 1 should have strength card rating of 9 for top card', () => {
     player1points = game.getCategoryPoints(player1,"strength");
     expect(player1points).toBe(9);
    });


  test('Player 2 should have strength card rating of 10 for top card', () => {
      player2points = game.getCategoryPoints(player2,"strength");
      expect(player2points).toBe(10);
   });

  test('Player 1 should win top card as agility = 7, player2 is 5', () => {
    player1points = game.getCategoryPoints(player1,"agility");
    player2points = game.getCategoryPoints(player2,"agility");
    game.setPointWinner(player1points,player2points);
    expect(game.turnwinner).toBe("Player1");
  });

  test('Player 2 should win top card as stregth =10, player 1 is 9', () => {
    player1points = game.getCategoryPoints(player1,"strength");
    player2points = game.getCategoryPoints(player2,"strength");
    game.setPointWinner(player1points,player2points);
    expect(game.turnwinner).toBe("Player2");
  });

  test('Player 1 should win and gain a card', () => {
    player1points = game.getCategoryPoints(player1,"agility");
    player2points = game.getCategoryPoints(player2,"agility");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    expect(player1.card.length).toBe(4);
  });

  test('Player 2 should lose and lose a card', () => {
    player1points = game.getCategoryPoints(player1,"agility");
    player2points = game.getCategoryPoints(player2,"agility");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    expect(player2.card.length).toBe(2);
  });


  test('Player 1 should win twice and gain 2 cards', () => {
    player1points = game.getCategoryPoints(player1,"agility");
    player2points = game.getCategoryPoints(player2,"agility");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    game.whoHasWonGame(player1,player2);
    expect(game.turnwinner).toBe("Player1");
    expect(game.gamewinner).toBe("No-one yet");
    expect(player1.card.length).toBe(4);

    player1points = game.getCategoryPoints(player1,"intelligence");
    player2points = game.getCategoryPoints(player2,"intelligence");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    expect(game.turnwinner).toBe("Player1");
    game.whoHasWonGame(player1,player2);
    expect(game.gamewinner).toBe("No-one yet");
    expect(player1.card.length).toBe(5);
  });

  test('Player 1 should win 3 times and gain 3 cards and win', () => {
    player1points = game.getCategoryPoints(player1,"agility");
    player2points = game.getCategoryPoints(player2,"agility");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    expect(player1.card.length).toBe(4);
    game.whoHasWonGame(player1,player2);
    expect(game.gamewinner).toBe("No-one yet");


    player1points = game.getCategoryPoints(player1,"intelligence");
    player2points = game.getCategoryPoints(player2,"intelligence");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    expect(player1.card.length).toBe(5);
    game.whoHasWonGame(player1,player2);
    expect(game.gamewinner).toBe("No-one yet");


    player1points = game.getCategoryPoints(player1,"strength");
    player2points = game.getCategoryPoints(player2,"strength");
    game.setPointWinner(player1points,player2points);
    game.actOnWin(player1,player2);
    game.whoHasWonGame(player1,player2);
    expect(player1.card.length).toBe(6);
    expect(game.gamewinner).toBe("Player1");

    });
// game sequence for player 2 to win.
test('Player 2 should win twice and gain 2 cards', () => {
  player1points = game.getCategoryPoints(player1,"intelligence");
  player2points = game.getCategoryPoints(player2,"intelligence");
  game.setPointWinner(player1points,player2points);
  game.actOnWin(player1,player2);
  game.whoHasWonGame(player1,player2);
  expect(game.turnwinner).toBe("Player2");
  expect(game.gamewinner).toBe("No-one yet");
  expect(player2.card.length).toBe(4);

  player1points = game.getCategoryPoints(player1,"agility");
  player2points = game.getCategoryPoints(player2,"agility");
  game.setPointWinner(player1points,player2points);
  game.actOnWin(player1,player2);
  expect(game.turnwinner).toBe("Player2");
  game.whoHasWonGame(player1,player2);
  expect(game.gamewinner).toBe("No-one yet");
  expect(player2.card.length).toBe(5);
});

test('Player 2 should win 3 times and gain 3 cards and win', () => {
  player1points = game.getCategoryPoints(player1,"intelligence");
  player2points = game.getCategoryPoints(player2,"intelligence");
  game.setPointWinner(player1points,player2points);
  game.actOnWin(player1,player2);
  expect(game.turnwinner).toBe("Player2");
  expect(player2.card.length).toBe(4);
  game.whoHasWonGame(player1,player2);
  expect(game.gamewinner).toBe("No-one yet");


  player1points = game.getCategoryPoints(player1,"agility");
  player2points = game.getCategoryPoints(player2,"agility");
  game.setPointWinner(player1points,player2points);
  game.actOnWin(player1,player2);
  expect(game.turnwinner).toBe("Player2");
  expect(player2.card.length).toBe(5);
  game.whoHasWonGame(player1,player2);
  expect(game.gamewinner).toBe("No-one yet");


  player1points = game.getCategoryPoints(player1,"intelligence");
  player2points = game.getCategoryPoints(player2,"intelligence");
  game.setPointWinner(player1points,player2points);
  game.actOnWin(player1,player2);
  expect(game.turnwinner).toBe("Player2");
  game.whoHasWonGame(player1,player2);
  expect(player2.card.length).toBe(6);
  expect(game.gamewinner).toBe("Player2");

  });

});
