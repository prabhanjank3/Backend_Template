const mongoose = require("mongoose");

const uri =
  "mongodb+srv://root:pass@cluster0.hulcx.mongodb.net/SampleData?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
