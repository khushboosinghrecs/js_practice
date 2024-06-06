function validAnagram(str1, str2) {
  let frequenceCount1 = {};
  let frequncyCont2 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let char of str1) {
    frequenceCount1[char] = (frequenceCount1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequncyCont2[char] = (frequncyCont2[char] || 0) + 1;
  }

  for (let k of frequenceCount1) {
    if (frequenceCount1[k] !== frequncyCont2[k]) {
      return false;
    }
  }
  return true;
}

function valideAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frecount = {};

  for (let i = 0; i < str1.length; i++) {
    const currentElement = str1[i];
    frecount[currentElement] = (frecount[currentElement] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const currentElement = str2[i];
    if (!frecount[currentElement]) {
      return false;
    } else {
      frecount[currentElement] -= 1;
    }
  }
  return true;
}
