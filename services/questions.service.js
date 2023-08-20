const factors = require("../schema/factors.schema");
const FirstSection = require("../schema/firstSectionQueston.schema");
const phases = require("../schema/phases.schema");
const question = require("../schema/question.schema");
const result = require("../schema/results.schema");
const stages = require("../schema/stages.schema");

module.exports.addQuestion = async (data) => {
  try {
    const result = await question.create(data);
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addQuestions = async (data) => {
  try {
    const result = await question.insertMany(data);
    return {
      err: false,
      result,
      msg: "data imported successfully !",
      status: 200,
    };
  } catch (error) {
    return {
      err: true,
      result: [],
      msg: error.message,
      status: 500,
    };
  }
};

module.exports.addFirstSectionQuestion = async (data) => {
  try {
    const result = await FirstSection.create(data);
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addFirstSectionQuestions = async (data) => {
  try {
    const result = await FirstSection.insertMany(data);
    return {
      err: false,
      result,
      msg: "first question data imported successfully !",
      status: 200,
    };
  } catch (error) {
    return {
      err: true,
      result: [],
      msg: error.message,
      status: 500,
    };
  }
};

module.exports.getFirstSectionQuestion = async () => {
  try {
    const result = await FirstSection.find();
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: [],
      message: error.message,
    };
  }
};

module.exports.updateFirstSectionQuestion = async (data, _id) => {
  try {
    const result = await FirstSection.findOneAndUpdate(
      { _id },
      {
        $set: data,
      },
      { new: true }
    );

    return {
      err: false,
      result,
      message: "question updated successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.deleteFirstSectionQuestion = async (_id) => {
  try {
    await FirstSection.deleteOne({ _id });
    return {
      err: false,
      result: _id,
      message: "Question deleted successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.getQuestions = async () => {
  try {
    const questions = await question.find();
    return {
      err: false,
      result: questions,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.updateQuestion = async (data, _id) => {
  try {
    const result = await question.findOneAndUpdate(
      { _id },
      {
        $set: data,
      },
      { new: true }
    );
    return {
      err: false,
      result,
      message: "question updated successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.deleteQuestion = async (_id) => {
  try {
    await question.deleteOne({ _id });
    return {
      err: false,
      result: _id,
      message: "question deleted successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addFactors = async (data) => {
  try {
    const result = await factors.create(data);
    return {
      err: false,
      result,
      message: "factor added succefully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addFactorsData = async (data) => {
  try {
    const response = await factors.insertMany(data);
    return {
      status: 200,
      err: false,
      msg: "factors data imported successfully !",
      response,
    };
  } catch (error) {
    return {
      status: 500,
      err: true,
      msg: error.message,
      response: [],
    };
  }
};

module.exports.addPhases = async (data) => {
  try {
    const result = await phases.create(data);
    return {
      err: false,
      result,
      message: "phase added succefully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addPhasesData = async (data) => {
  try {
    const response = await phases.insertMany(data);
    return {
      err: false,
      response,
      msg: "phases data imported successfully !",
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

module.exports.updatePhase = async (data, _id) => {
  try {
    const result = await phases.findOneAndUpdate(
      { _id },
      {
        $set: data,
      },
      { new: true }
    );
    return {
      err: false,
      result,
      message: "phase updated successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.deletePhase = async (_id) => {
  try {
    await phases.deleteOne({ _id });
    return {
      err: false,
      result: _id,
      message: "phase deleted successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.getFactors = async () => {
  try {
    const result = await factors.find();
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.updateFactor = async (data, _id) => {
  delete data._id;
  try {
    const result = await factors.findOneAndUpdate(
      { _id },
      {
        $set: data,
      },
      { new: true }
    );
    return {
      err: false,
      result: result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.deleteFactor = async (_id) => {
  try {
    await factors.deleteOne({ _id });
    return {
      err: false,
      result: _id,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.getPhases = async () => {
  try {
    const result = await phases.find();
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addStage = async (data) => {
  try {
    const result = await stages.create(data);
    return {
      err: false,
      result,
      message: "stage added successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addStages = async (data) => {
  try {
    const response = await stages.insertMany(data);
    return {
      err: false,
      response,
      msg: "stages data imported successfully !",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      err: true,
      response: [],
      msg: error.message,
      status: 500,
    };
  }
};

module.exports.getStage = async () => {
  try {
    const result = await stages.find({});
    return {
      err: false,
      result,
      message: "success",
    };
  } catch (error) {
    return {
      err: true,
      result: [],
      message: error.message,
    };
  }
};

module.exports.updateStage = async (data, _id) => {
  try {
    const result = await stages.findOneAndUpdate(
      { _id },
      {
        $set: data,
      },
      { new: true }
    );
    return {
      err: false,
      result,
      message: "stage updated successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.deleteStage = async (_id) => {
  try {
    await stages.deleteOne({ _id });
    return {
      err: false,
      result: _id,
      message: "stage deleted successfully !",
    };
  } catch (error) {
    return {
      err: true,
      result: null,
      message: error.message,
    };
  }
};

module.exports.addResult = async (data) => {
  try {
    await result.create(data);
    return {
      err: false,
      status: 200,
      msg: "thank you for your answers !",
    };
  } catch (error) {
    return {
      err: true,
      status: 500,
      msg: error.message,
    };
  }
};
