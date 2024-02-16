import app from "./app";
import mongoose from "mongoose";
import config from "./app/config/config";
import seedSuperAdmin from "./app/DB";

async function server() {
  try {
    await mongoose.connect(config.mongodb_uri as string);

    seedSuperAdmin();

    app.listen(config.port, () => {
      console.log(`Server is running on ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
