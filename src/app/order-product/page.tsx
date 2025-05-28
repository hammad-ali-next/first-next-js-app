"use client";
import { useRouter } from "next/navigation";

export default function Order_Product() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order Placed")
        // router.push('/')
        router.replace('/')
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}