import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";
function App() {
  let lang = navigator.language;
  const key = "2d29371c7fed46460e063c8a976a8052";
  console.log(lang);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&lang=${lang}`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mt-4">Hava durumunu ögren</h2>
            <label for="exampleFormControlInput1" className="form-label "></label>
          <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className=" form-control border-success w-50 mx-auto"
        />
          </div>
        </div>
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
