interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <div className="border-2 border-black px-4 py-1 rounded-xl hover:bg-darkBlue hover:text-black  z-10 duration-300 ease-in-out cursor-pointer">
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Tag;
