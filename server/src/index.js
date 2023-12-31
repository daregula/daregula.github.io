import  express   from "express"
import cors from "cors"
import mongoose from "mongoose"
import { userRouter } from "./routes/users.js"
import { responseRouter } from "./routes/responses.js"
import { emailRouter } from "./routes/email.js"
import { resultRouter } from "./routes/result.js"
import { editProfileRouter } from "./routes/edit-profile.js"
import env from "dotenv"

// Create an Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Route setup
app.use("/auth", userRouter)
app.use("/responses", responseRouter)
app.use("/smtp", emailRouter)
app.use("/result", resultRouter)
app.use("/edit-profile", editProfileRouter)

// create an environment variable for the mongodb authentication
mongoose.connect(process.env.REACT_APP_MONGOCONNECT)

// Start the server and listen on port 3001
app.listen(3001, () => console.log("Server Started"));