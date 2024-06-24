import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJS Is a Great Framework
                    </Link>
                </li>
                <li>
                    <Link href="/news/something-else">
                        Something Else
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage