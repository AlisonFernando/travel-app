import express, { Request, Response } from "express";

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Backend!");
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
