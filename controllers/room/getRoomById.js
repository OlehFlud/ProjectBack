module.exports = (req, res) => {
    const room = req.room;
    res.json(room);
};
