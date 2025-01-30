import express from "express";
import { getBooks } from "../controller/Book_Controller.js";

const router= express.Router()

router.get("/",getBooks)

export default router;