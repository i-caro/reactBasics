export default function TabButton({children, isSelected, ...data}){
    return (
        <li>
            <button className={isSelected? "active": undefined} {...data}>{children}</button>
        </li>
    );
}