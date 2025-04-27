const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      
      <div className="flex items-center   ">
        
        <img src='image.png' className="w-12 h-12" />
        
        <span className="text-2xl font-bold text-black">WhatBytes</span>
      </div>

      <div className="flex items-center space-x-2 border-1 border-gray-300 px-3 py-1 rounded-md">
       
        <div className="relative w-8 h-8">
          <img
            src="profile.png" 
            alt="Profile"
            className="rounded-full"
          />
        </div>
       
        <span className="font-semibold text-black">Dhruv Jindal</span>
      </div>
    </nav>
  );
};

export default Navbar;
