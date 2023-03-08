/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';
import mockData from './mockData.json';
import { BrowserRouter } from 'react-router-dom';

describe('Search Bar', () => {
  it('should show label element', () => {
    render(
      <BrowserRouter>
        <SearchBar allFriends={mockData} />
      </BrowserRouter>
    );
    const inputElement = screen.getByLabelText(/Search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type and see search results in search bar', async () => {
    render(
      <BrowserRouter>
        <SearchBar allFriends={mockData} />
      </BrowserRouter>
    );
    const autocompleteElement = screen.getByRole('combobox');
    const testName = `${mockData[0].name.first} ${mockData[0].name.last}`;

    // Wrapped in `act` due to mui behaviour
    act(() => {
      userEvent.type(autocompleteElement, testName);
    });
    expect(autocompleteElement.value).toBe(testName);

    expect(screen.getByText(testName)).toBeInTheDocument();
  });

  it('should be able to type and see noOptionsText with unfound input', async () => {
    render(
      <BrowserRouter>
        <SearchBar allFriends={mockData} />
      </BrowserRouter>
    );
    const autocompleteElement = screen.getByRole('combobox');

    // Wrapped in `act` due to mui behaviour
    act(() => {
      userEvent.type(autocompleteElement, 'abcde');
    });
    expect(screen.getByText(/Bear not found/)).toBeInTheDocument();
  });
});
