const checkHealth = (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
};

module.exports = { checkHealth };
