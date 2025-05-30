import type { VideoChapter } from "@types";

export const extractChaptersFromDescription = (
  description: string,
): VideoChapter[] => {
  const chapters: VideoChapter[] = [];
  // Esta regex es más estricta con los segundos (doble dígito)
  // y asume que el título puede empezar justo después del tiempo o con un espacio.
  // La parte de la hora (H:) es opcional.
  const regex = /(?:^|\n)(\d{1,2}:\d{2}(?::\d{2})?)\s*(.+)/g; // <-- NUEVA REGEX

  // Explicación de la nueva regex:
  // (?:^|\n) : Asegura que la coincidencia esté al principio de una línea o después de un salto de línea.
  // (\d{1,2}:\d{2}(?::\d{2})?) : Captura el formato de tiempo.
  //     \d{1,2}:\d{2}   : Minutos:Segundos (ej. 0:10, 10:28)
  //     (?::\d{2})?     : Opcionalmente, :Segundos adicionales (para HH:MM:SS)
  // \s* : Cero o más espacios después del tiempo.
  // (.+)              : Captura el resto de la línea como el título.

  let match;

  // Split description into lines to process each line individually, or just use regex.
  // For simplicity with regex, let's process the whole description.

  while ((match = regex.exec(description)) !== null) {
    const time = match[1];
    const title = match[2].trim();

    chapters.push({ time, title });
  }

  return chapters;
};
