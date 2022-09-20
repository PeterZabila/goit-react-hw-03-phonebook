import styles from "./contactList.module.css";
import { MainTitle } from "components/Main.styled";

export default function ContactList({contacts, onDeleteContact}) {
    const elements = contacts.map(({name, number, id}) => {
        return <li key={id} className={styles.item}> {name}: {number} <span onClick={() => onDeleteContact(id)} className={styles.remove}>X</span></li>
    })
    return (
        <>
            <MainTitle>Contact list</MainTitle>
            <ol>{elements}</ol>
        </>
    )
}