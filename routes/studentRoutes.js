const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontroller');

// Routes
router.get('/', studentController.getAllStudents);
router.post('/submit-student',studentController.submitStudent);



router.get('/search-student', studentController.searchStudent);
router.post('/delete-student/:rollNo', studentController.deleteStudent);

module.exports=router;
