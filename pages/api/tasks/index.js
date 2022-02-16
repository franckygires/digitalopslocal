import dbConnect from "../../../utils/dbConnect";
import Task from "../../../models/Task";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
       // console.log("hjb");
        let donnee = req.body;
       // console.log(donnee);
        const task = await Task.create(donnee);
        // console.log(task);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(200).json({ success: false, data: ["err", error] });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
