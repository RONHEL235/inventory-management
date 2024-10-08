import { Router } from "express"
import { getDashboardMetrics } from "../controllers/dashboardControllers"

//Sort out connecting the frontend to the backend

const router = Router()

router.get("/", getDashboardMetrics)

export default router