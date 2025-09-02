module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const resultArr = matrix.map((element, index) =>
    index % 2 !== 0 ? element.slice().reverse() : element
  );
  const result = resultArr.flat();

  return result;
};
