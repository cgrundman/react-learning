import { useAccordionContext } from "./Accordion.jsx"

export default function AccordionTitle({ id, className, children }) {
    const {toggleItem} = useAccordionContext();

    return (
        <h3 onClick={() => toggleItem(id)} className={className}>
            {children}
        </h3>
    )
}