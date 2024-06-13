import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals</h1>
            <p><Link href="/meals/share">Share Meals</Link></p>
        </main>
    )
}