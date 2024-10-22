

export interface Rating {
    stars: number;
    count: number;
}

export interface Product {
    uid: number;
    id: number;
    name: string;
    image: string;
    rating: Rating;
    priceCents: number;
    category: string;
    subCategory: string;
    keywords: string[];
    isColumn: boolean;
    description: string;
}