const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', () => {

  let player;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let hand;
  let tcard;
  let turn;
  let pointwinner;

  beforeEach(() => {
     card1 = new Card ('Superman',6,9,7);
     card2 = new Card ('Scarlet Witch',7,10,5);
     card3 = new Card ('Black Widow',8,6,9);
     card4 = new Card ('The Flash',7,4,10);
     card5 = new Card ('Wonder Woman',8,7,5);
     card6 = new Card ('Batman',10,5,6);
     hand = [card1,card2,card3,card4,card5,card6];
     player = new Player ('Player1',hand);

  });

  test('Player should have name', () => {
    expect(player.name).toBe("Player1");
  });
  test('Player should have 6 cards', () => {
    expect(player.card.length).toBe(6);
  });
  test('Player card 6 should have title Batman', () => {
    expect(player.card[5].name).toBe("Batman");
  });
  test('Player card 6 should have intelligence of 10', () => {
    expect(player.card[5].intelligence).toBe(10);
  });
  test('Player card 6 should have strength of 5', () => {
    expect(player.card[5].strength).toBe(5);
  });
  test('Player card 6 should have agility of 6', () => {
    expect(player.card[5].agility).toBe(6);
  });

});
