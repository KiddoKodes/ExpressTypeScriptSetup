//starter code of express app
import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("server is running on port " + PORT));
