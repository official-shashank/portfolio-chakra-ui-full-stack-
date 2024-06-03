const Skill = require('../Models/Skills');
const Experience = require('../Models/Experiance');

// Get all skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single skill by ID
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new skill
exports.createSkill = async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    icon: req.body.icon
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a skill by ID
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a skill by ID
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all experiences
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single experience by ID
exports.getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new experience
exports.createExperience = async (req, res) => {
  const experience = new Experience({
    role: req.body.role,
    company: req.body.company,
    period: req.body.period,
    description: req.body.description
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an experience by ID
exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json(experience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an experience by ID
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
