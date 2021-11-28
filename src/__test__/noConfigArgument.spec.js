const {exec}  = require('child_process');
const { stderr, stdout } = require('process');

describe(" User doesn't pass -c or --config argument", () => {

  test("Error message is shown ", (callback) => {
    exec(
      'node ./src/index.js',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Config is required!\n');
        callback();
      }
    )
  });
})