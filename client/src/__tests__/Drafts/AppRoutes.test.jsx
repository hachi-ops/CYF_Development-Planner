import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';

// beforeEach(render(<App />, {wrapper: BrowserRouter}));

describe('App Routes', () => {
  afterEach(cleanup)
  it('should show the heading "Login" on login button click', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();
    
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })
    
    await user.click(loginButton);
    
    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toHaveTextContent('Login');
  });
  it("should not show the heading 'Logic' when the login button is clicked.", async () => {
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })
    
    await user.click(loginButton);

    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).not.toHaveTextContent('Logic')
  })
  it("should show the heading 'Sign Up' when the sign up button is clicked.", async () => {
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();
    const signupButton = screen.getByRole('button', {
      name: /sign up/i
    })
    
    await user.click(signupButton);

    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toHaveTextContent('Register')
  })
});