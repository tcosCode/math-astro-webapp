// src/utils/getYoutubeBatch.ts
//import type { Video } from "@types"; // define aquí la forma de tu objeto resultado

import { classes as classesData } from "@data/constants";

export async function getYoutubeBatch(
  videoIds: string[],
): Promise<Record<string, any>> {
  const API_KEY = import.meta.env.YOUTUBE_API_KEY!;
  const CHUNK_SIZE = 50; // YouTube permite hasta 50 IDs por llamada
  const result: Record<string, any> = {};

  for (let i = 0; i < videoIds.length; i += CHUNK_SIZE) {
    const chunk = videoIds.slice(i, i + CHUNK_SIZE).join(",");
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${chunk}&key=${API_KEY}&part=snippet,contentDetails,statistics`,
    );
    if (!res.ok) {
      console.error(`YouTube API error: ${res.status}`);
      continue;
    }
    const { items } = await res.json();
    for (const item of items) {
      result[item.id] = {
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        url: `https://www.youtube.com/watch?v=${item.id}`,
      };
    }
  }

  return result;
}
