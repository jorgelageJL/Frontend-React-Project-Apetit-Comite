import"./Home.css";
import Header from "../../components/Header/Header";import { styled } from '@mui/material/styles';
import {Box, Grid} from '@mui/material';
import FoodBasket from "../../assets/Food_Basket.svg"


const Home = () => {
  return (
    <div>
      <Header/>

      {/* ---> This is main grid <--- */}
      <Grid container spacing={2} sx={{ display: 'flex', width: '100%', margin: '0 auto', maxWidth: '1800px' }}>
       <Grid className="MainGrid" item xs={6} md={8}>
          <Box p={10} sx={{ display: 'flex', height: '100%', paddingLeft: 10 }}>

            <Box bgcolor="brown" p={10} style={{ marginBottom: '20px' }}>
            <img src={FoodBasket} alt="Food Basket" />
            <h2>This is Main Box</h2> 
            <p>Content</p>
            </Box>

          </Box>
        </Grid>

        {/* ---> This is side grid <--- */}
        <Grid className="SideGrid" item xs={6} md={4} sx={{ height: '100%'}}> 
          <Box bgcolor="white" p={10} sx={{ display: 'flex', height: '100%', paddingLeft: 10 }}>
            <h1>Trending</h1>
            <Box bgcolor="brown" p={10} style={{ marginBottom: '20px' }}>
            <img src={FoodBasket} alt="Food Basket" style={{ width: '200px', height: '200px', float: 'left', marginRight: '10px' }} />
            <div style={{ display: 'inline-block' }}>
              <h2>This is box 1</h2> 
              <p>Content</p>
            </div>
            </Box>

            <Box bgcolor="white" p={10} style={{ marginBottom: '20px' }}>
            <img src={FoodBasket} alt="Food Basket" style={{ width: '200px', height: '200px', float: 'left', marginRight: '10px' }} />
            <div style={{ display: 'inline-block' }}>
            <h3>This is box 2</h3> 
            <p>Content</p>
            </div>
            </Box>

            <Box bgcolor="pink" p={10} style={{ marginBottom: '20px' }}>
            <img src={FoodBasket} alt="Food Basket" style={{ width: '200px', height: '200px', float: 'left', marginRight: '10px' }} />
            <div style={{ display: 'inline-block' }}>
            <h3>This is box 3</h3> 
            <p>Content</p>
            </div>
            </Box>

          </Box>
        </Grid>
        </Grid>
    </div>
  );
};

export default Home;
