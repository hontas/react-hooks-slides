import { act } from 'react-dom/test-utils';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import UseCustomHook from './UseCustomHook';

describe('TestEffectHook', () => {
  it('should persist to locale storage', () => {
    const { container, getByText } = render(<UseCustomHook />);
    fireEvent.input(getByText('Persisted input'), 'hej');
    // act
    expect(localStorage.getItem('key')).toBe();
  });
});
