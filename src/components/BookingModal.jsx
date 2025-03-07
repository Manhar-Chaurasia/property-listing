import React, { useState } from "react";

const BookingModal = ({ property, onClose }) => {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${property.name} by ${name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">{property.name}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full my-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            className="border p-2 w-full my-2"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <input
            type="date"
            className="border p-2 w-full my-2"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <button className="bg-green-500 text-white p-2 rounded w-full">
            Confirm Booking
          </button>
        </form>
        <button className="mt-2 text-red-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
