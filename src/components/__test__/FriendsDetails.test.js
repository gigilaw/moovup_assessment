import { render, screen } from '@testing-library/react';
import mockData from './mockData.json';
import { BrowserRouter } from 'react-router-dom';
import FriendDetails from '../FriendDetails';

const mockLocation = {
  pathname: '/friends/1',
  hash: '',
  search: '',
  state: {},
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockLocation,
}));

describe('AllFriendsList', () => {
  it('should render correct mock data name with and console.warn due to missing location data', () => {
    mockLocation.state = { friend: mockData[0] };

    jest.spyOn(global.console, 'warn').mockImplementation();
    render(
      <BrowserRouter>
        <FriendDetails />
      </BrowserRouter>
    );
    const headingElement = screen.getByText(
      `${mockData[0].name.first} ${mockData[0].name.last}`
    );
    expect(headingElement).toBeInTheDocument();
    expect(console.warn).toBeCalledTimes(1);
  });

  it('should render correct mock data name', () => {
    mockLocation.state = { friend: mockData[1] };

    render(
      <BrowserRouter>
        <FriendDetails />
      </BrowserRouter>
    );
    const headingElement = screen.getByText(
      `${mockData[1].name.first} ${mockData[1].name.last}`
    );
    expect(headingElement).toBeInTheDocument();
  });
});
