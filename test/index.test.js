const expect = require('chai').expect;
const sinon = require('sinon');

const indexController = require('../controllers/index');

describe('Index controller', ()=>{
    it('renders home', ()=>{
       const res = {
           render () {}
       }
       let resMock = sinon.mock(res)
       resMock.expects('render').once().withArgs('home');
       indexController.home({},res)
    })
})