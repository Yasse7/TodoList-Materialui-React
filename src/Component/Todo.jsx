import React from "react"
import {Card,Container,CardContent,IconButton,Typography} from "@mui/material"
import {Check,Delete} from "@mui/material/Icon"
import { green } from "@mui/material/colors"

const Todo = ()=>{
    return(
        <div>
            <Container>
                <Card variant="outlined" style={{
                    marginTop : 35,
                    background : "lightgray"
                }}>
                    <CardContent>
                        {/*check Icon*/}
                        <Typography variant="h5" component="h2">
                            <IconButton>
                                <Check style={{color:green}} />
                            </IconButton>
                        </Typography>
                    </CardContent>

                </Card>
            </Container>

        </div>

    )
}
export default Todo;