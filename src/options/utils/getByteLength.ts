const getByteLength = (str: string): number => new Blob([str]).size;

export default getByteLength;
