const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe("User passes -i argument with path that doesn't exist or with no read access", () => {

  test("Error message is shown if input file not exist", (callback) => {
    exec(
      'node ./src/index.js -c "R1-R0-A-C1-C0" -i "./invalidInput.txt"',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Invalid path to input file or no read access\n');
        callback();
      }
    )
  });
})