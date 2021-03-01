// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
//aca se importan funciones no archivos jiji
import validator from '../src/validator';



describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
  
  


  describe('isValidpruebita', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid()).toBe(true);
    });
    
    it.skip('por si da falsito', () => {
      expect(validator.isinvalid()).toBe(false);
    });
   

    it.skip('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      // escribe aquí tu test
    });

    it('Debería retornar "1" para "1"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    });
  });
});