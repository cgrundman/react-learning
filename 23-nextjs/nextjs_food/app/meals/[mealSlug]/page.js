import Image from 'next/image'

import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealSlug);
    return {
        title: meal.title,
        decription: meal.summary
    }
}

export default function MealDetailsPage({ params }) {
    const meal = getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'EMAIL'}`} >{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p 
                    className={classes.instructions} 
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                >
                </p>
            </main>
        </>
    )
}