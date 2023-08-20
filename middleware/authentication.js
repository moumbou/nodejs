module.exports.authenticate = (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  const auth = req.headers["x-auth"].split("Bearer ")[1];
  if (secretKey !== auth) return res.status(401).send("unauth");
  else next();
};
