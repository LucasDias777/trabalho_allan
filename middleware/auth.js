const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Autorizado')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso Negado' });
  }

  try {
    const verified = jwt.verify(token, 'secretaChave');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token Inválido' });
  }
};

module.exports = authenticate;
