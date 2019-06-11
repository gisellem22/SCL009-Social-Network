import { validationAuth } from '../src/assets/js/validationAuth.js';

describe('validationAuth ', () => {

    it('debería retornar true, para un correo y password correcto', () => {
        expect(validationAuth ("claudia@gmail.com","123456")).toBe(true);
        expect(validationAuth("ale@gmail.com","234567")).toBe(true);
 
    })
    it('deberia retornar false, para un correo y contraseña incorrecto', () => {
        expect(validationAuth("","")).toBe(false);
        expect(validationAuth("","123456")).toBe(false);
        expect(validationAuth("claudia@gmail.com","")).toBe(false);
        expect(validationAuth("claudia@gmail.com","123")).toBe(false);
        expect(validationAuth("","")).not.toBe(true);
    })
})