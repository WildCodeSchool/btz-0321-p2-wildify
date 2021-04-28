import React from 'react';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';

export default function AdminPannel({ item, artists, albums }) {
  return (
    <div className=" w-full h-screen z-50 fixed bg-gray-900">
      <div className="h-44 w-full bg-black t"></div>
      <div className="h-4/5 w-full flex  flex-row">
        <AdminSidebar />
        <AdminSongs item={item} artist={artists} albums={albums} />
      </div>
    </div>
  );
}
