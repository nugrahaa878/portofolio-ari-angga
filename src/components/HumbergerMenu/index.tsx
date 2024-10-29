import humbergerMenu from "../../assets/humberger.svg";

const HumbergerMenu = () => {
  return (
    <div className="absolute right-8 top-8">
      <img src={humbergerMenu} alt="humberger-menu" className="w-8" />
    </div>
  );
};

export default HumbergerMenu;
