import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {  
  it('should render same text passed into title prop', async () => {
    render(<Header title="Cats"/>);
    const headingElement = screen.getByText(/Cats/i);
    expect(headingElement).toBeInTheDocument();
  });
})

// it('should render same text passed into title prop using role', async () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByRole("heading", {name: "My header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop using title', async () => {
//   render(<Header title="My"/>);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title using text id', async () => {
//   render(<Header title="My"/>);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title using find by', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title using query by', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title using find all by', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = await screen.findAllByRole("heading");
//   expect(headingElement.length).toBe(2);
// });