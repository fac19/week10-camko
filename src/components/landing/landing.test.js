import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LandingPage from './landing';

test('Landing component', () => {
    const landingComponent = render(<LandingPage/>)
    landingComponent.setState({fighter: false})
    const buttonNode = screen.getByText("Generate Fighter!");
    const inputNode = screen.getByLabelText("Username")
    fireEvent.click(buttonNode)
    expect(fighter.toEqual(true))
    
}) 

// it('should render the Notification component if state.error is true', () => {
//   const loginComponent = shallow(<Login />);
//   loginComponent.setState({ error: true });
//   expect(loginComponent.find(Notification).length).toBe(1);
// });