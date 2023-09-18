const axios = require('axios');

const dadosCompleto = {
    name: 'Criação de um game',
    description: 'Melhor iniciativa',
    observation: 'Nem tanto',
    status: 'WAITING',
    companyId: 1,
    moduleId: 1
};

const dadosIncompletos = {
    name: 'Criação de um game',
    description: 'Melhor iniciativa',
    observation: 'Nem tanto',
    // status: 'WAITING',
    companyId: 1,
    moduleId: 1
};

const dadosVazios = {
 
};

const apenasStrings = {
    name: 'Criação de um game',
    description: 'Melhor iniciativa',
    observation: 'Nem tanto',
    status: 'WAITING',
    companyId: 'um',
    moduleId: 'um'
}

const apenasInteiros = {
    name: 1,
    description: 1,
    observation: 1,
    status: 1,
    companyId: 1,
    moduleId: 1
}


test('Testando POST de iniciativas', async () =>{
    const resposta = await axios.post('http://localhost:3000/initiatives/', dadosCompleto);
        expect(resposta.status).toBe(200);
        expect(typeof resposta.data).toBe('object');
        expect(typeof dadosCompleto.companyId).toBe('number');
        expect(typeof dadosCompleto.moduleId).toBe('number');
        });

test('Testando POST de iniciativas preenchimento incompleto', async () => {
    const resposta2 = await axios.post('http://localhost:3000/initiatives/', dadosIncompletos);
        expect(resposta2.status).toBe(400);
});

test('Testando POST de iniciativas preenchimento vazio', async () => {
    const resposta3 = await axios.post('http://localhost:3000/initiatives/', dadosVazios);
        expect(resposta3.status).toBe(400);
});

test('Testando POST com apenas strings', async () => {
    const resposta4 = await axios.post('http://localhost:3000/initiatives/', apenasStrings);
        expect(resposta4.status).toBe(400);
})

test('Testando POST com apenas inteiro', async () => {
    const resposta4 = await axios.post('http://localhost:3000/initiatives/', apenasInteiros);
        expect(resposta4.status).toBe(400);
})