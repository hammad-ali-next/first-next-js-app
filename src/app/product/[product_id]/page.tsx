//product -> [product_id] ->  page.tsx

export default function ({ params }: {
    params: { product_id: string }
}) {
    const product_id = params.product_id;
    return <h1>Product's Detail of {product_id}</h1>
}



//use promise like this but following can be achieved efficiently using above code

// export default async function ({ params }: {
//     params: Promise<{ product_id: string }>
// }) {
//     const product_id = (await params).product_id;
//     return <h1>Product's Detail of {product_id}</h1>
// }