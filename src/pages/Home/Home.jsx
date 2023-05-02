import"./Home.css";
import SampleImage from "../../assets/Sample_Image.png"
import {Grid} from '@mui/material';

const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={10} 
      sx={{ 
        display: 'flex', 
        width: '100%', 
        margin: '0 auto', 
        maxWidth: '1800px',
        paddingRight: '75px',
        paddingBottom: '100px'
        }}
        >

        <Grid item md={8} xs={12}>
          <div className="recommend">
            <h1>This is Main Grid: Recommendation section</h1>
            <img src={SampleImage} alt='Sample' style={{ width: '100%', height: 'auto' }} />
            <p>This is content</p>
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <div className="trend">
            <h1>This is Side Grid: Trending Topic</h1>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div style={{ backgroundColor: 'pink', padding: '10px', marginBottom: '20px' }}>
                  <img src={SampleImage} alt='Sample' style={{ width: '100%', height: 'auto' }} />
                  <h2>This is Title: BOX 1</h2>
                  <p>This is content</p>
                </div>
              </Grid>

              <Grid item xs={12}>
                <div style={{ backgroundColor: 'pink', padding: '10px', marginBottom: '20px' }}>
                  <img src={SampleImage} alt='Sample' style={{ width: '100%', height: 'auto' }} />
                  <h2>This is Title: BOX 2</h2>
                  <p>This is content</p>
                </div>
              </Grid>

              <Grid item xs={12}>
                <div style={{ backgroundColor: 'pink', padding: '10px', marginBottom: '20px' }}>
                  <img src={SampleImage} alt='Sample' style={{ width: '100%', height: 'auto' }} />
                  <h2>This is Title: BOX 3</h2>
                  <p>This is content</p>
                </div>
              </Grid>

            </Grid>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Home;




