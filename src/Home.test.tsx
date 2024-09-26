import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('renders Healthy Eats title', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const titleElement = screen.getByText(/Healthy Eats/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders View Grocery List button', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText(/View Grocery List/i);
  expect(buttonElement).toBeInTheDocument();
});
