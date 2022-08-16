/**
 * 566. 重塑矩阵
 * https://leetcode.cn/problems/reshape-the-matrix/
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let i = 0; i < m * n; i++) {
    ans[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return ans;
}
