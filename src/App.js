import React, {useEffect,useState} from 'react'
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPost} from './actions/posts'

import memories from './images/memories.png'
import Posts from './component/Posts/posts'
import Form from './component/Form/form'
import useStyle from './styles'


const APP = ()=>{
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyle()
    const dispatch = useDispatch(getPost())

    useEffect(()=>{
        dispatch(getPost())
    },[currentId,dispatch])
    return <Container maxWidth="lg" >
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <Typography className={classes.heading} variant="h2" align="center" >
                
            </Typography>
            <p><h2 style={{color:'rgba(0,183,255, 1)'}} >Journey</h2></p>
            <img className={classes.image} src={memories} alt="memories" height="60" /> 
        </AppBar>
        <Grow in>
            <Container >
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form currentId = {currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>

    </Container>
}

export default APP