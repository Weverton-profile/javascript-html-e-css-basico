exports.paginaInicial = (req, res, next) => {
  res.render('index');
  next();
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
