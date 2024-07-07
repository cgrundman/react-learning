import { useAccordionContext } from "./Accordion.jsx"
import { useAccordionItemContext } from "./AccordionItem.jsx";

export default function AccordionTitle({ className, children }) {
    const {toggleItem} = useAccordionContext();
    const id = useAccordionItemContext();

    return (
        <h3 onClick={() => toggleItem(id)} className={className}>
            {children}
        </h3>
    )
}