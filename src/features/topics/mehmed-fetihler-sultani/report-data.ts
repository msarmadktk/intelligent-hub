export interface MehmedEpisode {
  id: string;
  episode: string;
  englishTitle: string;
  description: string;
  youtubeUrl: string;
  videoId: string;
}

export const reportTitle = "Mehmed: Sultan of Conquests";

export const reportSubtitle =
  "A public collection for episodes and scenes that feel close to my heart, shown with English titles while preserving the original names and direct YouTube access.";

export const seriesHighlights = [
  {
    label: "Format",
    value: "Public video page",
    context:
      "This series now lives in its own directory entry instead of being nested inside a private personal report.",
  },
  {
    label: "Viewing options",
    value: "Website + YouTube",
    context:
      "Each saved episode can be watched inside the site through an embedded player or opened on the original YouTube page.",
  },
  {
    label: "Titles shown",
    value: "English first",
    context:
      "The primary card title is shown in English, while the original episode title remains available for authenticity and reference.",
  },
];

export const savedEpisodes: MehmedEpisode[] = [
  {
    id: "mehmed-episode-77",
    episode: "Episode 77",
    englishTitle:
      "Will Sultan Mehmed Listen to Candarli or Aksemseddin?",
    description: "When you're lossing hope watch our Mehemed handled it",
    youtubeUrl: "https://www.youtube.com/watch?v=pcpqaSKtpxM",
    videoId: "pcpqaSKtpxM",
  },
];
