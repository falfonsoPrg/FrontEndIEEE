import AppBar from './MainComponents/AppBar'
import {BrowserRouter as Router} from 'react-router-dom'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1b2a'
    },
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppBar></AppBar>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
