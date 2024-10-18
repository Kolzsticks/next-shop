import {  NextResponse } from 'next/server'
import products from './products.json'

export async function GET(request){
    return NextResponse.json(products);
}

export async function POST(request) {
    const product = await request.json();
    products.push(product);
    return NextResponse.json(product);
}