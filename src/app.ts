import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// client jodi api/v1/students/create-student a hit kore taile student route a hit hobe 

// application routes
app.use('/api/v1/students', StudentRoutes);

 const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

export default app;
