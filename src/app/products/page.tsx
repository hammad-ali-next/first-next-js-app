import Link from "next/link";

export default function Products() {
    const product_id = 101;
    return <>
        <h1>Product Page </h1>
        <Link href={"/product/1"} style={{ background: "grey" }}>Product 1</Link><br />
        <Link href={"/product/2"} style={{ background: "grey" }}>Product 2</Link><br />
        <Link href={"/product/3"} style={{ background: "grey" }} replace>Product 3</Link><br />

        <Link href={`/product/${product_id}`} style={{ background: "grey" }} >Product {product_id}</Link><br />

    </>
}