function longestCommonPrefix(strs: string[]): string {
  if (strs?.length === 0) return "";
  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const curr = strs[i];
    const prev = strs[i - 1];
    const publicPart = getPublicString(curr, prev);
    if (!publicPart) {
      ans = "";
      break;
    }
    if (publicPart.length < ans.length) {
      ans = publicPart;
    }
  }

  return ans;
}

function getPublicString(s1: string, s2: string) {
  const shortString = s1.length < s2.length ? s1 : s2;

  let ans = 0;

  for (let i = 0; i < shortString.length; i++) {
    const curr1 = s1[i];
    const curr2 = s2[i];
    if (curr1 === curr2) {
      ans = i + 1;
    } else {
      break;
    }
  }

  if (ans === 0) return "";

  return shortString.slice(0, ans);
}
