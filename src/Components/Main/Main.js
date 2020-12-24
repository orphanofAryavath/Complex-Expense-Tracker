import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ExpenseTrackerContext } from '../../Context/context'
import InfoCard from '../InfoCard'
import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'

function Main() {
   
    const classes = useStyles()
    const {balance} = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title = "Expense Tracker" subheader = "Made by Himanshu Verma with Speechly"/>
            <CardContent>
                <Typography align = "center" variant = "h5">Total Balance {balance} Rupee</Typography>
                <Typography variant = "subtitle1" styles = {{lineHeight: '1.5em', marginTop: '20px'}}>
                    <InfoCard/>
                    
                   

                </Typography>
                <Divider className = {classes.divider} />
                    <Form/>
            </CardContent>
            <CardContent className = {classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <List/>
                    </Grid>

                </Grid>
            </CardContent>
            

        </Card>
    )
}

export default Main
