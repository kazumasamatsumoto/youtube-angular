export interface Video {
  id: string;
  title: string;
  description: string;
  category: 'angular' | 'test' | 'microfrontend' | 'nx';
  youtubeUrl?: string;
  thumbnailUrl?: string;
  publishedDate: Date;
  content: {
    overview: string;
    codeSamples: CodeSample[];
    correctUsageLinks: Link[];
  };
}

export interface CodeSample {
  title: string;
  language: string;
  code: string;
  description?: string;
}

export interface Link {
  title: string;
  url: string;
  description?: string;
}
