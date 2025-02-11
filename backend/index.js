const app = require("express")();
const db = require("./db");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const faqRouter = require("./routes/faqRouter");
app.use("/faq", faqRouter);

app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
