import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';

describe('App Routes', () => {
  it('should show the heading "Login" on login button click', async () => {
    // render app
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();
    
    // get button
    // screen.logTestingPlaygroundURL();

    // const LoginMock = await Login();

      
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })
    
    // click login button
      await user.click(loginButton);

      
    // see what happens
    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toHaveTextContent('Login');
    })

});