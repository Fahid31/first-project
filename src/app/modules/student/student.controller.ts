import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; 
    // will call service function to send this data
    const result = await StudentServices.createStudentFromDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async(req: Request,res: Response) => {
    try{
        const result = await StudentServices.getAllStudentFromDB()

        res.status(200).json({
            success: true,
            message: "Student re retrieved successfully",
            data: result,
        })

    } catch (err) {
        console.log(err);
    }
}

const getSingleStudent = async(req: Request,res: Response) => {
    try{
        const {studentId} = req.params;

        const result = await StudentServices.getSingleStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: "Student is retrieved successfully",
            data: result,
        })

    } catch (err) {
        console.log(err);
    }
}

// akhon controller ke export korte hobe jate route ta bebohar korte pare
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
};

// now goto student.route.ts