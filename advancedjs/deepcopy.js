function deepCopy(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  let copy = Array.isArray(value) ? [] : {};

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepCopy(value[key]);
    }
  }
  return copy;
}
