import { contactIcons } from "../../../data/contactIconsHeader";

interface SocialIconsProps {
  dark: boolean;
}

export function SocialIcons({ dark }: SocialIconsProps) {
  return (
    <ul className="flex justify-center gap-4 mt-4 w-full">
      {contactIcons.map((icon, index) => (
        <li key={index} className="border p-2 rounded-full">
          <img
            src={icon}
            alt="social icon"
            className={`w-4 h-4 cursor-pointer transition ${
              dark ? "invert" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
