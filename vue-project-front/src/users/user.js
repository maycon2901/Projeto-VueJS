import axios from "axios";

axios
  .get("http://localhost:3001/users")
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });



