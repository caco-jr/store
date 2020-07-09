module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@redux/(.*)': '<rootDir>/src/redux/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@icons/(.*)': '<rootDir>/src/icons/$1',
  },
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
    'src/utils/**/*.ts',
    'src/hooks/**/*.ts',
  ],
  coverageReporters: ['lcov', 'text'],
};
