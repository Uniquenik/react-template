import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { LoginComponent } from './LoginComponent';

describe('Set email and password', () => {
  it('should render form', async () => {
    renderLogin();

    const emailInput = screen.getByPlaceholderText('Электронная почта');

    const passwordInput = screen.getByPlaceholderText('Пароль');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test' } });
      fireEvent.change(passwordInput, { target: { value: 'test' } });
    });

    expect(emailInput).toHaveValue('test');
    expect(passwordInput).toHaveValue('test');
  });
});

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <LoginComponent loading={false} error={null} login={() => {}} />
    </BrowserRouter>,
  );
};
