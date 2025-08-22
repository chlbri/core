export const MANIFEST = {
  index: 'src/index.ts',

  // #region Features
  'features.arrays.castings.all': 'src/features/arrays/castings/all.ts',
  'features.arrays.castings.dynamic':
    'src/features/arrays/castings/dynamic.ts',
  'features.arrays.castings.exclude':
    'src/features/arrays/castings/exclude.ts',
  'features.arrays.castings.extract':
    'src/features/arrays/castings/extract.ts',
  'features.arrays.castings.forceCast':
    'src/features/arrays/castings/forceCast.ts',
  'features.arrays.castings.freeze':
    'src/features/arrays/castings/freeze.ts',
  'features.arrays.castings.index':
    'src/features/arrays/castings/index.ts',
  'features.arrays.castings.indexes':
    'src/features/arrays/castings/indexes.ts',
  'features.arrays.castings.is': 'src/features/arrays/castings/is.ts',
  'features.arrays.castings.length.all':
    'src/features/arrays/castings/length/all.ts',
  'features.arrays.castings.length.has':
    'src/features/arrays/castings/length/has.ts',
  'features.arrays.castings.length.index':
    'src/features/arrays/castings/length/index.ts',
  'features.arrays.castings.low': 'src/features/arrays/castings/low.ts',
  'features.arrays.castings.reduce':
    'src/features/arrays/castings/reduce.ts',
  'features.arrays.castings.reverse':
    'src/features/arrays/castings/reverse.ts',
  'features.arrays.castings.toArray':
    'src/features/arrays/castings/toArray.ts',
  'features.arrays.castings.tuple.all':
    'src/features/arrays/castings/tuple/all.ts',
  'features.arrays.castings.tuple.index':
    'src/features/arrays/castings/tuple/index.ts',
  'features.arrays.castings.tuple.is':
    'src/features/arrays/castings/tuple/is.ts',
  'features.arrays.castings.tuple.multiply':
    'src/features/arrays/castings/tuple/multiply.ts',
  'features.arrays.castings.type': 'src/features/arrays/castings/type.ts',
  'features.arrays.index': 'src/features/arrays/index.ts',
  'features.arrays.types': 'src/features/arrays/types.ts',
  'features.arrays.typings._length':
    'src/features/arrays/typings/_length.ts',
  'features.arrays.typings.all': 'src/features/arrays/typings/all.ts',
  'features.arrays.typings.dynamic':
    'src/features/arrays/typings/dynamic.ts',
  'features.arrays.typings.exclude':
    'src/features/arrays/typings/exclude.ts',
  'features.arrays.typings.extract':
    'src/features/arrays/typings/extract.ts',
  'features.arrays.typings.forceCast':
    'src/features/arrays/typings/forceCast.ts',
  'features.arrays.typings.freeze':
    'src/features/arrays/typings/freeze.ts',
  'features.arrays.typings.index': 'src/features/arrays/typings/index.ts',
  'features.arrays.typings.indexes.all':
    'src/features/arrays/typings/indexes/all.ts',
  'features.arrays.typings.indexes.index':
    'src/features/arrays/typings/indexes/index.ts',
  'features.arrays.typings.indexes.union':
    'src/features/arrays/typings/indexes/union.ts',
  'features.arrays.typings.is': 'src/features/arrays/typings/is.ts',
  'features.arrays.typings.length':
    'src/features/arrays/typings/length.ts',
  'features.arrays.typings.low': 'src/features/arrays/typings/low.ts',
  'features.arrays.typings.reduce.all':
    'src/features/arrays/typings/reduce/all.ts',
  'features.arrays.typings.reduce.deep':
    'src/features/arrays/typings/reduce/deep.ts',
  'features.arrays.typings.reduce.index':
    'src/features/arrays/typings/reduce/index.ts',
  'features.arrays.typings.reverse':
    'src/features/arrays/typings/reverse.ts',
  'features.arrays.typings.toArray':
    'src/features/arrays/typings/toArray.ts',
  'features.arrays.typings.tuple.all':
    'src/features/arrays/typings/tuple/all.ts',
  'features.arrays.typings.tuple.index':
    'src/features/arrays/typings/tuple/index.ts',
  'features.arrays.typings.tuple.is':
    'src/features/arrays/typings/tuple/is.ts',
  'features.arrays.typings.tuple.multiply':
    'src/features/arrays/typings/tuple/multiply.ts',
  'features.arrays.typings.type': 'src/features/arrays/typings/type.ts',
  'features.booleans.castings.all':
    'src/features/booleans/castings/all.ts',
  'features.booleans.castings.false':
    'src/features/booleans/castings/false.ts',
  'features.booleans.castings.index':
    'src/features/booleans/castings/index.ts',
  'features.booleans.castings.true':
    'src/features/booleans/castings/true.ts',
  'features.booleans.castings.type':
    'src/features/booleans/castings/type.ts',
  'features.booleans.index': 'src/features/booleans/index.ts',
  'features.booleans.types': 'src/features/booleans/types.ts',
  'features.booleans.typings.all': 'src/features/booleans/typings/all.ts',
  'features.booleans.typings.false':
    'src/features/booleans/typings/false.ts',
  'features.booleans.typings.forceCast':
    'src/features/booleans/typings/forceCast.ts',
  'features.booleans.typings.index':
    'src/features/booleans/typings/index.ts',
  'features.booleans.typings.is': 'src/features/booleans/typings/is.ts',
  'features.booleans.typings.true':
    'src/features/booleans/typings/true.ts',
  'features.booleans.typings.type':
    'src/features/booleans/typings/type.ts',
  'features.common.castings._unknown':
    'src/features/common/castings/_unknown.ts',
  'features.common.castings.all': 'src/features/common/castings/all.ts',
  'features.common.castings.any': 'src/features/common/castings/any.ts',
  'features.common.castings.clone':
    'src/features/common/castings/clone.ts',
  'features.common.castings.const':
    'src/features/common/castings/const.ts',
  'features.common.castings.date.all':
    'src/features/common/castings/date/all.ts',
  'features.common.castings.date.index':
    'src/features/common/castings/date/index.ts',
  'features.common.castings.date.is':
    'src/features/common/castings/date/is.ts',
  'features.common.castings.defaulted.all':
    'src/features/common/castings/defaulted/all.ts',
  'features.common.castings.defaulted.index':
    'src/features/common/castings/defaulted/index.ts',
  'features.common.castings.defaulted.runtime':
    'src/features/common/castings/defaulted/runtime.ts',
  'features.common.castings.defaulted.typings':
    'src/features/common/castings/defaulted/typings.ts',
  'features.common.castings.identity':
    'src/features/common/castings/identity.ts',
  'features.common.castings.index':
    'src/features/common/castings/index.ts',
  'features.common.castings.is.all':
    'src/features/common/castings/is/all.ts',
  'features.common.castings.is.defined':
    'src/features/common/castings/is/defined.ts',
  'features.common.castings.is.index':
    'src/features/common/castings/is/index.ts',
  'features.common.castings.is.notDefined':
    'src/features/common/castings/is/notDefined.ts',
  'features.common.castings.is.notNull':
    'src/features/common/castings/is/notNull.ts',
  'features.common.castings.is.notNullish':
    'src/features/common/castings/is/notNullish.ts',
  'features.common.castings.is.notUndefined':
    'src/features/common/castings/is/notUndefined.ts',
  'features.common.castings.is.null':
    'src/features/common/castings/is/null.ts',
  'features.common.castings.is.nullish':
    'src/features/common/castings/is/nullish.ts',
  'features.common.castings.is.symbol':
    'src/features/common/castings/is/symbol.ts',
  'features.common.castings.is.undefined':
    'src/features/common/castings/is/undefined.ts',
  'features.common.castings.never':
    'src/features/common/castings/never.ts',
  'features.common.castings.neverify':
    'src/features/common/castings/neverify.ts',
  'features.common.castings.null': 'src/features/common/castings/null.ts',
  'features.common.castings.partial.all':
    'src/features/common/castings/partial/all.ts',
  'features.common.castings.partial.deep':
    'src/features/common/castings/partial/deep.ts',
  'features.common.castings.partial.index':
    'src/features/common/castings/partial/index.ts',
  'features.common.castings.primitive.all':
    'src/features/common/castings/primitive/all.ts',
  'features.common.castings.primitive.index':
    'src/features/common/castings/primitive/index.ts',
  'features.common.castings.primitive.is':
    'src/features/common/castings/primitive/is.ts',
  'features.common.castings.primitive.object.all':
    'src/features/common/castings/primitive/object/all.ts',
  'features.common.castings.primitive.object.index':
    'src/features/common/castings/primitive/object/index.ts',
  'features.common.castings.primitive.object.is':
    'src/features/common/castings/primitive/object/is.ts',
  'features.common.castings.readonly.all':
    'src/features/common/castings/readonly/all.ts',
  'features.common.castings.readonly.deep.all':
    'src/features/common/castings/readonly/deep/all.ts',
  'features.common.castings.readonly.deep.index':
    'src/features/common/castings/readonly/deep/index.ts',
  'features.common.castings.readonly.deep.not':
    'src/features/common/castings/readonly/deep/not.ts',
  'features.common.castings.readonly.index':
    'src/features/common/castings/readonly/index.ts',
  'features.common.castings.readonly.not':
    'src/features/common/castings/readonly/not.ts',
  'features.common.castings.required.all':
    'src/features/common/castings/required/all.ts',
  'features.common.castings.required.deep':
    'src/features/common/castings/required/deep.ts',
  'features.common.castings.required.index':
    'src/features/common/castings/required/index.ts',
  'features.common.castings.symbol.all':
    'src/features/common/castings/symbol/all.ts',
  'features.common.castings.symbol.index':
    'src/features/common/castings/symbol/index.ts',
  'features.common.castings.symbol.is':
    'src/features/common/castings/symbol/is.ts',
  'features.common.castings.undefined':
    'src/features/common/castings/undefined.ts',
  'features.common.castings.undefiny':
    'src/features/common/castings/undefiny.ts',
  'features.common.index': 'src/features/common/index.ts',
  'features.common.types': 'src/features/common/types.ts',
  'features.common.typings.all': 'src/features/common/typings/all.ts',
  'features.common.typings.any': 'src/features/common/typings/any.ts',
  'features.common.typings.const': 'src/features/common/typings/const.ts',
  'features.common.typings.date': 'src/features/common/typings/date.ts',
  'features.common.typings.defaulted':
    'src/features/common/typings/defaulted.ts',
  'features.common.typings.exclude.all':
    'src/features/common/typings/exclude/all.ts',
  'features.common.typings.exclude.const':
    'src/features/common/typings/exclude/const.ts',
  'features.common.typings.exclude.index':
    'src/features/common/typings/exclude/index.ts',
  'features.common.typings.extract.all':
    'src/features/common/typings/extract/all.ts',
  'features.common.typings.extract.const':
    'src/features/common/typings/extract/const.ts',
  'features.common.typings.extract.index':
    'src/features/common/typings/extract/index.ts',
  'features.common.typings.identity':
    'src/features/common/typings/identity.ts',
  'features.common.typings.index': 'src/features/common/typings/index.ts',
  'features.common.typings.keys': 'src/features/common/typings/keys.ts',
  'features.common.typings.never': 'src/features/common/typings/never.ts',
  'features.common.typings.neverify':
    'src/features/common/typings/neverify.ts',
  'features.common.typings.null': 'src/features/common/typings/null.ts',
  'features.common.typings.partial.all':
    'src/features/common/typings/partial/all.ts',
  'features.common.typings.partial.deep':
    'src/features/common/typings/partial/deep.ts',
  'features.common.typings.partial.index':
    'src/features/common/typings/partial/index.ts',
  'features.common.typings.primitive.all':
    'src/features/common/typings/primitive/all.ts',
  'features.common.typings.primitive.index':
    'src/features/common/typings/primitive/index.ts',
  'features.common.typings.primitive.object':
    'src/features/common/typings/primitive/object.ts',
  'features.common.typings.readonly.all':
    'src/features/common/typings/readonly/all.ts',
  'features.common.typings.readonly.deep.all':
    'src/features/common/typings/readonly/deep/all.ts',
  'features.common.typings.readonly.deep.index':
    'src/features/common/typings/readonly/deep/index.ts',
  'features.common.typings.readonly.deep.is':
    'src/features/common/typings/readonly/deep/is.ts',
  'features.common.typings.readonly.deep.not.all':
    'src/features/common/typings/readonly/deep/not/all.ts',
  'features.common.typings.readonly.deep.not.index':
    'src/features/common/typings/readonly/deep/not/index.ts',
  'features.common.typings.readonly.deep.not.is':
    'src/features/common/typings/readonly/deep/not/is.ts',
  'features.common.typings.readonly.index':
    'src/features/common/typings/readonly/index.ts',
  'features.common.typings.readonly.is':
    'src/features/common/typings/readonly/is.ts',
  'features.common.typings.readonly.not.all':
    'src/features/common/typings/readonly/not/all.ts',
  'features.common.typings.readonly.not.index':
    'src/features/common/typings/readonly/not/index.ts',
  'features.common.typings.readonly.not.is':
    'src/features/common/typings/readonly/not/is.ts',
  'features.common.typings.required.all':
    'src/features/common/typings/required/all.ts',
  'features.common.typings.required.deep':
    'src/features/common/typings/required/deep.ts',
  'features.common.typings.required.index':
    'src/features/common/typings/required/index.ts',
  'features.common.typings.required.is':
    'src/features/common/typings/required/is.ts',
  'features.common.typings.symbol':
    'src/features/common/typings/symbol.ts',
  'features.common.typings.undefined':
    'src/features/common/typings/undefined.ts',
  'features.common.typings.undefiny':
    'src/features/common/typings/undefiny.ts',
  'features.common.typings.union': 'src/features/common/typings/union.ts',
  'features.common.typings.unknown':
    'src/features/common/typings/unknown.ts',
  'features.functions.castings': 'src/features/functions/castings.ts',
  'features.functions.castings.all':
    'src/features/functions/castings/all.ts',
  'features.functions.castings.checker.all':
    'src/features/functions/castings/checker/all.ts',
  'features.functions.castings.checker.byType.all':
    'src/features/functions/castings/checker/byType/all.ts',
  'features.functions.castings.checker.byType.cast':
    'src/features/functions/castings/checker/byType/cast.ts',
  'features.functions.castings.checker.byType.index':
    'src/features/functions/castings/checker/byType/index.ts',
  'features.functions.castings.checker.forceCast':
    'src/features/functions/castings/checker/forceCast.ts',
  'features.functions.castings.checker.index':
    'src/features/functions/castings/checker/index.ts',
  'features.functions.castings.checker.is':
    'src/features/functions/castings/checker/is.ts',
  'features.functions.castings.dynamic':
    'src/features/functions/castings/dynamic.ts',
  'features.functions.castings.forceCast':
    'src/features/functions/castings/forceCast.ts',
  'features.functions.castings.index':
    'src/features/functions/castings/index.ts',
  'features.functions.castings.is.all':
    'src/features/functions/castings/is/all.ts',
  'features.functions.castings.is.index':
    'src/features/functions/castings/is/index.ts',
  'features.functions.castings.is.strict':
    'src/features/functions/castings/is/strict.ts',
  'features.functions.functions.clone':
    'src/features/functions/functions/clone.ts',
  'features.functions.functions.index':
    'src/features/functions/functions/index.ts',
  'features.functions.functions.partialCall':
    'src/features/functions/functions/partialCall.ts',
  'features.functions.index': 'src/features/functions/index.ts',
  'features.functions.types': 'src/features/functions/types.ts',
  'features.functions.typings': 'src/features/functions/typings.ts',
  'features.functions.typings.all':
    'src/features/functions/typings/all.ts',
  'features.functions.typings.checker.all':
    'src/features/functions/typings/checker/all.ts',
  'features.functions.typings.checker.byType.all':
    'src/features/functions/typings/checker/byType/all.ts',
  'features.functions.typings.checker.byType.cast':
    'src/features/functions/typings/checker/byType/cast.ts',
  'features.functions.typings.checker.byType.index':
    'src/features/functions/typings/checker/byType/index.ts',
  'features.functions.typings.checker.index':
    'src/features/functions/typings/checker/index.ts',
  'features.functions.typings.dynamic':
    'src/features/functions/typings/dynamic.ts',
  'features.functions.typings.forceCast':
    'src/features/functions/typings/forceCast.ts',
  'features.functions.typings.index':
    'src/features/functions/typings/index.ts',
  'features.index': 'src/features/index.ts',
  'features.numbers.castings.MINUS_1':
    'src/features/numbers/castings/MINUS_1.ts',
  'features.numbers.castings.ONE': 'src/features/numbers/castings/ONE.ts',
  'features.numbers.castings.ZERO':
    'src/features/numbers/castings/ZERO.ts',
  'features.numbers.castings.all': 'src/features/numbers/castings/all.ts',
  'features.numbers.castings.bigint':
    'src/features/numbers/castings/bigint.ts',
  'features.numbers.castings.digit':
    'src/features/numbers/castings/digit.ts',
  'features.numbers.castings.getString':
    'src/features/numbers/castings/getString.ts',
  'features.numbers.castings.index':
    'src/features/numbers/castings/index.ts',
  'features.numbers.castings.is': 'src/features/numbers/castings/is.ts',
  'features.numbers.castings.type':
    'src/features/numbers/castings/type.ts',
  'features.numbers.constants': 'src/features/numbers/constants.ts',
  'features.numbers.index': 'src/features/numbers/index.ts',
  'features.numbers.types': 'src/features/numbers/types.ts',
  'features.numbers.typings.MINUS_1':
    'src/features/numbers/typings/MINUS_1.ts',
  'features.numbers.typings.ONE': 'src/features/numbers/typings/ONE.ts',
  'features.numbers.typings.ZERO': 'src/features/numbers/typings/ZERO.ts',
  'features.numbers.typings.all': 'src/features/numbers/typings/all.ts',
  'features.numbers.typings.bigint':
    'src/features/numbers/typings/bigint.ts',
  'features.numbers.typings.digit':
    'src/features/numbers/typings/digit.ts',
  'features.numbers.typings.getString':
    'src/features/numbers/typings/getString.ts',
  'features.numbers.typings.index':
    'src/features/numbers/typings/index.ts',
  'features.objects.castings.all': 'src/features/objects/castings/all.ts',
  'features.objects.castings.byKey':
    'src/features/objects/castings/byKey.ts',
  'features.objects.castings.entries':
    'src/features/objects/castings/entries.ts',
  'features.objects.castings.freeze.all':
    'src/features/objects/castings/freeze/all.ts',
  'features.objects.castings.freeze.deep.all':
    'src/features/objects/castings/freeze/deep/all.ts',
  'features.objects.castings.freeze.deep.index':
    'src/features/objects/castings/freeze/deep/index.ts',
  'features.objects.castings.freeze.deep.not':
    'src/features/objects/castings/freeze/deep/not.ts',
  'features.objects.castings.freeze.dynamic':
    'src/features/objects/castings/freeze/dynamic.ts',
  'features.objects.castings.freeze.forceCast':
    'src/features/objects/castings/freeze/forceCast.ts',
  'features.objects.castings.freeze.index':
    'src/features/objects/castings/freeze/index.ts',
  'features.objects.castings.freeze.is':
    'src/features/objects/castings/freeze/is.ts',
  'features.objects.castings.freeze.not':
    'src/features/objects/castings/freeze/not.ts',
  'features.objects.castings.hasKeys._all.all':
    'src/features/objects/castings/hasKeys/_all/all.ts',
  'features.objects.castings.hasKeys._all.index':
    'src/features/objects/castings/hasKeys/_all/index.ts',
  'features.objects.castings.hasKeys._all.typings':
    'src/features/objects/castings/hasKeys/_all/typings.ts',
  'features.objects.castings.hasKeys.all':
    'src/features/objects/castings/hasKeys/all.ts',
  'features.objects.castings.hasKeys.index':
    'src/features/objects/castings/hasKeys/index.ts',
  'features.objects.castings.hasKeys.typings':
    'src/features/objects/castings/hasKeys/typings.ts',
  'features.objects.castings.index':
    'src/features/objects/castings/index.ts',
  'features.objects.castings.keyTypes.all':
    'src/features/objects/castings/keyTypes/all.ts',
  'features.objects.castings.keyTypes.from':
    'src/features/objects/castings/keyTypes/from.ts',
  'features.objects.castings.keyTypes.index':
    'src/features/objects/castings/keyTypes/index.ts',
  'features.objects.castings.keyTypes.is':
    'src/features/objects/castings/keyTypes/is.ts',
  'features.objects.castings.keysOf':
    'src/features/objects/castings/keysOf.ts',
  'features.objects.castings.omit.all':
    'src/features/objects/castings/omit/all.ts',
  'features.objects.castings.omit.by.all':
    'src/features/objects/castings/omit/by/all.ts',
  'features.objects.castings.omit.by.index':
    'src/features/objects/castings/omit/by/index.ts',
  'features.objects.castings.omit.by.is':
    'src/features/objects/castings/omit/by/is.ts',
  'features.objects.castings.omit.const.all':
    'src/features/objects/castings/omit/const/all.ts',
  'features.objects.castings.omit.const.index':
    'src/features/objects/castings/omit/const/index.ts',
  'features.objects.castings.omit.const.is':
    'src/features/objects/castings/omit/const/is.ts',
  'features.objects.castings.omit.deep.all':
    'src/features/objects/castings/omit/deep/all.ts',
  'features.objects.castings.omit.deep.by.all':
    'src/features/objects/castings/omit/deep/by/all.ts',
  'features.objects.castings.omit.deep.by.index':
    'src/features/objects/castings/omit/deep/by/index.ts',
  'features.objects.castings.omit.deep.by.is':
    'src/features/objects/castings/omit/deep/by/is.ts',
  'features.objects.castings.omit.deep.index':
    'src/features/objects/castings/omit/deep/index.ts',
  'features.objects.castings.omit.deep.is':
    'src/features/objects/castings/omit/deep/is.ts',
  'features.objects.castings.omit.index':
    'src/features/objects/castings/omit/index.ts',
  'features.objects.castings.omit.is':
    'src/features/objects/castings/omit/is.ts',
  'features.objects.castings.omit.strict.all':
    'src/features/objects/castings/omit/strict/all.ts',
  'features.objects.castings.omit.strict.index':
    'src/features/objects/castings/omit/strict/index.ts',
  'features.objects.castings.omit.strict.is':
    'src/features/objects/castings/omit/strict/is.ts',
  'features.objects.castings.pick.all':
    'src/features/objects/castings/pick/all.ts',
  'features.objects.castings.pick.by':
    'src/features/objects/castings/pick/by.ts',
  'features.objects.castings.pick.deep.all':
    'src/features/objects/castings/pick/deep/all.ts',
  'features.objects.castings.pick.deep.by':
    'src/features/objects/castings/pick/deep/by.ts',
  'features.objects.castings.pick.deep.index':
    'src/features/objects/castings/pick/deep/index.ts',
  'features.objects.castings.pick.index':
    'src/features/objects/castings/pick/index.ts',
  'features.objects.castings.primitive':
    'src/features/objects/castings/primitive.ts',
  'features.objects.castings.ra': 'src/features/objects/castings/ra.ts',
  'features.objects.castings.readonly.all':
    'src/features/objects/castings/readonly/all.ts',
  'features.objects.castings.readonly.deep.all':
    'src/features/objects/castings/readonly/deep/all.ts',
  'features.objects.castings.readonly.deep.index':
    'src/features/objects/castings/readonly/deep/index.ts',
  'features.objects.castings.readonly.deep.not':
    'src/features/objects/castings/readonly/deep/not.ts',
  'features.objects.castings.readonly.dynamic':
    'src/features/objects/castings/readonly/dynamic.ts',
  'features.objects.castings.readonly.forceCast':
    'src/features/objects/castings/readonly/forceCast.ts',
  'features.objects.castings.readonly.index':
    'src/features/objects/castings/readonly/index.ts',
  'features.objects.castings.readonly.is':
    'src/features/objects/castings/readonly/is.ts',
  'features.objects.castings.readonly.not':
    'src/features/objects/castings/readonly/not.ts',
  'features.objects.castings.require.all':
    'src/features/objects/castings/require/all.ts',
  'features.objects.castings.require.const':
    'src/features/objects/castings/require/const.ts',
  'features.objects.castings.require.index':
    'src/features/objects/castings/require/index.ts',
  'features.objects.castings.require.is.all':
    'src/features/objects/castings/require/is/all.ts',
  'features.objects.castings.require.is.deep':
    'src/features/objects/castings/require/is/deep.ts',
  'features.objects.castings.require.is.index':
    'src/features/objects/castings/require/is/index.ts',
  'features.objects.castings.require.strict':
    'src/features/objects/castings/require/strict.ts',
  'features.objects.castings.reverse':
    'src/features/objects/castings/reverse.ts',
  'features.objects.castings.ru': 'src/features/objects/castings/ru.ts',
  'features.objects.castings.trueObject':
    'src/features/objects/castings/trueObject.ts',
  'features.objects.castings.type':
    'src/features/objects/castings/type.ts',
  'features.objects.castings.values':
    'src/features/objects/castings/values.ts',
  'features.objects.index': 'src/features/objects/index.ts',
  'features.objects.types': 'src/features/objects/types.ts',
  'features.objects.typings.all': 'src/features/objects/typings/all.ts',
  'features.objects.typings.byKey':
    'src/features/objects/typings/byKey.ts',
  'features.objects.typings.entries':
    'src/features/objects/typings/entries.ts',
  'features.objects.typings.freeze.all':
    'src/features/objects/typings/freeze/all.ts',
  'features.objects.typings.freeze.deep.all':
    'src/features/objects/typings/freeze/deep/all.ts',
  'features.objects.typings.freeze.deep.index':
    'src/features/objects/typings/freeze/deep/index.ts',
  'features.objects.typings.freeze.deep.not':
    'src/features/objects/typings/freeze/deep/not.ts',
  'features.objects.typings.freeze.dynamic':
    'src/features/objects/typings/freeze/dynamic.ts',
  'features.objects.typings.freeze.forceCast':
    'src/features/objects/typings/freeze/forceCast.ts',
  'features.objects.typings.freeze.index':
    'src/features/objects/typings/freeze/index.ts',
  'features.objects.typings.freeze.is':
    'src/features/objects/typings/freeze/is.ts',
  'features.objects.typings.freeze.not':
    'src/features/objects/typings/freeze/not.ts',
  'features.objects.typings.hasKeys._all':
    'src/features/objects/typings/hasKeys/_all.ts',
  'features.objects.typings.hasKeys.all':
    'src/features/objects/typings/hasKeys/all.ts',
  'features.objects.typings.hasKeys.index':
    'src/features/objects/typings/hasKeys/index.ts',
  'features.objects.typings.hasKeys.typings':
    'src/features/objects/typings/hasKeys/typings.ts',
  'features.objects.typings.keyTypes.all':
    'src/features/objects/typings/keyTypes/all.ts',
  'features.objects.typings.keyTypes.from':
    'src/features/objects/typings/keyTypes/from.ts',
  'features.objects.typings.keyTypes.index':
    'src/features/objects/typings/keyTypes/index.ts',
  'features.objects.typings.keysOf':
    'src/features/objects/typings/keysOf.ts',
  'features.objects.typings.omit.all':
    'src/features/objects/typings/omit/all.ts',
  'features.objects.typings.omit.by.all':
    'src/features/objects/typings/omit/by/all.ts',
  'features.objects.typings.omit.by.const.all':
    'src/features/objects/typings/omit/by/const/all.ts',
  'features.objects.typings.omit.by.const.index':
    'src/features/objects/typings/omit/by/const/index.ts',
  'features.objects.typings.omit.by.const.is':
    'src/features/objects/typings/omit/by/const/is.ts',
  'features.objects.typings.omit.by.index':
    'src/features/objects/typings/omit/by/index.ts',
  'features.objects.typings.omit.by.is':
    'src/features/objects/typings/omit/by/is.ts',
  'features.objects.typings.omit.const.all':
    'src/features/objects/typings/omit/const/all.ts',
  'features.objects.typings.omit.const.index':
    'src/features/objects/typings/omit/const/index.ts',
  'features.objects.typings.omit.const.is':
    'src/features/objects/typings/omit/const/is.ts',
  'features.objects.typings.omit.index':
    'src/features/objects/typings/omit/index.ts',
  'features.objects.typings.omit.is':
    'src/features/objects/typings/omit/is.ts',
  'features.objects.typings.pick.all':
    'src/features/objects/typings/pick/all.ts',
  'features.objects.typings.pick.by':
    'src/features/objects/typings/pick/by.ts',
  'features.objects.typings.pick.deep.all':
    'src/features/objects/typings/pick/deep/all.ts',
  'features.objects.typings.pick.deep.by':
    'src/features/objects/typings/pick/deep/by.ts',
  'features.objects.typings.pick.deep.index':
    'src/features/objects/typings/pick/deep/index.ts',
  'features.objects.typings.pick.index':
    'src/features/objects/typings/pick/index.ts',
  'features.objects.typings.primitive':
    'src/features/objects/typings/primitive.ts',
  'features.objects.typings.ra': 'src/features/objects/typings/ra.ts',
  'features.objects.typings.readonly.all':
    'src/features/objects/typings/readonly/all.ts',
  'features.objects.typings.readonly.deep.all':
    'src/features/objects/typings/readonly/deep/all.ts',
  'features.objects.typings.readonly.deep.index':
    'src/features/objects/typings/readonly/deep/index.ts',
  'features.objects.typings.readonly.deep.is':
    'src/features/objects/typings/readonly/deep/is.ts',
  'features.objects.typings.readonly.deep.not.all':
    'src/features/objects/typings/readonly/deep/not/all.ts',
  'features.objects.typings.readonly.deep.not.index':
    'src/features/objects/typings/readonly/deep/not/index.ts',
  'features.objects.typings.readonly.deep.not.is':
    'src/features/objects/typings/readonly/deep/not/is.ts',
  'features.objects.typings.readonly.dynamic':
    'src/features/objects/typings/readonly/dynamic.ts',
  'features.objects.typings.readonly.forceCast':
    'src/features/objects/typings/readonly/forceCast.ts',
  'features.objects.typings.readonly.index':
    'src/features/objects/typings/readonly/index.ts',
  'features.objects.typings.readonly.is':
    'src/features/objects/typings/readonly/is.ts',
  'features.objects.typings.readonly.not.all':
    'src/features/objects/typings/readonly/not/all.ts',
  'features.objects.typings.readonly.not.index':
    'src/features/objects/typings/readonly/not/index.ts',
  'features.objects.typings.readonly.not.is':
    'src/features/objects/typings/readonly/not/is.ts',
  'features.objects.typings.readonly.type':
    'src/features/objects/typings/readonly/type.ts',
  'features.objects.typings.require.all':
    'src/features/objects/typings/require/all.ts',
  'features.objects.typings.require.const':
    'src/features/objects/typings/require/const.ts',
  'features.objects.typings.require.index':
    'src/features/objects/typings/require/index.ts',
  'features.objects.typings.require.is.all':
    'src/features/objects/typings/require/is/all.ts',
  'features.objects.typings.require.is.deep':
    'src/features/objects/typings/require/is/deep.ts',
  'features.objects.typings.require.is.index':
    'src/features/objects/typings/require/is/index.ts',
  'features.objects.typings.require.strict':
    'src/features/objects/typings/require/strict.ts',
  'features.objects.typings.reverse':
    'src/features/objects/typings/reverse.ts',
  'features.objects.typings.rn': 'src/features/objects/typings/rn.ts',
  'features.objects.typings.ru': 'src/features/objects/typings/ru.ts',
  'features.objects.typings.trueObject':
    'src/features/objects/typings/trueObject.ts',
  'features.objects.typings.values':
    'src/features/objects/typings/values.ts',
  'features.objects.utils.entries':
    'src/features/objects/utils/entries.ts',
  'features.objects.utils.omit': 'src/features/objects/utils/omit.ts',
  'features.objects.utils.omit.deep':
    'src/features/objects/utils/omit.deep.ts',
  'features.objects.utils.omit.deep.is':
    'src/features/objects/utils/omit.deep.is.ts',
  'features.objects.utils.omit.is':
    'src/features/objects/utils/omit.is.ts',
  'features.objects.utils.pick': 'src/features/objects/utils/pick.ts',
  'features.objects.utils.pick.deep':
    'src/features/objects/utils/pick.deep.ts',
  'features.objects.utils.require':
    'src/features/objects/utils/require.ts',
  'features.objects.utils.types': 'src/features/objects/utils/types.ts',
  'features.promises.index': 'src/features/promises/index.ts',
  'features.promises.types': 'src/features/promises/types.ts',
  'features.strings.castings.add': 'src/features/strings/castings/add.ts',
  'features.strings.castings.all': 'src/features/strings/castings/all.ts',
  'features.strings.castings.contains':
    'src/features/strings/castings/contains.ts',
  'features.strings.castings.endsWith':
    'src/features/strings/castings/endsWith.ts',
  'features.strings.castings.getLength':
    'src/features/strings/castings/getLength.ts',
  'features.strings.castings.includes':
    'src/features/strings/castings/includes.ts',
  'features.strings.castings.index':
    'src/features/strings/castings/index.ts',
  'features.strings.castings.instance':
    'src/features/strings/castings/instance.ts',
  'features.strings.castings.is': 'src/features/strings/castings/is.ts',
  'features.strings.castings.join':
    'src/features/strings/castings/join.ts',
  'features.strings.castings.letters.all':
    'src/features/strings/castings/letters/all.ts',
  'features.strings.castings.letters.index':
    'src/features/strings/castings/letters/index.ts',
  'features.strings.castings.letters.is':
    'src/features/strings/castings/letters/is.ts',
  'features.strings.castings.letters.lower':
    'src/features/strings/castings/letters/lower.ts',
  'features.strings.castings.letters.upper':
    'src/features/strings/castings/letters/upper.ts',
  'features.strings.castings.splitBy':
    'src/features/strings/castings/splitBy.ts',
  'features.strings.castings.startsWith':
    'src/features/strings/castings/startsWith.ts',
  'features.strings.castings.toLowerCase':
    'src/features/strings/castings/toLowerCase.ts',
  'features.strings.castings.toUpperCase':
    'src/features/strings/castings/toUpperCase.ts',
  'features.strings.castings.type':
    'src/features/strings/castings/type.ts',
  'features.strings.constants': 'src/features/strings/constants.ts',
  'features.strings.index': 'src/features/strings/index.ts',
  'features.strings.types': 'src/features/strings/types.ts',
  'features.strings.typings.add': 'src/features/strings/typings/add.ts',
  'features.strings.typings.all': 'src/features/strings/typings/all.ts',
  'features.strings.typings.contains':
    'src/features/strings/typings/contains.ts',
  'features.strings.typings.email':
    'src/features/strings/typings/email.ts',
  'features.strings.typings.endsWith':
    'src/features/strings/typings/endsWith.ts',
  'features.strings.typings.getLength':
    'src/features/strings/typings/getLength.ts',
  'features.strings.typings.includes':
    'src/features/strings/typings/includes.ts',
  'features.strings.typings.index':
    'src/features/strings/typings/index.ts',
  'features.strings.typings.instance':
    'src/features/strings/typings/instance.ts',
  'features.strings.typings.join': 'src/features/strings/typings/join.ts',
  'features.strings.typings.letters.all':
    'src/features/strings/typings/letters/all.ts',
  'features.strings.typings.letters.index':
    'src/features/strings/typings/letters/index.ts',
  'features.strings.typings.letters.lower':
    'src/features/strings/typings/letters/lower.ts',
  'features.strings.typings.letters.type':
    'src/features/strings/typings/letters/type.ts',
  'features.strings.typings.letters.upper':
    'src/features/strings/typings/letters/upper.ts',
  'features.strings.typings.splitBy':
    'src/features/strings/typings/splitBy.ts',
  'features.strings.typings.startsWith':
    'src/features/strings/typings/startsWith.ts',
  'features.strings.typings.toLowerCase':
    'src/features/strings/typings/toLowerCase.ts',
  'features.strings.typings.toUpperCase':
    'src/features/strings/typings/toUpperCase.ts',
  'features.transform.constants': 'src/features/transform/constants.ts',
  'features.transform.functions': 'src/features/transform/functions.ts',
  'features.transform.index': 'src/features/transform/index.ts',
  'features.transform.types': 'src/features/transform/types.ts',
  'features.typescript.extractFromFile':
    'src/features/typescript/extractFromFile.ts',
  'features.typescript.findFirstCallExpression':
    'src/features/typescript/findFirstCallExpression.ts',
  'features.typescript.helpers': 'src/features/typescript/helpers.ts',
  'features.typescript.index': 'src/features/typescript/index.ts',
  'features.typescript.parseObject':
    'src/features/typescript/parseObject.ts',
  'features.typescript.resolveType':
    'src/features/typescript/resolveType.ts',
  // #endregion

  // #region Globals
  'globals.castings': 'src/globals/castings.ts',
  'globals.types': 'src/globals/types.ts',
  'globals.typings': 'src/globals/typings.ts',
  'globals.utils._unknown': 'src/globals/utils/_unknown.ts',
  'globals.utils.castFn': 'src/globals/utils/castFn.ts',
  'globals.utils.expandFn': 'src/globals/utils/expandFn.ts',
  'globals.utils.identity': 'src/globals/utils/identity.ts',
  'globals.utils.index': 'src/globals/utils/index.ts',
  'globals.utils.is._default': 'src/globals/utils/is/_default.ts',
  'globals.utils.is.index': 'src/globals/utils/is/index.ts',
  'globals.utils.is.merge': 'src/globals/utils/is/merge.ts',
  'globals.utils.is.object': 'src/globals/utils/is/object.ts',
  'globals.utils.is.primitive': 'src/globals/utils/is/primitive.ts',
  'globals.utils.is.primitive.object':
    'src/globals/utils/is/primitive.object.ts',
  'globals.utils.typeFn': 'src/globals/utils/typeFn.ts',
  // #endregion
};
