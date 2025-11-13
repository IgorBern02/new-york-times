export const Footer = () => {
  return (
    <div className="w-full h-40 p-2 flex flex-col justify-center items-center bg-gray-200 mt-10">
      <h1 className="font-bebasneue text-base">Timesfeed newspaper</h1>
      <div className="text-xs mt-4 ">
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer hover:text-red-500">About us</li>
          <li className="cursor-pointer hover:text-red-500">Privacy Policy</li>
          <li className="cursor-pointer hover:text-red-500">Terms of use</li>
        </ul>
      </div>
    </div>
  );
};
