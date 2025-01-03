import React from "react";
import { render, screen } from "@testing-library/react";
import UserPage from "../../pages/UserPage"; // Adjust the import path as needed

describe("UserPage Component", () => {
  test("renders user page with Dashboard tab active by default", () => {
    render(<UserPage />);

    // Verify that the sidebar contains "Dashboard"
    const dashboardButton = screen.getByRole("button", { name: /dashboard/i });
    expect(dashboardButton).toBeInTheDocument();

    // Verify that the default active content is displayed (Dashboard)
    const defaultContent = screen.getByText(/Company Communications/i);
    expect(defaultContent).toBeInTheDocument();

    // Verify that the "Menu" button for mobile view is present
    const mobileMenuButton = screen.getByLabelText(/Toggle Sidebar/i);
    expect(mobileMenuButton).toBeInTheDocument();
  });

  test("renders Notifications tab when clicked", () => {
    render(<UserPage />);
  
    // Click the Notifications button
    const notificationsButton = screen.getByRole("button", { name: /notifications/i });
    notificationsButton.click();
  
    // Debug the DOM to verify rendered content
    console.log(screen.debug());
  
    // Adjust this matcher based on the actual content
    const notificationsContent = screen.getByText(/notifications/i); // Replace with actual text in Notifications tab
  
    expect(notificationsContent).toBeInTheDocument();
  });
  
  
});
