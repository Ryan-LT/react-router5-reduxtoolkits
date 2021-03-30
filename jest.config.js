module.exports = {
  // Setting the root to the actual root, since this file is in root/config
  preset: 'ts-jest',
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended', '@testing-library/jest-dom'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@pages': '<rootDir>/src/pages',
    '@store': '<rootDir>/src/store',
    '@router': '<rootDir>/src/router',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
