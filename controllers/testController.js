const testController = (req, res)=>{
    res.status(200).send({
        message: 'test controller',
        success: true,
    });
};

module.exports = {testController};