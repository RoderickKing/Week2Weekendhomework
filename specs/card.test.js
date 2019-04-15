const Card = require('../card')


describe('Card', () => {

  let card;

  beforeEach(() => {
     card = new Card ('Superman',6,9,7);
  });


  test('card should have name', () => {
    expect(card.name).toBe("Superman");
  });

  test('card should have Intelligence', () => {
    expect(card.intelligence).toBe(6);
  });
  test('card should have Strength', () => {
    expect(card.strength).toBe(9);
  });

  test('card should have an intelligence of 6', () => {
    expect(card.getCategoryPoints("intelligence")).toBe(6);
  });

  test('card should have a Agility of 7', () => {
    expect(card.getCategoryPoints("agility")).toBe(7);
  });
  test('card should have a strength of 9', () => {
    expect(card.getCategoryPoints("strength")).toBe(9);
  });

});
