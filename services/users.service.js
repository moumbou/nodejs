const result = require("../schema/results.schema");
const user = require("../schema/users.schema");

module.exports.addResult = async (data) => {
  try {
    const newUser = await user.create({ name: data.user });
    await result.insertMany(
      data.results.map((item) => ({ ...item, user: newUser._id }))
    );
    return {
      err: false,
      msg: "success !",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

module.exports.getUsers = async () => {
  try {
    return {
      err: false,
      msg: await user.find(),
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

module.exports.getResultByUsers = async () => {
  try {
    const response = await result.find();
    return {
      err: false,
      response: response,
      msg: "success",
      status: 200,
    };
  } catch (error) {
    return {
      err: true,
      response: [],
      msg: error.message,
      status: 500,
    };
  }
};

module.exports.getMaxSteps = async () => {
  try {
    const response = await result.aggregate([
      {
        $addFields: {
          maxFactors: { $size: "$factors" },
        },
      },
      {
        $group: {
          _id: null,
          max: { $max: "$maxFactors" },
        },
      },
    ]);
    return {
      err: false,
      msg: response.length ? response[0]["max"] : 0,
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};
