const createMenu = require('../src/restaurant');

const menu = {
  food: {coxinha: 3.90, sanduiche: 9.90},
  drinks: {agua: 3.90, cerveja: 6.90},
}

const myMenu = createMenu(menu);

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(myMenu).toHaveProperty('fetchMenu');
    expect(myMenu.fetchMenu).toBeInstanceOf(Function);
    expect(Object.keys(myMenu.fetchMenu())).toStrictEqual([ 'food', 'drinks' ]);
    expect(menu).toStrictEqual({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    expect(myMenu.consumption).toHaveLength(0);  
    expect(myMenu.order('calabresa-apimentada')).toBe('Item indisponível');
    myMenu.order('agua');
    myMenu.order('coxinha');
    myMenu.order('sanduiche');
    myMenu.order('agua');
    myMenu.order('alirio');
    expect(myMenu.consumption).toHaveLength(4);
    expect(myMenu.pay()).toBeCloseTo(21.60 * 1.1);
    // Escreva todos os testes aqui.
  });
});
