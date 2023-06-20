import { render, screen, waitFor } from '@testing-library/react';
import DataTable from './DataTable';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders item zero from data', () => {

  render(<DataTable />);
  checkElement("Name: hammer", "P");
  checkElement("Size: medium", "P");
  checkElement("Department: tools", "P");
  checkElement("Price: 12.50", "P");  
  checkElement("Next", "BUTTON");
  checkElement("Previous", "BUTTON")
  checkElement("First Item", "BUTTON")
  checkElement("Last Item", "BUTTON")
});

 test('clicking the next button shows item 1', async () => {

    render(<DataTable />);

    const button = screen.getByText("Next");
    expect(button).toBeInTheDocument();
    button.click();

    const button1 = screen.getByText("Previous");
    expect(button).toBeInTheDocument();
    button.click();

    const button2 = screen.getByText("First Item");
    expect(button).toBeInTheDocument();
    button.click();

    const button3 = screen.getByText("Last Item");
    expect(button).toBeInTheDocument();
    button.click();

    await waitFor(() => {
        expect(screen.getByText("Price: 10.50")).toBeInTheDocument();
      });
  });