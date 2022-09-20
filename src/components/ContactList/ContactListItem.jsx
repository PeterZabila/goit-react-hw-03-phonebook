import {Button} from '../Main.styled'

export default function ContactListItem ({id, name, number, onDeleteContact}) {
    return (
            <li key={id}>
                <p>{name} : {number}</p>
                <Button type="button" onClick={() => onDeleteContact(id)}>Delete contact</Button>
            </li>
    )
}