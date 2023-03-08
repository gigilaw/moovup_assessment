import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RouteNotFound from '../RouteNotFound';

describe('RouteNotFound', () => {
  it('should render correct text', () => {
    render(
      <BrowserRouter>
        <RouteNotFound />
      </BrowserRouter>
    );
    const headingElement = screen.getByText(/Page Not Found!/i);

    expect(headingElement).toBeInTheDocument();
  });
});
