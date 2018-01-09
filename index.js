module.exports = function (content) {

  return `
  import raf from 'raf';
  raf(() => {
    console.log('in raf');
    ${content}
  });
  console.log('out raf');
  `;
}
