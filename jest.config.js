const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, './'),
    verbose: true,
    testEnvironment: 'jest-environment-node',
    moduleFileExtensions: [
        'js',
        'node',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.vscode/'
    ],
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 85,
        lines: 70
      }
    }
};