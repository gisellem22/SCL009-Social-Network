import { registry } from '../src/assets/js/validationsAuth.js';

describe('registry', () => {

    it('debería retornar true, para un correo y password correcto', () => {
        expect(registry("claudia@gmail.com","123456")).toBe(true);
        expect(registry("ale@gmail.com","234567")).toBe(true);
 
    })
    it('deberia retornar false, para un correo y contraseña incorrecto', () => {
        expect(registry("","")).toBe(false);
        expect(registry("","123456")).toBe(false);
        expect(registry("claudia@gmail.com","")).toBe(false);
        expect(registry("claudia@gmail.com","123")).toBe(false);
        expect(registry("","")).not.toBe(true);
    })
})