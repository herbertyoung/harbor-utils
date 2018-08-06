/**
 * 将 Object 对象转变为 FormData 对象，可用于表单提交
 * @param  {Object}   data  被转变的 Object 对象
 * @return {FormData}       FormData 对象
 */
const convertToFormData = (data = {}) => {
  return Object.entries(data).reduce((formData, [key, value]) => {
    if (Array.isArray(value)) {
      return value.reduce((formData, item) => {
        formData.append(`${key}[]`, item);
        return formData;
      }, formData);
    } else {
      formData.append(key, value);
    }
    return formData;
  }, new FormData());
};

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
  convertToFormData,
  getFileNameFromContentDisposition
};
