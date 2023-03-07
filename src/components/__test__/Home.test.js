import { render, screen } from '@testing-library/react';
import mockData from './mockData.json';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

jest.mock('../../hooks/useFetch', () => {
  const originalModule = jest.requireActual('../../hooks/useFetch');
  return {
    __esModule: true,
    ...originalModule,
    default: () => ({
      data: mockData,
      isLoading: false,
      error: null,
    }),
  };
});

describe('AllFriendsList', () => {
  it('should render Home with mock useFetch call', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const headingElement1 = screen.getByText(
      `${mockData[0].name.first} ${mockData[0].name.last}`
    );
    const headingElement2 = screen.getByText(
      `${mockData[1].name.first} ${mockData[1].name.last}`
    );

    expect(headingElement1).toBeInTheDocument();
    expect(headingElement2).toBeInTheDocument();
  });
});
