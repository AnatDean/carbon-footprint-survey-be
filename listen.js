const app = require('./server');

app.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log(`listening on 9090`);
});
