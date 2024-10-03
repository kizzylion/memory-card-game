import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl px-4 pt-4 pb-4 md:px-7 lg:px-20">
        <div>
          <img src={logo} alt="" className="h-11 md:h-14 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
