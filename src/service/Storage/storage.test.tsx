import { changeLocalStorage, createStorage, getAllStorage } from '../Storage';

const jraBank = {
  login: false,
};

describe('storage', () => {
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
 
  it('Retornar Objeto no LocalStorage', () => {
    
    getAllStorage();
    expect(mockGetItem).toHaveBeenCalledWith('jrabank');
  });

  it('Criar o objeto no localStorage', () => {
    
    createStorage();
    expect(mockSetItem).toHaveBeenCalledWith('jrabank', JSON.stringify(jraBank));
  });

  it('Altera o valor do Objeto no localstorage', () => {
    changeLocalStorage(jraBank)
    expect(mockSetItem).toHaveBeenCalledWith('jrabank',JSON.stringify(jraBank));
  })
});
