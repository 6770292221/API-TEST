import dotenv from "dotenv";
import path from "path";

const ENV = process.env.ENV || "dev";

dotenv.config({
  path: path.resolve(__dirname, `../../configs/.env.${ENV}`),
});
