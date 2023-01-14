import { FaGithub } from "react-icons/fa";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <FaGithub className="text-2xl" />
      <span className="uppercase ml-2 text-2xl  font-bold font-mono">
        My Repos
      </span>
    </div>
  );
};
