export interface ArticleProps {
  image: string; // Assuming the image is a URL or path to an image file
  title: string;
  paragraph: string[];
  signature?: {
    name: string;
    post: string;
  };
  team?: boolean;
  flip?: boolean;
  content?: boolean; // Assuming you want to pass custom JSX content
  border?: boolean;
}