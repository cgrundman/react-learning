import { useRouter } from "next/router";

// our-domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newId = router.query.newsid;

    // send request to backend API to fetch news item

    return (
        <h1>The {newId} Page</h1>
    )
}

export default DetailPage