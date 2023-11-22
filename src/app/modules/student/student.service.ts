import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentFromDB = async (student: Student) => {
  // create hocche mongoose er data
  // StudentModel anbo student.model.ts theke
  const result = await StudentModel.create(student);
  // return korle chole jabe controller a
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB
}; // akon controller theke call dewa jabe
