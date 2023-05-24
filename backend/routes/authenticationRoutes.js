import express from "express";
import { authenticationHelp, credential, verify} from "../controllers/authenticationController.js";

const router = express.Router();
router.get("/help", authenticationHelp);

router.get("/info/:id",credential);
router.post("/verify", verify);
router.get("/", (req, res) => {
    console.log('root auth route');
    res.send('root auth route')
});
export default router;