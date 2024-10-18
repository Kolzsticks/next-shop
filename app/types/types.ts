

export interface Rating {
    stars: number;
    count: number;
}

export interface Product {
    id: string;
    image: string;
    name: string;
    rating: Rating;
    priceNGN: number;
    keywords: string[];
}