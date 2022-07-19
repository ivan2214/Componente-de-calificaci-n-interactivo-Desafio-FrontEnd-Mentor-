import { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import imgThanks from "./images/illustration-thank-you.svg";

function App() {
  const [enviado, setEnviado] = useState(false);
  const [items, setItems] = useState("");
  const Button = ({ numero }) => {
    return (
      <div className="flex justify-center  items-center">
        <button
          className="bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 btn-number transition-all duration-170"
          onClick={() => {
            setItems(numero);
          }}
        >
          {numero}
        </button>
      </div>
    );
  };

  return (
    <>
      {!enviado && (
        <article className="wrapper">
          <img src={star} alt="estrella de color amarillo fuerte" className="bg-gray-700 p-2 rounded-full" />
          <h1 className="text-gray-100 text-3xl my-6"> How did we do? </h1>
          <p className="text-gray-500 mb-10">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="grid grid-cols-5 gap-3 mb-10">
            <li>
              <Button numero={1} />
            </li>
            <li>
              <Button numero={2} />
            </li>
            <li>
              <Button numero={3} />
            </li>
            <li>
              <Button numero={4} />
            </li>
            <li>
              <Button numero={5} />
            </li>
          </ul>
          <div className="text-center">
            <button
              className="btn-rating w-full text-white uppercase tracking-wide pb-3 pt-4 rounded-full"
              onClick={() => {
                setEnviado(true);
              }}
            >
              submit
            </button>
          </div>
        </article>
      )}

      {enviado && <Thanks items={items} setEnviado={setEnviado} />}
    </>
  );
}

const Thanks = ({ items, setEnviado }) => {
  return (
    <article className="wrapper">
      <img src={imgThanks} alt="celular con pelota y una tarjeta al rededor de el con lineas" className="block mx-auto mb-5" />
      <div className="flex justify-center items-center">
        <p className="text-center pt-2 px-3 p-thanks  rounded-full">
          You selected {items} out of 5
        </p>
      </div>
      <h2 className="text-gray-100 text-3xl my-6 text-center">Thank you!</h2>
      <p className="text-gray-500 mb-10">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>

      <div className="text-center">
        <button
          onClick={() => {
            setEnviado(false);
          }}
          className="btn-rating w-full text-white uppercase tracking-wide pb-3 pt-4 rounded-full"
        >
          Rate again
        </button>
      </div>
    </article>
  );
};
export default App;
