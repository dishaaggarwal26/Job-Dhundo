import React, { useState } from 'react';

const Settings = () => {
    const [preferredLocations, setPreferredLocations] = useState([]);
    const [profileVisibility, setProfileVisibility] = useState("public");

    const handleCheckboxChange = (location) => {
        setPreferredLocations((prev) =>
            prev.includes(location)
                ? prev.filter((item) => item !== location)
                : [...prev, location]
        );
    };
    

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <section className="mb-6 bg-pink-100 p-4 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-3">Account Information</h2>
                <div className="space-y-2">
                    <p><strong>Name:</strong> Pranita Gupta</p>
                    <p><strong>Email:</strong> pranita@gmail.com</p>
                </div>
            </section>

            <section className="mb-6 bg-pink-100 p-4 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-3">Change Password</h2>
                <div className="space-y-2">
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full p-2 border rounded"
                    />
                    <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Update Password
                    </button>
                </div>
            </section>

            <section className="mb-6 bg-pink-100 p-4 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-3">Job Preference</h2>
                <p className="mb-2 font-medium">Preferred Work Location(s):</p>
                <div className="flex flex-wrap gap-4">
                    {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Remote"].map((location) => (
                        <label key={location} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={location}
                                checked={preferredLocations.includes(location)}
                                onChange={() => handleCheckboxChange(location)}
                            />
                            <span>{location}</span>
                        </label>
                    ))}
                </div>
            </section>

            <section className="bg-pink-100 p-4 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-3">Privacy Settings</h2>
                <label className="block mb-2">
                    <strong>Profile Visibility:</strong>
                    <select
                        className="ml-2 p-1 border rounded"
                        value={profileVisibility}
                        onChange={(e) => setProfileVisibility(e.target.value)}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends">Only Friends</option>
                    </select>
                </label>
            </section>
        </div>
    );
};

export default Settings;
