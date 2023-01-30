import { Student } from "../models/studentModel.js";

export const studentAdd = async (req, res) => {
  try {
    const _student = await Student.findOne({ name: req.body.name });
    if (_student) {
      return res.status(400).json({
        success: false,
        message: "Student already exist",
      });
    }

    const studentAdd = new Student(req.body);

    await studentAdd
      .save()
      .then(() => {
        return res.status(201).json(studentAdd);
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

export const studentGetAll = async (req, res) => {
  try {
    const students = await Student.find().populate("homeworks");
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export const studentUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const studentUpdate = await Student.findByIdAndUpdate(id, req.body);
    if (studentUpdate) {
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

export const studentDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const studentDelete = await Student.findByIdAndRemove(id);
    if (studentDelete) {
      return res.status(200).json({
        success: true,
        message: "data, deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "data could not be deleted",
    });
  }
};

export const studentGet = async (req, res) => {
  const { id } = req.params;
  try {
    const studentGet = await Student.findById(id);
    if (studentGet) {
      return res.status(200).json(studentGet);
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "data not found",
    });
  }
};
