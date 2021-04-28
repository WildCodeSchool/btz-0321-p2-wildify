import React from 'react';

export default function AdminSidebar() {
  return (
    <div className="w-44 h-full justify-center bg-black text-white">
      <ul>
        <li className="py-2 px-4  flex justify-center align-middle items-center border-white border-b-2 border-t-2 cursor-pointer">Songs</li>
        <li className="py-2 px-4  flex justify-center align-middle items-center border-white border-b-2 border-t-2 cursor-pointer">Playlists</li>
        <li className="py-2 px-4  flex justify-center align-middle items-center border-white border-b-2 border-t-2 cursor-pointer">Users</li>
        <li className="py-2 px-4  flex justify-center align-middle items-center border-white border-b-2 border-t-2 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
