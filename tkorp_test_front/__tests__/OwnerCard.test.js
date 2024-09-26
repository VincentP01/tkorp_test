import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import OwnerCard from "../components/OwnerCard"; // Assurez-vous que le chemin est correct

test("renders owner cards with correct names", () => {
  const mockData = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Smith" },
  ];

  // Render the OwnerCard component with mock data
  render(<OwnerCard data={mockData} />);

  // Check that the names are rendered correctly
  expect(screen.getByText("John Doe")).toBeDefined();
  expect(screen.getByText("Jane Smith")).toBeDefined();
});
