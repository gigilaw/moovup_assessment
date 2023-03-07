import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('should render correct title', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const headingElement = screen.getByText(/moovup Assessment/i);

    expect(headingElement).toBeInTheDocument();
  });
});
