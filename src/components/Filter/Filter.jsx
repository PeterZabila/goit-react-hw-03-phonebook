import { Label, Input, MainTitle } from '../Main.styled'
export default function Filter ({onChange, value}) {

    return (
        <div>
          <Label htmlFor="filter">
             <MainTitle>Find contacts by name</MainTitle>
             <Input 
                type="text" 
                name="filter"
                value={value} 
                onChange={onChange}
                placeholder="Filter contacts"
            />
                
          </Label>
        </div>
     ) 
}

