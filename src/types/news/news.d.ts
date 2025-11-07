export interface Article {
  title: string;
  abstract: string;
  url: string;
  multimedia?: { url: string; caption: string }[];
}

export interface NewsCardProps {
  title: string;
  abstract: string;
  url: string;
  image?: string;
}

export interface SectionSelectorProps {
  value: string;
  onChange: (newValue: string) => void;
}
