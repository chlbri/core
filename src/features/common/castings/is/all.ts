import defined from './defined';
import notDefined from './notDefined';
import notNull from './notNull';
import notNullish from './notNullish';
import notUndefined from './notUndefined';
import null_ from './null';
import nullish from './nullish';
import symbol from './symbol';
import undefined_ from './undefined';

const fn = {
  defined,
  notDefined,
  notNull,
  notNullish,
  nullish,
  notUndefined,
  null: null_,
  undefined: undefined_,
  symbol,
};

export default fn;
