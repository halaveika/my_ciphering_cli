const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe("User passes -o argument with path to directory that doesn't exist or with no read access", () => {

  test("Error message is shown if output file not exist", (callback) => {
    exec(
      'node ./src/index.js -c "R1-R0-A-C1-C0" -i "./__test__/testInput.txt" -o "./__test__/outputInvalid.txt"',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Invalid path to output file or no write access\n');
        callback();
      }
    )
  });

  test("Error message is shown if  output file not writble", (callback) => {
    exec(
      'node ./src/index.js -c "R1-R0-A-C1-C0" -i "./__test__/testInput.txt" -o "./__test__/test2.txt"',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Invalid path to output file or no write access\n');
        callback();
      }
    )
  });
})