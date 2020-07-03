module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
    'src/utils/**/*.ts',
  ],
  coverageReporters: ['lcov', 'text'],
};
