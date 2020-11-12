interface Credentials {
  user: string;
  password: string;
}

const handleAuthentification = (
  req: any,
  res: any,
  credentials: Credentials,
  message: string
) => {
  const auth = { user: credentials.user, password: credentials.password };
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
  if (!login || !password || login !== auth.user || password !== auth.password) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authentification required"');
    res.writeHead(401);
    res.end(message);
  }
};

const basicAuth = (
  req: any,
  res: any,
  credentials: Credentials,
  message: string,
  whiteList: Array<string>
) => {
  if (
    whiteList.indexOf(req.headers.host) === -1
  ) {
    handleAuthentification(req, res, credentials, message);
  }
};

export default basicAuth;
