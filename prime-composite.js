import express from 'express';
const app = express()
const port = 7000

app.get('/number', (req, res) => {
  res.send('Go to /number/:num to check if :num is prime or composite')
})

app.get('/number/:num', (req, res) => {
  let isPrime = true;
  let number = req.params.num;

  if (number === 1) {
      res.send("1 is neither prime nor composite number.");
  }
  else if (number > 1) {
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }

      if (isPrime) {
          res.send(`${number} is a prime number`);
      } else {
          res.send(`${number} is a composite number`);
      }
  }
  else {
      res.send("Invalid Number.");
  }
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
