module.exports = {
  presets: [
    '@babel/preset-env',    // For handling modern JavaScript
    '@babel/preset-react',  // For JSX and React-specific code
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // For async/await support and optimization
  ],
};
