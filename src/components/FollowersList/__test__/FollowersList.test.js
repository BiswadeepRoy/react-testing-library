import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockedFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers List component should render followers initially", () => {
  it("Should atleast render a follower on initial render", async () => {
    render(<MockedFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
