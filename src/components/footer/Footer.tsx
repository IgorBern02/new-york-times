import InstagramIcon from "../../assets/icons/instagramIcon.svg";
import XIcon from "../../assets/icons/xIcon.svg";
import { SocialItem } from "./components/SocialItem";

export const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-200 dark:bg-gray-800 mt-10 text-center">
      <h1 className="font-bebasneue text-base">Timesfeed Newspaper</h1>

      <div className="mt-4 flex w-full max-w-md mx-auto items-start justify-around">
        {/* Links Institucionais */}
        <nav>
          <ul className="flex flex-col gap-2 text-xs">
            <li className="cursor-pointer hover:text-red-500">About us</li>
            <li className="cursor-pointer hover:text-red-500">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-red-500">Terms of use</li>
          </ul>
        </nav>

        {/* Redes sociais */}
        <div className="flex flex-col gap-2">
          <SocialItem icon={InstagramIcon} label="Instagram" />
          <SocialItem icon={XIcon} label="Twitter" />
        </div>
      </div>
    </footer>
  );
};
