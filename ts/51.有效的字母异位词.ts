// 方法1
// function isAnagram(s: string, t: string): boolean {
//   const sArr = s.split("");
//   for (let i = 0; i < t.length; i++) {
//     const curr = t[i];
//     const index = sArr.findIndex((item) => item === curr);
//     if (index === -1) {
//       return false;
//     }
//     sArr.splice(index, 1);
//   }

//   return sArr.length === 0;
// }

// 方法2
function isAnagram(s: string, t: string): boolean {
  return (
    s.length === t.length && [...s].sort().join("") === [...t].sort().join("")
  );
}
