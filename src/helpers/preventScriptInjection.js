const preventScriptInjection = (str) => (str.includes('<script') ? '...' : str);

export default preventScriptInjection;
