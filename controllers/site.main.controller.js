exports.main = async (req, res, next) => {
    try {    
        res.json({ hej: "hej"})
    } catch (error) {
        console.log(error);
        res.send("Noget gik galt");
    }
}