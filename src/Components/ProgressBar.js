







import { Progress } from "reactstrap"


import React from 'react'
import { Typography } from "@mui/material"

export const ProgressBar = () => {
    return (

        <>
            <Progress
                className="my-3"
                multi
            >
                <Progress
                    animated
                    bar
                    value="10"
                />
                <Progress
                    animated
                    bar
                    color="success"
                    value="30"
                />
                <Progress
                    animated
                    bar
                    color="warning"
                    value="20"
                />
                <Progress
                    animated
                    bar
                    color="danger"
                    value="20"
                />
            </Progress>
            </>

    )
}


