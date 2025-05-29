import NodeCache from "node-cache";

import { classes as classesData } from "@data/constants";

const idImagesClasses = classesData.map((class_) => class_.image);

const API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHUNK_SIZE = 50; // YouTube permite hasta 50 IDs por llamada

// Creamos una instancia de caché.
// stdTTL: Standard Time To Live en segundos. 600 = 10 minutos.
// checkperiod: Con qué frecuencia se deben purgar los datos expirados. 120 = 2 minutos.
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });
const CACHE_KEY = "all_youtube_videos";

/**
 * Obtiene todos los videos, usando el caché si está disponible.
 * @returns {Promise<Array>} Una promesa que resuelve a la lista de videos.
 */
export async function getVideos() {
  // 1. Intentar obtener los datos desde el caché
  const cachedVideos = cache.get(CACHE_KEY);
  if (cachedVideos) {
    console.log("Sirviendo videos desde el CACHÉ.");
    return cachedVideos;
  }

  // 2. Si no están en caché, hacer fetch a la API
  let allVideos = []; // Aquí acumularemos todos los videos

  for (let i = 0; i < idImagesClasses.length; i += CHUNK_SIZE) {
    // 2.1. Obtener los IDs de los videos a buscar
    // Asegúrate de que estás usando idImagesClasses, que es donde tienes los IDs de las imágenes
    const chunk = idImagesClasses.slice(i, i + CHUNK_SIZE).join(",");
    let YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${chunk}&key=${API_KEY}&part=snippet,contentDetails,statistics`;

    // 2.2. Hacer fetch a la API de YouTube
    try {
      console.log(
        `Haciendo FETCH a la API de YouTube para chunk ${i / CHUNK_SIZE + 1}...`,
      );
      const response = await fetch(YOUTUBE_API_URL);
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }
      const data = await response.json();
      allVideos = allVideos.concat(data.items); // ¡Aquí es donde acumulamos los videos!
    } catch (error) {
      console.error("No se pudieron obtener los videos de YouTube:", error);
      // Podrías decidir si quieres lanzar el error o seguir con los datos parciales
      // Por ahora, simplemente registramos el error y continuamos con la siguiente chunk
    }
  }

  // 3. Guardar el resultado COMPLETO en el caché ANTES de devolverlo
  if (allVideos.length > 0) {
    cache.set(CACHE_KEY, allVideos);
    console.log(
      `Videos guardados en el CACHÉ. Total de videos: ${allVideos.length}`,
    );
  } else {
    console.warn("No se obtuvieron videos para guardar en caché.");
  }

  return allVideos;
}

/**
 * Obtiene un solo video por su ID, aprovechando el caché principal.
 * @param {string} id El ID del video a buscar.
 * @returns {Promise<Object|null>} Una promesa que resuelve al objeto del video, o null si no se encuentra.
 */
export async function getVideoById(id) {
  // Esta función es muy eficiente porque getVideos() usará el caché
  const allVideos = await getVideos();
  const video = allVideos.find((v) => v.id === id);
  return video || null;
}
