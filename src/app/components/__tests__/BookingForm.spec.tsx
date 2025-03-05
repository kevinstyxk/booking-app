import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  it("renders form inputs and button", () => {
    render(<BookingForm />);
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByText("Book Now")).toBeInTheDocument();
  });

  it("allows user to enter name and date", () => {
    render(<BookingForm />);
    const nameInput = screen.getByPlaceholderText("Your Name");
    
    const dateInput = screen.getByText("Book Now").previousElementSibling as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(dateInput, { target: { value: "2025-03-10" } });

    expect(nameInput).toHaveValue("John Doe");
    expect(dateInput).toHaveValue("2025-03-10");
  });

  it("shows confirmation message after form submission", () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByText("Book Now").previousElementSibling as HTMLInputElement, { target: { value: "2025-03-10" } });
    fireEvent.click(screen.getByText("Book Now"));

    expect(screen.getByText("Appointment booked for John Doe on 2025-03-10")).toBeInTheDocument();
  });
});