function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "products", label: "Products" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">MAHESH ENTERPRISES</div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              className={currentPage === item.key ? "nav-link active" : "nav-link"}
              onClick={() => setCurrentPage(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
