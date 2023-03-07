import { render, screen } from '@testing-library/react';
import AllFriendsList from '../AllFriendsList';
import mockData from './mockData.json';
import { BrowserRouter } from 'react-router-dom';

describe('AllFriendsList', () => {
  it('should render correct mock data name', () => {
    render(
      <BrowserRouter>
        <AllFriendsList allFriends={mockData} />
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
