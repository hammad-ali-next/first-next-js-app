export default async function Blog() {
    // await new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve("Intentionaly Waiting for 1 sec")
    //     }, 1000)
    // })
    // return <h1>My blog</h1>
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE3NDg0NDk3NjJ9.jm3NnHAn6jvCYAKIdpdyD_j0bi5SYl4_FhQmAkMXKVE";
    const res = await fetch("https://fast-api-first.vercel.app/blog", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
    });

    if (!res.ok) return <div>Error fetching blog: {res.status}</div>;
    const data = await res.json();
    return <div>{JSON.stringify(data)}</div>;

}