import { getToken } from '../services/Login';

describe('Get token', () => {
    it('The credentials are correct to authenticate', () => {
        const prueba = getToken({email: 'challenge@alkemy.org', password: 'react'});
        return prueba.then(data => {
            expect(data).toBe(true);
        });
    })
    it('The credentials are not correct to authenticate', () => {
        const prueba = getToken({email: 'maria@alkemy.org', password: 'maria'});
        return prueba.then(data => {
            expect(data).toBe(false);
        });
    })
})
