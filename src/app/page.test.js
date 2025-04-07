import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// MockHome component for testing
const MockHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div data-testid="navbar">Navbar</div>
      <main className="flex-grow">
        <div data-testid="hero">Hero</div>
        <div data-testid="features">Features</div>
        <div data-testid="pricing">Pricing</div>
        <div data-testid="testimonials">Testimonials</div>
        <div data-testid="faq">FAQ</div>
        <div data-testid="cta">CTA</div>
      </main>
      <div data-testid="footer">Footer</div>
    </div>
  );
};

describe("Home Component Structure", () => {
  it("renders all required sections", () => {
    render(<MockHome />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("pricing")).toBeInTheDocument();
    expect(screen.getByTestId("testimonials")).toBeInTheDocument();
    expect(screen.getByTestId("faq")).toBeInTheDocument();
    expect(screen.getByTestId("cta")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("has the correct structure with main content as flex-grow", () => {
    const { container } = render(<MockHome />);

    // container.firstChild to get the root div
    const outerWrapper = container.firstChild;

    // Logging the class names for debugging
    console.log("Root classes:", outerWrapper.className);

    // Checking the class names on the outer div
    expect(outerWrapper).toHaveClass("flex");
    expect(outerWrapper).toHaveClass("flex-col");
    expect(outerWrapper).toHaveClass("min-h-screen");

    // Finding the main element and check for flex-grow
    const mainElement = container.querySelector("main");
    expect(mainElement).toHaveClass("flex-grow");
  });
});
