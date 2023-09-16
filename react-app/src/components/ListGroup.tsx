import { MouseEvent, useState } from "react";
function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris',
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //変わる値の時は、stateを使う

    const handleClick = (event: MouseEvent) => console.log(event);
    //items = [];
    return <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                 key={item} 
                 onClick={() => {setSelectedIndex(index)}}>{item}</li>//reactはアイテムの変更を検知するため、それぞれの固有のidが必要。
            ))}
        </ul>
    </>
}
//{items.length === 0 && <p>No item found</p>}は
//{items.length === 0 ? <p>No item found</p> : null}
//と同じ


export default ListGroup;