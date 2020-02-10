exports.main = async (req, res, next) => {
    try {    
        res.send("Portfolio API -> /v1/articles")
    } catch (error) {
        console.log(error);
        res.send("Noget gik galt");
    }
}