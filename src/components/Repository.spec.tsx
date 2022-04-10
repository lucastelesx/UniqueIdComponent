import { render } from '@testing-library/react';
import { ListCards } from './ListCards';

jest.mock('Reposiroty')

test('Cards renders correctly', () => {
  const { debug } = render(
    <ListCards />
  )
  debug()
})