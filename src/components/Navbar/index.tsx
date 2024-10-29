import Button from "../Button";

const Navbar = () => {

  return (
    <div className="flex justify-between w-full pt-10 pr-24 align-middle">
      <div></div>
      <div className="flex gap-16 items-center">
        <button
          onClick={() => {
            const element = document.getElementById("articles");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3>Article</h3>
        </button>
        <button
          onClick={() => {
            const element = document.getElementById("projects");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3>Projects</h3>
        </button>
        <button
          onClick={() => {
            const element = document.getElementById("experiences");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3>Experiences</h3>
        </button>
        <a href="/#">
          <h3>Contact</h3>
        </a>
        <Button
          handleClick={() => {
            const element = document.getElementById("experiences");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          text="Resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
