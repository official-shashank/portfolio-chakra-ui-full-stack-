const express = require('express');
const skillAndExperianceRouter = express.Router();
const SkillsAndExperianceController = require('../controller/SkillsAndExperianceController');

// Skill routes
skillAndExperianceRouter.get('/skills', SkillsAndExperianceController.getSkills);
skillAndExperianceRouter.get('/skills/:id', SkillsAndExperianceController.getSkillById);
skillAndExperianceRouter.post('/skills', SkillsAndExperianceController.createSkill);
skillAndExperianceRouter.put('/skills/:id', SkillsAndExperianceController.updateSkill);
skillAndExperianceRouter.delete('/skills/:id', SkillsAndExperianceController.deleteSkill);

// Experience routes
skillAndExperianceRouter.get('/experiences', SkillsAndExperianceController.getExperiences);
skillAndExperianceRouter.get('/experiences/:id', SkillsAndExperianceController.getExperienceById);
skillAndExperianceRouter.post('/experiences', SkillsAndExperianceController.createExperience);
skillAndExperianceRouter.put('/experiences/:id', SkillsAndExperianceController.updateExperience);
skillAndExperianceRouter.delete('/experiences/:id', SkillsAndExperianceController.deleteExperience);

module.exports = skillAndExperianceRouter;
