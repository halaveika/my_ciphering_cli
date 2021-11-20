import configParser from '../configParser.js';

describe("configParser should mapping object depand of config parametr", () => {

  class Mock{
    constructor(type){
      this.type = type
    }
  }

   const mockStore =new Map([
    ['A',{class:Mock}],
    ['R1',{class:Mock,type:'1'}],
    ['R0',{class:Mock,type:'0'}],
    ['C1',{class:Mock,type:'1'}],
    ['C0',{class:Mock,type:'0'}]])
  

  test("configParser should map 3 instances", () => {
    const config = 'A-R1-C1';
    const result = configParser(config,mockStore);
    console.dir(result);
    expect(result.length).toBe(3);
  });

  test("configParser should create instances", () => {
    const config = 'A-R1-C1-R0-C0';
    const result = configParser(config,mockStore);
    expect(result[0] instanceof Object).toBe(true);
  });

})