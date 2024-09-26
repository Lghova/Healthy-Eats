import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GroceryList from "./GroceryList";

it("renders Grocery List title", () => {
  render(<GroceryList />);
  const titleElement = screen.getByText(/Grocery List/i);
  expect(titleElement).toBeInTheDocument();
});

it("renders initial grocery items", () => {
  render(<GroceryList />);
  const bananaItem = screen.getByText(/Bananas/i);
  const appleItem = screen.getByText(/Apples/i);
  const breadItem = screen.getByText(/Bread/i);

  expect(bananaItem).toBeInTheDocument();
  expect(appleItem).toBeInTheDocument();
  expect(breadItem).toBeInTheDocument();
});

it("adds new item to the grocery list", () => {
  render(<GroceryList />);
  const input = screen.getByPlaceholderText(/New Item/i);
  const addButton = screen.getByText("+");

  fireEvent.change(input, { target: { value: "Milk" } });
  fireEvent.click(addButton);

  const milkItem = screen.getByText(/Milk/i);
  expect(milkItem).toBeInTheDocument();
});

it("removes an item from the grocery list", () => {
  render(<GroceryList />);
  const removeButton = screen.getAllByText(/Remove/i)[0];

  fireEvent.click(removeButton);

  const bananaItem = screen.queryByText(/Bananas/i);
  expect(bananaItem).not.toBeInTheDocument();
});

// test('checks off an item', () => {
//   render(<GroceryList />);
//   const checkbox = screen.getAllByRole('checkbox')[0];

//   fireEvent.click(checkbox);

//   const bananaItem = screen.getByText(/Bananas/i);
//   expect(bananaItem).toHaveStyle('text-decoration: line-through');
// });
