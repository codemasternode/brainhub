import express from "express";
import { registerNewPerson } from "../controllers/eventController";

const router = express.Router();

export default () => {
  router.post("/register-new-person", registerNewPerson);
  return router;
};