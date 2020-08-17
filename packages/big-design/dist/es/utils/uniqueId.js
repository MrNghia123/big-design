var counter = 0; // TODO: Remove once all components use useUniqueId:

export function uniqueId(prefix) {
  counter += 1;
  var id = counter;
  return prefix + id;
}