import "dotenv/config";
import express, { response }  from "express";
import { router } from "./routes/router";

const app = express();
const port = process.env.PORT || 4003 ;

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.use(express.json());
app.use(router);

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
});

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
});

