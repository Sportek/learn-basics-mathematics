export function getRandomNumber(min: number, max: number): number {
  if (min > max) {
    [min, max] = [max, min];
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export function getRandomEnumValue(enumObject: any): any {
  const enumValues = Object.values(enumObject);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}