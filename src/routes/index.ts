import { Router } from "express";

const router = Router();

// Server Status Endpoint
router.get("/", (_, res) => {
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center">
            <h1 style=" background: rgba(0, 0, 0, 0.2); padding: 30px; border-radius: 20px;" >
                App Is Running!
            </h1>
        </div>
    `);
});

export default router;
