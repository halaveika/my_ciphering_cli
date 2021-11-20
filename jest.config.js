import path from 'path';

const __dirname = path.resolve();

export default {
    rootDir: path.join(__dirname, './'),
    verbose: true,
    testEnvironment: 'jest-environment-node',
    moduleFileExtensions: [
        'js',
        'node',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '.vscode'
    ],
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
    transform: {}
};
