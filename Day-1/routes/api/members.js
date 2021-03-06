const express = require("express");
const router = express.Router();
const members = require("../../Members");


//rendering json (GET all members)
router.get("/", (req, res) => {
    res.json(members);
});


//rendering json (GET single members)
router.get(`/:id`, (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: 'Member not found' });
    }
})

module.exports = router;