import z from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaForType = <T>() => <S extends z.ZodType<T, any, any>>(arg: S) => S;

const schemaForType: SchemaForType = () => (arg) => arg;

export default schemaForType;
