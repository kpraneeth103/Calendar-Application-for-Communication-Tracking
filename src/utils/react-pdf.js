// __mocks__/react-pdf.js

module.exports = {
    ...jest.requireActual('@react-pdf/renderer'),
    StyleSheet: {
      create: () => ({}), // Mock StyleSheet.create to return an empty object
    },
  };
  