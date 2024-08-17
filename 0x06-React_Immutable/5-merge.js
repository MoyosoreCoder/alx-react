<<<<<<< HEAD
import { List, Map } from "immutable";

export const concatElements = (page1, page2) => List(page1).concat(List(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
=======
import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => List(page1).concat(List(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
>>>>>>> 0fd5665f3796470ac985f5dafbc9fd0718c4be53
