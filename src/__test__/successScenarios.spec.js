const {exec}  = require('child_process');
const { stderr, stdout } = require('process');
const fs = require('fs');

const createTestfiles = (message) => {
  fs.writeFileSync('./src/__test__/input.txt', message, function (err) {
    if (err) return console.error(err);
  });
  const fd = fs.openSync('./src/__test__/output.txt', 'w');
}

const deleteTestFiles = () => {
  fs.unlinkSync('./src/__test__/input.txt');
  fs.unlinkSync('./src/__test__/output.txt');
}

describe("Success scenarios", () => {

  test("Should transform message as config C1-C1-R0-A", (callback) => {
    createTestfiles('This is secret. Message about "_" symbol!');
    exec(
      'node ./src/index.js -c "C1-C1-R0-A" -i "./src/__test__/input.txt" -o "./src/__test__/output.txt"',
      (error, stdout, stderr) => {
        const result = fs.readFileSync('./src/__test__/output.txt',{encoding:'utf8', flag:'r'});
        expect(result).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
        deleteTestFiles();
        callback();
      }
    )
  });

  test("Should transform message as config C1-C0-A-R1-R0-A-R0-R0-C1-A", (callback) => {
    createTestfiles('This is secret. Message about "_" symbol!');
    exec(
      'node ./src/index.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./src/__test__/input.txt" -o "./src/__test__/output.txt"',
      (error, stdout, stderr) => {
        const result = fs.readFileSync('./src/__test__/output.txt',{encoding:'utf8', flag:'r'});
        expect(result).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
        deleteTestFiles();
        callback();
      }
    )
  });

  test("Should transform message as config A-A-A-R1-R0-R0-R0-C1-C1-A", (callback) => {
    createTestfiles('This is secret. Message about "_" symbol!');
    exec(
      'node ./src/index.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./src/__test__/input.txt" -o "./src/__test__/output.txt"',
      (error, stdout, stderr) => {
        const result = fs.readFileSync('./src/__test__/output.txt',{encoding:'utf8', flag:'r'});
        expect(result).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
        deleteTestFiles();
        callback();
      }
    )
  });

  test("Should transform message as config C1-R1-C0-C0-A-R0-R1-R1-A-C1", (callback) => {
    createTestfiles('This is secret. Message about "_" symbol!');
    exec(
      'node ./src/index.js -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./src/__test__/input.txt" -o "./src/__test__/output.txt"',
      (error, stdout, stderr) => {
        const result = fs.readFileSync('./src/__test__/output.txt',{encoding:'utf8', flag:'r'});
        expect(result).toBe('This is secret. Message about "_" symbol!');
        deleteTestFiles();
        callback();
      }
    )
  });
})