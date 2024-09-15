function Navbar() {
  return (
    <nav className="bg-navy-blue p-4">
      <div className="container flex justify-start items-center">
		<div className="flex flex-row gap-2 items-center">
        <img style={{ width: '40px', height: '40px' }} src="/logo.png" alt="YapBot Logo" />
        <a href="/" className="text-cream text-lg font-semibold">
          YapBot
        </a>
		</div>
      </div>
    </nav>
  );
}

export default Navbar;
