Thanks for the updated format of the JSON data. I'll adjust the API documentation accordingly to reflect the new structure of the product data. Here's the updated version:

---

# Free E-commerce Products API

Welcome to the **Free E-commerce Products API**! This API provides a static collection of sample e-commerce product data, ideal for testing, development, or prototyping. This is a **fake API** containing static data, hosted directly from a JSON file.

## Available Endpoint

### 1. All Products

- **URL**:  
  `https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json`

- **Description**:  
  This endpoint returns all the products across various categories. In **version 1.1.0**, each category contains **10 products**. The data includes detailed information such as descriptions, ratings, pricing, availability, and more.

- **Categories**:
  1. **Electronics & Gadgets**
  2. **Fashion & Apparel**
  3. **Beauty & Personal Care**
  4. **Home & Kitchen**
  5. **Health & Fitness**

### Example: Fetching All Products Using JavaScript

```javascript
fetch('https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching products:', error));
```

### Example: Filtering by Category (Health & Fitness)

```javascript
fetch('https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json')
  .then(response => response.json())
  .then(data => {
    const healthProducts = data.filter(product => product.category === "Health & Fitness");
    console.log(healthProducts);
  })
  .catch(error => console.error('Error fetching products:', error));
```

### Example Product Data (Updated Format)

```json
{
    "id": "49",
    "name": "Non-Slip Yoga Mat",
    "description": "High-density, non-slip yoga mat for comfortable and safe workouts.",
    "images": {
      "main": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/yoga-mat.jpg",
      "variations": []
    },
    "rating": {
      "stars": 4.6,
      "count": 200
    },
    "priceCents": 5000,
    "category": "Health & Fitness",
    "subCategory": "Yoga & Meditation Supplies",
    "keywords": [
      "yoga mat",
      "fitness",
      "workout",
      "yoga"
    ],
    "availability": {
      "inStock": true,
      "quantity": 150
    },
    "brand": "ZenFit",
    "discount": {
      "percentage": 7,
      "expiresOn": "2024-11-30"
    },
    "dimensions": {
      "weight": "N/A",
      "volume": "N/A"
    }
}
```

---

## Other Ways to Connect to the API

You can connect to this static API using different programming languages and libraries. Below are examples for various platforms:

### 1. **Using Python (requests library)**

```python
import requests

url = 'https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json'
response = requests.get(url)

if response.status_code == 200:
    products = response.json()
    print(products)
else:
    print('Failed to fetch data')
```

### 2. **Using PHP (cURL)**

```php
<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json",
  CURLOPT_RETURNTRANSFER => true,
]);

$response = curl_exec($curl);
curl_close($curl);

if ($response) {
    $products = json_decode($response, true);
    print_r($products);
} else {
    echo "Failed to fetch data";
}
?>
```

### 3. **Using Node.js (Axios)**

```javascript
const axios = require('axios');

axios.get('https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
```

### 4. **Using Go (net/http package)**

```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, err := http.Get("https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	var products []map[string]interface{}
	err = json.Unmarshal(body, &products)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
		return
	}

	fmt.Println(products)
}
```

---

## How to Use

You can easily fetch the product data using HTTP clients like `fetch()`, Axios, cURL, or any language-specific library. The endpoint provides **all products** in one file, and you can filter or process them based on the provided categories such as **Health & Fitness**, **Fashion & Apparel**, and others.

### Example: Filtering by Category

Use the `"category"` field in the JSON to filter the data for specific categories like **Electronics & Gadgets**, **Home & Kitchen**, etc.

```javascript
fetch('https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/main/products.json')
  .then(response => response.json())
  .then(data => {
    const electronics = data.filter(product => product.category === "Electronics & Gadgets");
    console.log(electronics);
  })
  .catch(error => console.error('Error fetching products:', error));
```

---

## Notes

- **Version 1.1.0**:  
  This version contains 10 products per category. More products will be added in future versions.

- **Discounts**:  
  Some products may have an active discount with an expiry date.

- **Availability**:  
  Each product includes an availability status (whether it is in stock) and a quantity.

- **Images**:  
  Images are hosted on GitHub and can be referenced directly from the `images` field in the product data.

## Enjoy!

Feel free to use this API for testing, prototyping, or personal projects. Keep an eye out for future updates with more features, categories, and products.

---

This should cover your API with the updated format and multiple language support!