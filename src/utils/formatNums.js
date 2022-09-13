const roundtoNearestHundredth = (num) => Math.round(num / 100) * 100;

const insertStringAtIndex = (baseStr, index, strToAdd) => {
  return baseStr.substr(0, index) + strToAdd + baseStr.substr(index);
};

const formatViewerCount = (viewerCount) => {
  if (viewerCount >= 1000) {
    const roundedCount = roundtoNearestHundredth(viewerCount).toString();
    const truncatedCount = roundedCount.slice(0, -2);
    const abbreviatedViewerCount = insertStringAtIndex(truncatedCount, (truncatedCount.length - 1), ".");
    return abbreviatedViewerCount.concat("K");
  } else {
    return viewerCount.toString();
  }
};

export { formatViewerCount };
