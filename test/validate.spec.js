import { validationAuth } from '../src/assets/js/validationAuth.js';
import { validationEmail } from '../src/assets/js/validationAuth.js';

describe('validationAuth ', () => {

    it('debería retornar true, para una password correcta', () => {
        expect(validationAuth ("123456")).toBe(true);
        expect(validationAuth("234567")).toBe(true);
 
    })
    it('deberia retornar false, para una contraseña incorrecta o vacía', () => {
        expect(validationAuth("")).toBe(false);
        expect(validationAuth("123")).toBe(false);
        expect(validationAuth("")).not.toBe(true);
    })
})

describe('validationEmail ', () => {

    it('debería retornar true, para un correo correcto', () => {
        expect(validationEmail ("claudia@gmail.com")).toBe(true);
        expect(validationEmail("ale@gmail.com")).toBe(true);
 
    })
    it('deberia retornar false, para un correo vacío o incorrecto', () => {
        expect(validationEmail("")).toBe(false);
        expect(validationEmail("clau")).toBe(false);
         expect(validationEmail("")).not.toBe(true);
    })
})