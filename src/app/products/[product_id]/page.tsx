//product -> [product_id] ->  page.tsx

import { Metadata } from "next";


export const generateMetadata = async ({ params }: {
    params: Promise<{ product_id: string }>
}): Promise<Metadata> => {
    const id = (await params).product_id;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        }, 1000);
    })
    return {
        title: `Product ${title}`,
    }
}


export default async function Product_with_id({ params }: {
    params: Promise<{ product_id: string }>;
}) {
    const { product_id } = await params;
    return <h1>{`Product's Detail of ${product_id}`}</h1>
};



//use promise like this but following can be achieved efficiently using above code

// export default async function ({ params }: {
//     params: Promise<{ product_id: string }>
// }) {
//     const product_id = (await params).product_id;
//     return <h1>Product's Detail of {product_id}</h1>
// }