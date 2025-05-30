import { classes as classesData } from "@data/constants";
import type { Video } from "@types";

/**
 * Finds a video by its title
 * @param {string} title - The title of the video
 * @returns {Video | null} The video object or null if not found
 */
export function findVideoByTitle(title: string): Video | null {
  const currentVideo = classesData.find((class_) => class_.title === title);
  if (!currentVideo) return null;
  return currentVideo;
}

/**
 * Finds an exercise by its id
 * @param {string} idVideo - The id of the video
 * @returns {Exercise | null} The exercise object or null if not found
 */
export function findVideoById(idVideo: string): Video | null {
  const currentVideo = classesData.find((class_) => class_.image === idVideo);
  if (!currentVideo) return null;
  return currentVideo;
}
