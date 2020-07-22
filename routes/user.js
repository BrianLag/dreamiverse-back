const express = require('express');
const connection = require('../conf.js');

const router = express.Router();

router.get('/users',(req, res) =>{
  connection.query('SELECT * from user', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});




router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * from user WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } 
    if (results.length === 0) {
      return res.sendStatus(404);
    } else {
      res.json(results[0]);
    }
  });
}); 

router.post('/users/', (req, res) => {
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.sendStatus(422);
  } else {
    connection.query('INSERT INTO user SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).json({...formData, id:results.insertId });
      }
    });
  }
});

router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.status(400).send("miss information");
  } else {
    connection.query('UPDATE user SET ? WHERE id=?' , [formData, id], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send({...formData});
      }
    });
  }
});

router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM user WHERE id = ?', id, err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(204);
    }
  });
});

module.exports = router;
