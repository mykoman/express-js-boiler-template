import { Request, Response, Router } from "express";
const router = Router();

//router.use("/todos", verifyToken, todoRouter);
router.use("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
  });
});

export default router;
