export interface GifImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface GifImages {
  original: GifImage;
  fixed_height: GifImage;
  fixed_height_downsampled: GifImage;
  fixed_height_small: GifImage;
  fixed_width: GifImage;
  fixed_width_downsampled: GifImage;
  fixed_width_small: GifImage;
}

export interface GifAnalytics {
  onload: {
    url: string;
  };
  onclick: {
    url: string;
  };
  onsent: {
    url: string;
  };
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: GifImages;
  analytics_response_payload: string;
  analytics: GifAnalytics;
}
