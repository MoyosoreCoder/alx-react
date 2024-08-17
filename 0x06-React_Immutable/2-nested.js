<<<<<<< HEAD
import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
=======
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
>>>>>>> 0fd5665f3796470ac985f5dafbc9fd0718c4be53
