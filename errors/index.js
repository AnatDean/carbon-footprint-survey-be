exports.handleErrors = (err, req, res, next) => {
  const psqlCodes = { '22P02': { status: 400, msg: 'Bad Request' } };

  if (psqlCodes[err.code]) {
    // check if error is registered postgres error
    res
      .status(psqlCodes[err.code].status)
      .send({ msg: psqlCodes[err.code].msg });
  }
  // rely on custom error details provided or fall back to 500
  else
    res
      .status(err.status || 500)
      .send({ msg: err.msg || 'Something went wrong' });
};
