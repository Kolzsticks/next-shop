<?php
// Set the content type to application/json
header('Content-Type: application/json');

// Data directly in the PHP file as an array

$jayParsedAry = [
    [
        "id" => "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        "image" => "/img/campaign-men.jpg",
        "name" => "Men outfit",
        "rating" => [
            "stars" => 4.5,
            "count" => 87
        ],
        "priceCents" => 1090,
        "keywords" => [
            "socks",
            "sports",
            "apparel"
        ]
    ],
    [
        "id" => "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        "image" => "/img/Cargo_Joggers_(1).jpg",
        "name" => "Joggers",
        "rating" => [
            "stars" => 4,
            "count" => 127
        ],
        "priceCents" => 2095,
        "keywords" => [
            "sports",
            "basketballs"
        ]
    ],
    [
        "id" => "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        "image" => "/img/Double_Breasted_Jacket_(1).jpg",
        "name" => "Double Breasted Jacket",
        "rating" => [
            "stars" => 4.5,
            "count" => 56
        ],
        "priceCents" => 799,
        "keywords" => [
            "tshirts",
            "apparel",
            "mens"
        ],
        "type" => "clothing",
        "sizeChartLink" => "/clothing-size-chart.png"
    ],
    [
        "id" => "54e0eccd-8f36-462b-b68a-8182611d9add",
        "image" => "/img/Loafers.jpg",
        "name" => "Loafers",
        "rating" => [
            "stars" => 5,
            "count" => 2197
        ],
        "priceCents" => 1899,
        "keywords" => [
            "toaster",
            "kitchen",
            "appliances"
        ]
    ],
    [
        "id" => "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        "image" => "/img/Loafers_(1).jpg",
        "name" => "Large Loafers",
        "rating" => [
            "stars" => 4,
            "count" => 37
        ],
        "priceCents" => 2067,
        "keywords" => [
            "plates",
            "kitchen",
            "dining"
        ]
    ],
    [
        "id" => "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        "image" => "/img/Oversized_Shirt_Jacket_(2).jpg",
        "name" => "Oversized Jacket",
        "rating" => [
            "stars" => 4.5,
            "count" => 175
        ],
        "priceCents" => 3499,
        "keywords" => [
            "kitchen",
            "cookware"
        ]
    ],
    [
        "id" => "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        "image" => "/img/Skinny_Fit_(1).jpg",
        "name" => "Skinny Fit",
        "rating" => [
            "stars" => 4.5,
            "count" => 317
        ],
        "priceCents" => 2400,
        "keywords" => [
            "hoodies",
            "sweaters",
            "apparel"
        ]
    ],
    [
        "id" => "77919bbe-0e56-475b-adde-4f24dfed3a04",
        "image" => "Skinny_Fit_Blazer.jpg",
        "name" => "Skinny Fit Blazer",
        "rating" => [
            "stars" => 4.5,
            "count" => 144
        ],
        "priceCents" => 3599,
        "keywords" => [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    ],
    [
        "id" => "77919bbe-0e56-475b-adde-4f24dfed3a04",
        "image" => "Skinny_Fit_Suit_Pants_(1).jpg",
        "name" => "Skinny Fit Pants",
        "rating" => [
            "stars" => 4.5,
            "count" => 144
        ],
        "priceCents" => 3599,
        "keywords" => [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    ],
    [
        "id" => "77919bbe-0e56-475b-adde-4f24dfed3a04",
        "image" => "Super_Slim-fit_Pants.jpg",
        "name" => "Skinny Slim Fit Pants",
        "rating" => [
            "stars" => 4.5,
            "count" => 144
        ],
        "priceCents" => 3599,
        "keywords" => [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    ],
    [
        "id" => "77919bbe-0e56-475b-adde-4f24dfed3a04",
        "image" => "Super_Slim-fit_Pants_(1).jpg",
        "name" => "Skinny Slim Fit Pants2",
        "rating" => [
            "stars" => 4.5,
            "count" => 144
        ],
        "priceCents" => 3599,
        "keywords" => [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    ],


];



// Encode the PHP array into a JSON string and output it
echo json_encode($data);
