const preventScriptInjection = (str: string): string => (str.includes('<script') ? '...' : str);

export default preventScriptInjection;
