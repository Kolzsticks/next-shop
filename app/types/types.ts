

export interface Rating {
    stars: number;
    count: number;
}

export interface Product {
    uid: number;
    id: string;
    name: string;
    image: string;
    rating: Rating;
    priceCents: number;
    category: string;
    subCategory: string;
    keywords: string[];
    isColumn: boolean;
}