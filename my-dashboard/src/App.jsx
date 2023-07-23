import Grid from "@mui/material/Grid"
import { AccountCircle, ShoppingCart, BackHand } from "@mui/icons-material";
import './App.css'

const App = () => {

  return (
    <>
     <Grid container spacing={2}>
      <Grid item xs={2.5}>
        <div className="sidebar">
          <h3>Side bar for doing things</h3>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="topSideBarInnerGrid">
                <h3>Transactions</h3>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="sidebarInnerLeft">
                <AccountCircle fontSize="large"/>
                <h4>LOGIN</h4>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="sidebarInnerRight">
                <ShoppingCart fontSize="large"/>
                <h4>Shopping cart</h4>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={9.5}>
        <div className="rightSection">
          <h1>Dashboard</h1>
          <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="dashboardBoxes">
              <BackHand />
              <h6>Heading</h6>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="dashboardBoxes">
              <BackHand />
              <h6>Heading</h6>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="dashboardBoxes">
              <BackHand />
              <h6>Heading</h6>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <div className="bottomLeft">
              <h2>STUFF</h2>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="bottomRight">
              <h2>MORE STUFF</h2>
            </div>
          </Grid>
        </Grid>
        </div>
      </Grid>
     </Grid>
    </>
  )
}

export default App
