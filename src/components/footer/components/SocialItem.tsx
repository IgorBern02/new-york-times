// ========= COMPONENTE SOCIAL ===========
type SocialItemProps = {
  icon: string;
  label: string;
};

export const SocialItem = ({ icon, label }: SocialItemProps) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
    <img src={icon} alt={`${label} Icon`} className="h-5 w-5" />
    <p className="text-xs">{label}</p>
  </div>
);
