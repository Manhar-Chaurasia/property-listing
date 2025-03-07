import React, { useState, useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const Modal = ({ property, onClose }) => {
  const { bookProperty } = useContext(PropertyContext);
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    bookProperty({ property, name, checkIn, checkOut });
    alert(`Booking confirmed for ${property.name} by ${name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md w-80 shadow-lg">
        <h2 className="text-lg font-bold text-center mb-2">{property.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-300 p-2 rounded-md focus:border-blue-500 outline-none w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            className="border-2 border-gray-300 p-2 rounded-md focus:border-blue-500 outline-none w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <input
            type="date"
            className="border-2 border-gray-300 p-2 rounded-md focus:border-blue-500 outline-none w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Confirm Booking
          </button>
        </form>
        <button className="mt-3 text-red-500 w-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
