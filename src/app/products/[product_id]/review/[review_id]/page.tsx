//review -> [review_id] -> page.tsx
// import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function review_product_with_id({ params }: {
    params: Promise<{ product_id: string, review_id: number }>
}) {
    const num = getRandomInt(2);
    if (num == 1) {
        throw new Error("Error loading review");
    }
    const review_id = (await params).review_id;
    if (review_id > 1000) {
        // notFound();
        redirect('/products')
    }
    return <h1>Review {review_id} of Product {(await params).product_id} </h1>
}


// export default async function ({ params }: {
//     params: Promise<{ review_id: number }>
// }) {
//     const review_id = (await params).review_id;
//     return <h1>Review {review_id} of Product </h1>
// }