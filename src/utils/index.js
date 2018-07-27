/**
 * 从 Content-Disposition 首部获取文件名
 * @param  {string} disposition 首部字段值
 * @return {string}             文件名
 */
const getFileNameFromContentDisposition = (disposition) => {
  const regExp = /filename\*?=((['"])[\s\S]*?\2|[^;\n]*)/g;
  let fileName = '';
  let res;

  while (res !== null) {
    res = regExp.exec(disposition);
    if (res && res[1]) {
      fileName = res[1].replace(/['"]|utf-8''/g, '');
    }
  }
  return decodeURIComponent(fileName);
};

export default {
  getFileNameFromContentDisposition
};
