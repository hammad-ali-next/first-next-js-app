import Link from "next/link";

export default function Home() {
    return <>
        <h1>Hy it home page</h1>
        <Link href={"/blog"} style={{ background: "grey" }}>Blog</Link>
        <br></br>
        <Link href={"/product"} style={{ background: "grey" }}>Product</Link>


    </>
}