import type { APIRoute } from "astro";

const getYoutubeData = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${import.meta.env.YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`,
      {
        headers: { Referer: "http://localhost" },
      },
    );

    if (!response.ok) {
      throw new Error(
        `YouTube API request failed with status ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return { error: "Failed to fetch YouTube data" }; // Devuelve un error manejable al cliente
  }
};

// GET: Retrieve YouTube video data
export const GET: APIRoute = async () => {
  const youtubeData = await getYoutubeData();

  if ("error" in youtubeData) {
    return new Response(JSON.stringify({ error: youtubeData.error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(youtubeData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
