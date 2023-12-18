import axios from "./axios";

export async function fetchCats(): Promise<unknown> {
  // https://appdicho.longapp.site/api/login?email=phandinhlong0209@gmail.com&password=12345678

  // return await axios.post("https://api.thecatapi.com/v1/breeds");
  return await axios.post("https://appdicho.longapp.site/api/login", {
    email: "phandinhlong0209@gmail.com",
    password: "12345678"
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
