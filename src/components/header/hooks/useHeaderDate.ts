export function useHeaderDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
