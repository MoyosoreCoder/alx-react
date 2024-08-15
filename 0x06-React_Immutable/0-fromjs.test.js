import { Map } from "immutable";
import getImmutableObject from "./0-fromjs";

test("should convert JavaScript object to Immutable Map", () => {
  const sampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  };

  const expected = Map({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  });

  expect(getImmutableObject(sampleObject)).toEqual(expected);
});
