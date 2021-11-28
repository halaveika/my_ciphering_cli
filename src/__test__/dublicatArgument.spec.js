const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe("User passes the same cli argument twice", () => {

  test("Error message is shown ", (callback) => {
    exec(
      'node ./src/index.js -c C1-C1-A-R0 -c C0',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('argument -c is doubled!\n');
        callback();
      }
    )
  });
})