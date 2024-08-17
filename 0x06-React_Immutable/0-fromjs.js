<<<<<<< HEAD
// import { fromJS } from 'immutable';
import { fromJS } from "immutable";

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
=======
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}
>>>>>>> 0fd5665f3796470ac985f5dafbc9fd0718c4be53
