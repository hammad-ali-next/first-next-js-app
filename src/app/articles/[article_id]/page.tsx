// article -> [article_id] -> page.tsx

"use client";

import Link from "next/link";
import { use } from "react";

//=-=-= For client side searchParams

export default function Article_with_id({ params, searchParams }:
    {
        params: Promise<{ article_id: string }>,
        searchParams: Promise<{ lang?: "en" | "fr" | "es" }>
    }
) {
    const { article_id } = use(params);
    const { lang = "en" } = use(searchParams);
    return <>
        <h1>Article {article_id} in language {lang} </h1>
        <div>
            <Link href={`/articles/${article_id}/?lang=en`}>English</Link>
            <Link href={`/articles/${article_id}/?lang=es`}>Spanish</Link>
            <Link href={`/articles/${article_id}/?lang=fr`}>French</Link>
        </div>
    </>
}



//=-=-=-=-= for server side =-=-=-=-=-=


// export default async function ({ params, searchParams }:
//     {
//         params: { article_id: string },
//         searchParams: { lang?: "en" | "fr" | "es" }
//     }
// ) {
//     const { article_id } = (await params);
//     const { lang = "en" } = await searchParams;
//     return <>
//         <h1>Article {article_id} in language {lang} </h1>
//         <div>
//             <Link href={`/articles/${article_id}/?lang=en`}>English</Link>
//             <Link href={`/articles/${article_id}/?lang=es`}>Spanish</Link>
//             <Link href={`/articles/${article_id}/?lang=fr`}>French</Link>
//         </div>
//     </>
// }