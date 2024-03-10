import React from "react"
import {FormControl,Container,TextField,Button} from '@mui/material'

const TodoForm =()=>{
    return (
        <Container maxWidth="sm">
            <form>
                <FormControl fullWidth={true}> 
                    <TextField label="je vais faire..." required={true} />
                    <Button variant="contained" color="primary" type="submit" style={
                        {
                            marginTop : 5
                        }
                    }>Ajouter Task</Button>
                </FormControl>
            </form>

        </Container>

    )
}

export default TodoForm;