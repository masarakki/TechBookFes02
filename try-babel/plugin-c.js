export default ({types: t}) => ({
  visitor: {
    Program: (path) => {
      console.log('c');
    }
  }
});
