import rootReducer from 'reducers';
import { hamburgerClicked } from 'actions';

const initialState = {
  actualProduct: null,
};
describe('rootReducer', () => {
  it('Should return default state', () => {
    const newState = rootReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
  it('Should return new state if receiving action hamburgerClicked', () => {
    const newState = rootReducer(undefined, hamburgerClicked);
    const expectedValue = {
      cartIconAnim: false,
    };
    expect(newState.cartIconAnim).toEqual(expectedValue.cartIconAnim);
  });
});
