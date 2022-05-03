const PORT = 5000;
import app from "./app.js"

app.listen(PORT, () => {
  console.log(`Server is running, listening on PORT http://localhost:${PORT}`);
});