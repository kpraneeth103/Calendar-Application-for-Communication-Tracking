module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JS/JSX files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)', // Allow axios to be transformed by Babel
    ],
    testEnvironment: 'jsdom', // Use jsdom to simulate browser environment for testing React components
  };
  