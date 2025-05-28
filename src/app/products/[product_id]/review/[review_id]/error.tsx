"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react";

export default function EroorBoundary({
    error,
    reset

}: {
    error: Error,
    reset: () => void
}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return <div>
        <h1>{error.message}</h1>
        <button onClick={() => reload()} className="bg-red-400 p-2">Try Again</button>
    </div>
}