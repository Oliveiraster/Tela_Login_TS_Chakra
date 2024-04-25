const conta = {
  id: '1',
  email: 'raphael@email.com',
  password: '123456',
  name: 'Raphael',
  balance: 2000.00

};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
