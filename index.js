module.exports = function (content) {

  return `
  import raf from 'raf';
  raf(() => {
    ${content}
  });
  `;
}
