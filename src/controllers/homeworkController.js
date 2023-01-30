import { Homework } from "../models/homeworkModel.js";

export const homeworkAdd = async (req, res) => {
  try {
    const _homework = await Homework.findOne({ name: req.body.name });
    if (_homework) {
      return res.status(400).json({
        success: false,
        message: "homework already exist",
      });
    }

    const homeworkAdd = new Homework(req.body);

    await homeworkAdd
      .save()
      .then(() => {
        return res.status(201).json(homeworkAdd);
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "Error While Creating Data: " + err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "data could not be created !",
    });
  }
};

export const homeworkGetAll = async (req, res) => {
  try {
    const homeworks = await Homework.find();
    res.status(200).json({
      success: true,
      data: homeworks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export const homeworkUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const homeworkUpdate = await Homework.findByIdAndUpdate(id, req.body);
    if (homeworkUpdate) {
      return res.status(200).json({
        success: true,
        message: "data updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "data could not be updated",
    });
  }
};

export const homeworkDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const homeworkDelete = await Homework.findByIdAndRemove(id);
    if (homeworkDelete) {
      return res.status(200).json({
        success: true,
        message: "data deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "data could not be deleted",
    });
  }
};

export const homeworkGet = async (req, res) => {
  const { id } = req.params;
  try {
    const homeworkGet = await Homework.findById(id);
    if (homeworkGet) {
      return res.status(200).json(homeworkGet);
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "data not found",
    });
  }
};
