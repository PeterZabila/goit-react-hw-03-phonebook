import { Component } from 'react';
import { Container, Button, MainTitle, Label, Input } from '../Main.styled';
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
        name: '',
        number: '',
        invalidForm: false,
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ 
            [name]: value,
            invalidForm: false,
        })
    }

    validateForm = (data) => {
        const isValid = !!data.name && !!data.number;
        return isValid;
    }

    handleSubmit = e => {
        e.preventDefault();

        const isValid = this.validateForm(this.state);
        if(isValid) {
            const { name, number } = this.state;
                const newContact = {name,
                                    id: nanoid(),
                                    number,
                                }
            this.props.onSubmit(newContact);
        this.reset();
        } else  {
            this.setState({
                invalidForm: true,
            })
        }
    }
       
    reset = () => {
        this.setState( {name: '', number: '' });
    }


    render() {
        const { invalidForm } = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Label htmlFor="name">
                        <MainTitle>Name</MainTitle>
                            <Input
                                    type="text"
                                    name="name"
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    required
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    minLength={3}
                                    placeholder="Please enter your name"
                            />
                    </Label>

                    <Label htmlFor="tel">
                        <MainTitle>Phone number</MainTitle>
                        <Input
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                onChange={this.handleChange}
                                value={this.state.number}
                                minLength={5}
                                placeholder="Please enter your number"
                        />
                    </Label>
                <br />
                <Button type="submit">Add contact</Button>
                <div>{invalidForm ? (<p>Make sure you enter unique contact</p>) : null}</div>

            </form>
            </Container>
            
        )
    }
}

export default Form;
