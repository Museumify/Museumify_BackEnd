module.exports = (req, res, next) => {
  res.status(404).send({
    status: 404,
    responseText: 'Page not found',
    method: req.method,
    end_point: req.url,
  });
};
