import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover mt-2 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
