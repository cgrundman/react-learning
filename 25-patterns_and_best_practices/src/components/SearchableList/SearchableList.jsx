export default function SearchableList({ items }) {
    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.toString()}</li>
                ))}
            </ul>
        </div>
    )
}