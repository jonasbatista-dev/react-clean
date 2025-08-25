module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDor>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
};
