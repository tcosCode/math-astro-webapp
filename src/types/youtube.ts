// YouTubeVideo
export interface YouTubeVideo {
  id: string; // El ID real del video de YouTube
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
  contentDetails: {
    duration: string; // Por ejemplo, "PT1H30M5S"
  };
  statistics: {
    viewCount?: string;
    likeCount?: string;
  };
}

// Local Data Videos
export interface Video {
  title: string;
  grade: string;
  image: string;
  description: string;
  url?: string;
}

export interface VideoChapter {
  time: string;
  title: string;
}
