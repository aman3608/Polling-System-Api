
exports.home = (req, res) => {
    res.status(200).json({
        success: true,
        greeting: 'Welcome to the polling system api'
    })
}