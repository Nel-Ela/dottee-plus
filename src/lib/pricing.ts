export function getBaseUnitPrice(price: string) {
  const match = price.match(/Rs\.\s*([\d,]+)/i);
  return match ? Number(match[1].replace(/,/g, "")) : null;
}

export function hasFixedUnitPrice(price: string) {
  return getBaseUnitPrice(price) !== null && !/custom|bulk ready|fast track|premium/i.test(price);
}
