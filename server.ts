import app from "./src/app";

let port = process.env.PORT || 7000

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))