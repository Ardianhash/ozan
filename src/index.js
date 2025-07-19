const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const allCaps = (str) => {
  if (typeof str !== 'string') {
    return str;
  }
  return str.toUpperCase();
};

const capitalizeWords = (str) => {
  if (typeof str !== 'string') {
    return str;
  }
  return str.split(' ').map(word => capitalize(word)).join(' ');
};

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
};
