const mongSchema = require("../model/model");

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const desc = req.body.desc;

  const newModel = new mongSchema({
    name: name,
    age: age,
    desc: desc,
  });

  newModel
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log("error encountered!!!");
    });
};

exports.getUser = (req, res, next) => {
  mongSchema
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserById = (req, res, next) => {
  const id = req.params.id;
  mongSchema
    .find({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.userUpdate = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const desc = req.body.desc;

  mongSchema
    .findByIdAndUpdate(
      { _id: id },
      { $set: { name: name, age: age, desc: desc } }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  mongSchema
    .deleteOne({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCommentUser = (req, res, next) => {
  const userId = req.params.id;
  const userIdC = req.body.id;
  const comment = req.body.comment;

  mongSchema
    .updateOne(
      { _id: userId },
      { $push: { commentDetails: { userIdC, comment } } }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postFollowers = (req, res, next) => {
  const userId = req.params.id;
  const userIdF = req.body.id;

  mongSchema
    .updateOne({ _id: userId }, { $push: { followers: { userIdF } } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
