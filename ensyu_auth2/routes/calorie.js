var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const connection = require('../db');
const authCheck = require('../authCheck');
const date  = new Date();
const year  = date.getFullYear();
const month = date.getMonth() + 1;
const day   = date.getDate();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/material',authCheck,async function(req,res,next){
  const Temp = await (await connection).getRepository('material').find({});
  res.render('calorie/material', {material: JSON.stringify(Temp)});
});

router.get('/material_insert',authCheck,async function(req,res,next){
  res.render('calorie/material_insert',{error: ''});
});

router.get('/cuisine',authCheck, async function(req,res,next){
  const Temp = await (await connection).getRepository('cuisine').find({});
  res.render('calorie/cuisine', {cuisine: JSON.stringify(Temp)});
});

router.get('/cuisine_insert',authCheck,async function(req,res,next){
  res.render('calorie/cuisine_insert',{error: ''});
});

router.get('/aerobic',authCheck,async function(req,res,next){
  const Temp = await (await connection).getRepository('aerobic').find({});
  res.render('calorie/aerobic', {aerobic: JSON.stringify(Temp)});
});

router.get('/aerobic_insert',authCheck,async function(req,res,next){
  res.render('calorie/aerobic_insert',{error: ''});
});

router.get('/muscle',authCheck,async function(req,res,next){
  const Temp = await (await connection).getRepository('muscle').find({});
  res.render('calorie/muscle', {muscle: JSON.stringify(Temp)});
});

router.get('/muscle_insert',authCheck,async function(req,res,next){
  res.render('calorie/muscle_insert',{error: ''});
});

router.get('/date',authCheck,async function(req,res,next){
  const Temp = await (await connection).getRepository('calorie_material').find({
  });
  res.render('calorie/muscle', {muscle: JSON.stringify(Temp)});
});



router.post('/material',authCheck,async function(req,res,next){
  const newMeal = {
    material_id: req.body.material_id,
    user_id: req.user.user_id,
    volume: req.body.volume,
    day: year + '-' + month + '-' + day,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('calorie_material')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/material',{error});
    });
})

router.post('/material_insert',authCheck,async function(req,res,next){
  const newMeal = {
    material_name: req.body.material_name,
    material_calorie: req.body.material_calorie,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('material')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/material_insert',{error});
    });
})

router.post('/cuisine',authCheck,async function(req,res,next){
  const newMeal = {
    cuisine_id: req.body.cuisine_id,
    user_id: req.user.user_id,
    eclipse: req.body.eclipse,
    day: year + '-' + month + '-' + day,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('calorie_cuisine')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/cuisine',{error});
    });
})

router.post('/cuisine_insert',authCheck,async function(req,res,next){
  const newMeal = {
    cuisine_name: req.body.cuisine_name,
    cuisine_calorie: req.body.cuisine_calorie,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('cuisine')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/cuisine_insert',{error});
    });
})

router.post('/aerobic',authCheck,async function(req,res,next){
  const newMeal = {
    aerobic_id: req.body.aerobic_id,
    user_id: req.user.user_id,
    time: req.body.time,
    day: year + '-' + month + '-' + day,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('calorie_aerobic')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/aerobic',{error});
    });
})

router.post('/aerobic_insert',authCheck,async function(req,res,next){
  const newMeal = {
    aerobic_name: req.body.aerobic_name,
    aerobic_calorie: req.body.aerobic_calorie,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('aerobic')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/aerobic_insert',{error});
    });
})

router.post('/muscle',authCheck,async function(req,res,next){
  const newMeal = {
    muscle_id: req.body.muscle_id,
    user_id: req.user.user_id,
    weight: req.body.weight,
    day: year + '-' + month + '-' + day,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('calorie_muscle')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/muscle',{error});
    });
})

router.post('/muscle_insert',authCheck,async function(req,res,next){
  const newMeal = {
    muscle_name: req.body.muscle_name,
    muscle_calorie: req.body.muscle_calorie,
  };
  console.log(newMeal);
  (await connection)
    .getRepository('muscle')
    .save(newMeal)
    .then((savedMeal) => {
      console.log(savedMeal);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('calorie/muscle_insert',{error});
    });
})

module.exports = router;
