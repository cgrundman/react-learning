import { useState } from "react";

export default function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    return (
        <p>Currently Active Question</p>
    )
}