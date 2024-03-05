import { useState } from "react"

export default function UserInput({ initialData, onInput }) {

    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment ($)</label>
                    <input type="number"/>
                    <label>Annual Investment ($)</label>
                    <input type="number"/>
                </p>
                <p>
                    <label>Expected Return (%)</label>
                    <input type="number"/>
                    <label>Duration (years)</label>
                    <input type="number"/>
                </p>
            </div>
        </section>
    )
}