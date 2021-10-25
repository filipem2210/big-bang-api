module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
