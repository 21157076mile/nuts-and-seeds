export function getSafeValue(fn: () => any, defaultValue?: any) {
  /**
   * copies ::: https://silvantroxler.ch/2017/avoid-cannot-read-property-of-undefined/
   * use it like this
        getSafeValue(() => obj.a.lot.of.properties);

   * or add an optional default value
        getSafeValue(() => obj.a.lot.of.properties, 'nothing');
   */
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}

export function getAvailableArray(array: any): ([] | null) {
  if ((!Array.isArray(array) || !array.length)) return [];
  return getSafeValue(() => array, []);
}

export const getDomainName = (name: string, subName: string) => `${name}/${subName}`;

