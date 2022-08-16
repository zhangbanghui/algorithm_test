/**
 * 240. 搜索二维矩阵 II
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === target) return true;
    }
  }

  return false;
}
