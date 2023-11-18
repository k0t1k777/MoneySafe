export const convertStringNumber = (str) => {
    const noSpaceStr = str.replace(/\s+/g, "");
    const num = parseFloat(noSpaceStr);
    if (!isNaN(num)  && isFinite(num)) {
    return num
  } else {
    return false
  }
}
