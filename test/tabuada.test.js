const expect = require('chai').expect;
const sinon = require('sinon');
const tabuadaController = require('../controllers/tabuada');

describe('Tabuada controller', ()=>{
    it('Tabuada list all numbers', ()=>{
        const numeros = []
        for(let i=1; i<=100; i++){
            numeros.push(i)
        }
        const res = {
            render(){}
        }
        let mock = sinon.mock(res);
        mock.expects('render').once().withArgs("tabuada/list", { numeros })
        tabuadaController.list({}, res)
    })
    
    it('Calculate tabuada', ()=>{

    const tabuadas = []
    //mockamos o param num - valor fixo 
    const num =10

    for(let i=0; i <=100; i++){
        tabuadas.push({
            num, 
            i,
            resultado: num*i 
        })
    }

    const res = {
        render(){}
    }
    const req = {
        params: { num},
    }

    let mock = sinon.mock(res);

    mock.expects('render').once().withArgs("tabuada/tabuada", { num, tabuadas })

    tabuadaController.tabuada(req, res)
    })
})