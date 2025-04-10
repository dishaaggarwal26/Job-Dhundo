import React, { useState, useEffect } from "react";

const formatDateTime = (timestamp) => {
  const now = new Date();
  const date = new Date(timestamp);

  const isToday = now.toDateString() === date.toDateString();
  const isTomorrow =
    new Date(now.setDate(now.getDate() + 1)).toDateString() === date.toDateString();

  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (isToday) return `Today at ${time}`;
  if (isTomorrow) return `Tomorrow at ${time}`;

  return `${date.toLocaleDateString()} at ${time}`;
};

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const now = new Date();
    const dummyData = [
      {
        id: 1,
        message: "New job posted today which matches your profile",
        timestamp: now.toISOString(),
      },
      {
        id: 2,
        message: "Your job post was approved",
        timestamp: new Date(now.getTime() - 3600000).toISOString(),
      },
      {
        id: 3,
        message: "A company viewed your profile",
        timestamp: new Date(now.getTime() + 86400000).toISOString(),
      },
    ];
    setNotifications(dummyData);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
        Notifications
      </h2>
      {notifications.length === 0 ? (
        <p className="text-gray-400">No new notifications</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="bg-white text-gray-800 p-5 rounded-xl shadow-md flex justify-between items-start"
            >
              <div>
                <p className="text-base font-medium">{note.message}</p>
                <small className="text-gray-500">{formatDateTime(note.timestamp)}</small>
              </div>
              <button
                onClick={() => removeNotification(note.id)}
                className="ml-4 text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
