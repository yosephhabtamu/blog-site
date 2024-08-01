const comment = require("../models/comment");
const {getonepost} = require("../controller/post")

module.exports = async (req, res) => {
  const id = req.params.id;
  const postcomment = req.body;
  await comment.create(
    {
      username: userName ?? `Guest${userId}`,
      id: id,
      message: postcomment.message,
    },
    (error, comment) => {
      if (error) {
        console.error(error);
        res.redirect(`/post/${id}`);
      }
      getonepost(req,res);
    }
  );
  
};
