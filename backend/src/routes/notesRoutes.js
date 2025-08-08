import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNote,
  deleteNote,
  getNotesById
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/", createNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
