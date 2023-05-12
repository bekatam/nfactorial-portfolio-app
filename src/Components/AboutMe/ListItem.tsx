type listItem = {
    descr: string
}
export default function ListItem(props: listItem) {
    const {descr} = props;
    return (
        <li className="aboutme__left__ul__list">
            <span className="aboutme__left__ul__list__circle"></span>
            <span className='aboutme__left__ul__list__item'>{descr}</span>
        </li>
    )
}