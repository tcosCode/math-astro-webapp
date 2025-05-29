export const parseDuration = (isoDuration: string): string => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = isoDuration.match(regex);

  if (!matches) return "N/A";

  const hours = matches[1] ? parseInt(matches[1]) : 0;
  const minutes = matches[2] ? parseInt(matches[2]) : 0;
  const seconds = matches[3] ? parseInt(matches[3]) : 0;

  // Construcción correcta sin espacios innecesarios
  let durationString = hours > 0 ? `${String(hours).padStart(2, "0")}:` : "";
  durationString += `${String(minutes).padStart(2, "0")}:`;
  durationString += `${String(seconds).padStart(2, "0")}`;

  return durationString;
};
