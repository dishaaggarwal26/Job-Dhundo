import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch('https://jobdhundo-backend-nl7q.onrender.com/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword })
      });

      const data = await response.text();
      setMessage(data);

      if (response.ok) {
        setMessageType("success");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          window.location.href = "/Join";
        }, 3000);
      } else {
        setMessageType("error");
      }

    } catch (error) {
      setMessage("Something went wrong.");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold">Reset Password</h2>
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Update Password
        </button>
        {message && (
          <p className={`text-center ${messageType === 'success' ? 'text-green-600' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
