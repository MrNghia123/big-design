import { useUID } from 'react-uid';
export function useUniqueId(prefix) {
  var uid = useUID();
  return "bd-".concat(prefix, "-").concat(uid);
}