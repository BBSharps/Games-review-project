const { app } = require("./api/api");
const { PORT = 10000 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
