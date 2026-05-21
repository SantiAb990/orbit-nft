export interface NFTItem {
  id: string;
  title: string;
  rarityScore: number;
  videoUrl: string;
  creator: string;
  price: string;
  description: string;
  stats: {
    distance: string;
    form: string;
    silence: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
