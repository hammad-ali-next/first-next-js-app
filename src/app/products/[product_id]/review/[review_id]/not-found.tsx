//[review_id] -> not-found.tsx
"use client";

import { usePathname } from "next/navigation"

export default function NotFound() {

    const pathname = usePathname();
    const product_id = pathname.split('/')[2];
    const review_id = pathname.split('/')[4];
    return <>
        <h1>Not Found</h1>
        <p>Review {review_id} for Product {product_id} is not here</p>
    </>
}