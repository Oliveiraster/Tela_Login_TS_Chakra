import { login } from '.';

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate,
}));
describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

 const mockEmail = 'raphael@email.com';
  const mockPassword = '12345'

  it('Deve exibir um alert com boas vindas caso email seja valido', async () => {
    await login(mockEmail,mockPassword);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith('/1');
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${mockEmail}!`);
  });

  it('Não deve exibir a mesagem de boas vindas sem email', async () => {
    await login(mockEmail,mockPassword);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith('/1');
    expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo(a)`);
  });

  it('Deve exibir um erro caso o email seja invalido', async () => {
    await login('email@invalido.com', '12345');
    expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith(true);
    expect(mockNavigate).not.toHaveBeenCalledWith('/1');
    expect(mockAlert).toHaveBeenCalledWith('Email invalido !');
  });
});
