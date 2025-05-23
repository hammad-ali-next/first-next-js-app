//review -> [review_id] -> page.tsx

import { notFound } from "next/navigation";

export default async function ({ params }: {
    params: { product_id: string, review_id: number }
}) {
    const review_id = (await params).review_id;
    if (review_id > 1000) {
        notFound();
    }
    return <h1>Review {review_id} of Product {(await params).product_id} </h1>
}


// export default async function ({ params }: {
//     params: Promise<{ review_id: number }>
// }) {
//     const review_id = (await params).review_id;
//     return <h1>Review {review_id} of Product </h1>
// }