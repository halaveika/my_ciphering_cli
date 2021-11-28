const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe("User passes incorrent symbols in argument for --config", () => {

  test("Error message is shown ", (callback) => {
    exec(
      'node ./src/index.js -c C1-C1-A-R0-X -i "./__test__/testInput.txt"',
      (error, stdout, stderr) => {
        expect(stderr).toBeTruthy();
        callback();
      }
    )
  });
})