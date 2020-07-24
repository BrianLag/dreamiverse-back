const express = require('express');
const connection = require('../conf.js');

const router = express.Router();

router.get('/database',(req, res) =>{
  connection.query('SELECT * from library', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});




router.get('/database/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * from library WHERE id = ?', [id], (err, results) => {
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

router.post('/database/', (req, res) => {
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.sendStatus(422);
  } else {
    connection.query('INSERT INTO library SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).json({...formData, id:results.insertId });
      }
    });
  }
});

router.put('/database/:id', (req, res) => {
  const id = req.params.id;
  const formData = req.body;
  if (formData.name == null || formData.name === '') {
    res.status(400).send("miss information");
  } else {
    connection.query('UPDATE library SET ? WHERE id=?' , [formData, id], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send({...formData});
      }
    });
  }
});

router.delete('/database/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM library WHERE id = ?', id, err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(204);
    }
  });
});

module.exports = router;
