export function chordDictToList(chordDict) {
  return Object.keys(chordDict).filter((key) => chordDict[key]);
}

export function chordListToDict(chordList, defaultVal = true) {
  let dict = {};
  chordList.forEach((el) => (dict[el] = defaultVal));

  return dict;
}

export function delay(duration) {
  return new Promise((resolve) => setTimeout(() => resolve(), duration * 1000));
}
