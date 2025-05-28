export default async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("Intentionaly Waiting for 1 sec")
        }, 1000)
    })
    return <h1>My blog</h1>
}