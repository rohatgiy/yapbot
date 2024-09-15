function Navbar() {
  return (
    <nav className="bg-navy-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-cream text-lg font-semibold">
          YapBot
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
