import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { useAuthStore } from 'modules/auth/AuthStore';

import { LoginComponent } from './LoginComponent';

const testFunction = jest.fn();

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

  it('should set store and incorrect email', async () => {
    useAuthStore.setState({ email: 'test1', password: 'test' });

    renderLogin();

    const emailInput = screen.getByPlaceholderText('Электронная почта'),
      passwordInput = screen.getByPlaceholderText('Пароль');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveValue('test1');
    expect(passwordInput).toHaveValue('test');

    const button = screen.getByTestId('submit-button');

    await act(async () => {
      fireEvent.click(button);

      expect(testFunction).toHaveBeenCalledTimes(0);
    });
  });

  it('should set store and correct email', async () => {
    useAuthStore.setState({ email: 'test@test.ru', password: 'test' });

    renderLogin();

    const emailInput = screen.getByPlaceholderText('Электронная почта'),
      passwordInput = screen.getByPlaceholderText('Пароль');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveValue('test@test.ru');
    expect(passwordInput).toHaveValue('test');

    const button = screen.getByTestId('submit-button');

    await act(async () => {
      fireEvent.click(button);

      expect(testFunction).toHaveBeenCalledTimes(1);
    });
  });
});

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <LoginComponent loading={false} error={null} login={testFunction} />
    </BrowserRouter>,
  );
};
