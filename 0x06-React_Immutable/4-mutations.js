<<<<<<< HEAD
import { Map } from "immutable";

export const map = Map({
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
});

export const map2 = map.withMutations((values) => {
  values.set(2, "Benjamin").set(4, "Oliver");
});
=======
import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
>>>>>>> 0fd5665f3796470ac985f5dafbc9fd0718c4be53
