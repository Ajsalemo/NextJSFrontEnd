import { render, screen } from "@testing-library/react";
import CarTemplate from "./car-template";

// Data to be mocked for a stateful component
const carData = {
  title: "E28 M535i",
  production: "1984–1988",
  type: "E28",
  model: "M5",
  assembly:
    "Germany: Preussenstrasse, Munich; Germany: Daimlerstrasse, Garching; South Africa: Rosslyn",
  designer: "Claus Luthe",
  class: "Sports car (S)",
  body_style: "Sedan",
  engine_drivetrain_layout: "Front-engine, rear-wheel-drive",
  engine: "M88/3 I6",
  transmission: "5-speed manual",
  wheelbase: "2,625 mm (103.35 in)",
  length: "4,620 mm (181.8 in)",
  width: "1,700 mm (66.9 in)",
  height: "1,397 mm (55 in)",
  curb_weight: "1,430 kg (3,153 lb)",
  horsepower: "281hp",
  imageOne: "e28",
  imageTwo: "e28-rear",
};

describe("CarTemplate", () => {
  it("renders with proper headings", () => {
    render(<CarTemplate carData={carData} />);

    expect(screen.getByRole("heading", { name: /E28 M535i/i }));
    expect(screen.getByRole("heading", { name: /CLASS:/i }));
    expect(screen.getByRole("heading", { name: /PRODUCTION:/i }));
    expect(screen.getByRole("heading", { name: /TRANSMISSION:/i }));
    expect(screen.getByRole("heading", { name: /ENGINE:/i }));
    expect(screen.getByRole("heading", { name: /ASSEMBLY:/i }));
  });

  it("renders with proper h3 headings", () => {
    render(<CarTemplate carData={carData} />);

    screen.debug(screen.getAllByRole("heading", { level: 3 }));
  });
});
