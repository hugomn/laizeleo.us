export const formatReadingTime = (minutes) => {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`;
};

export const convertId = (originalId, maxLength) => {
  const parts = originalId.split("-");
  let base = parts[0];
  for (let i = 1; i < parts.length; i += 1) {
    base += parts[i][0].toUpperCase() + parts[i].slice(1);
  }
  if (maxLength) {
    if (maxLength < 4) throw new Error("maxLength must be at least 4");
    if (base.length > maxLength - 4) base = base.slice(0, maxLength - 4);
  }
  let sum = 0;
  for (const c of base) sum += c.charCodeAt(0);
  const hash = (sum % 10000).toString().padStart(4, "0");
  return base + hash;
};
