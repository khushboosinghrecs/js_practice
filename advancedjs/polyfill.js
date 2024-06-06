if (!Array.prototype.includes) {
  Array.prototype.includes = function (searElement, fromIndex) {
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    const o = Object(this);
    const len = o.length >>> 0;
    if (len === 0) {
      return false;
    }

    const n = fromIndex | 0;
    let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (o[k] === searElement) {
        return true;
      }
      k++;
    }

    return false;
  };
}

function customTypeof(value) {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}
