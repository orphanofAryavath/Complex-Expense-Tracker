import React, { useEffect, useRef }  from 'react'
import {Grid} from '@material-ui/core'
import Deatils from './Components/Details/Details'
import useStyles from './styles'
import Main from './Components/Main/Main'
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'

const App = () => {
    const classes = useStyles();
    const { speechState } = useSpeechContext();
    const main = useRef(null)
  
    const executeScroll = () => main.current.scrollIntoView()    
  
    useEffect(() => {
      if (speechState === SpeechState.Recording) {
        executeScroll();
      }
    }, [speechState]);
  
    return (
      <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Deatils title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4}  className={classes.desktop}>
            <Deatils title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Deatils title="Expense" />
          </Grid>
        
        </Grid>
            <PushToTalkButtonContainer>
            <PushToTalkButton size = "3rem"/>
          </PushToTalkButtonContainer>
      </div>
    );
  };
  
  export default App;