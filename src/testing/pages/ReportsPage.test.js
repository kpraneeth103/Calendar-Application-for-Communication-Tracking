import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReportsPage from "../../pages/ReportsPage";

// Mock ChartJS components to avoid actual rendering issues during tests
jest.mock("react-chartjs-2", () => ({
  Bar: () => <div data-testid="bar-chart" />, // Mock Bar chart
  Pie: () => <div data-testid="pie-chart" />, // Mock Pie chart
  Line: () => <div data-testid="line-chart" />, // Mock Line chart
}));

jest.mock("@react-pdf/renderer", () => ({
  PDFDownloadLink: ({ children }) => <div>{children({ loading: false })}</div>, // Mock PDF download
}));

jest.mock("react-csv", () => ({
  CSVLink: ({ children }) => <div>{children}</div>, // Mock CSV export
}));

describe("ReportsPage Component", () => {
  it("renders the navigation buttons", () => {
    render(<ReportsPage />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5); // Update expected length to 5
    expect(buttons[0]).toHaveTextContent("Communication Frequency");
    expect(buttons[1]).toHaveTextContent("Engagement Effectiveness");
    expect(buttons[2]).toHaveTextContent("Overdue Trends");
    expect(buttons[3]).toHaveTextContent("Real-Time Activity Log");
    expect(buttons[4]).toHaveTextContent("Export PDF"); // Check for Export PDF button
  });

  it("renders the Communication Frequency section by default", () => {
    render(<ReportsPage />);

    // Ensure the section heading is correct and displayed
    const heading = screen.getByRole("heading", { name: /communication frequency/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  it("renders the Engagement Effectiveness section when its button is clicked", () => {
    render(<ReportsPage />);

    const button = screen.getByText("Engagement Effectiveness");
    fireEvent.click(button);

    const heading = screen.getByRole("heading", { name: /engagement effectiveness/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  it("renders the Overdue Trends section when its button is clicked", () => {
    render(<ReportsPage />);

    const button = screen.getByText("Overdue Trends");
    fireEvent.click(button);

    const heading = screen.getByRole("heading", { name: /overdue trends/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });

  it("renders the Real-Time Activity Log section when its button is clicked", () => {
    render(<ReportsPage />);

    const button = screen.getByText("Real-Time Activity Log");
    fireEvent.click(button);

    const heading = screen.getByRole("heading", { name: /real-time activity log/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Email to Google")).toBeInTheDocument(); // Replace with real log entry if necessary
  });

  it("renders CSV and PDF export options in the Communication Frequency section", () => {
    render(<ReportsPage />);

    const csvButton = screen.getByText("Export CSV");
    const pdfButton = screen.getByText("Export PDF");

    expect(csvButton).toBeInTheDocument();
    expect(pdfButton).toBeInTheDocument();
  });
});
