const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe("User passes correct sequence of symbols as argument for --config that matches regular expression", () => {

  test("Should transform message in stdout", (callback) => {
    exec(
      'node ./src/index.js -c "C1-R1-A" -i "./src/__test__/inputHappyPass.txt"',
      (error, stdout, stderr) => {
        expect(stdout).toEqual('Xmyx jqbbs bqyy');
        callback();
      }
    )
  });
})