const fn = <T extends number | string>(arg: T): `${T}` => `${arg}`;

export default fn;
