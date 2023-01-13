import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="absolute w-full">
      <div className="w-11/12 flex justify-between py-5 mx-auto">
        <Logo />
        <ThemeToggle />
      </div>
    </div>
  );
};
