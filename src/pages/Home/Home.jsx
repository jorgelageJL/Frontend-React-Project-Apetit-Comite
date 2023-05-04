import'./Home.css';
import {Grid} from '@mui/material';
import Header from "../../components/Header/Header";

// src: Material Icons
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// src: image
import SampleImage from '../../assets/Sample_Image.png'
import WalkingDog from '../../assets/WalkingDog.png'
import Kimchi from '../../assets/Kimchi.png'
import BlueCheese from '../../assets/BlueCheese.png'
import Beer from '../../assets/Beer.png'

// Recipe Section - Cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {
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
        }}>

{/* --- This is Home Main Grid --- */}

        <Grid item md={8} xs={12}>
          <div className="recommend">
            <a
                href="https://www.eatingwell.com/article/7886602/signs-youre-not-moving-enough-during-the-day/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <img src={WalkingDog} alt='WalkingDog' style={{ width: '100%', height: 'auto' }} />
            <p>NEWS</p>
            <h1>5 Surprising Signs You're Not Moving Enough During the Day</h1>
            <p>If you're not getting enough exercise, your body will let you know. Here are the signs to look out for.</p>
            <p>By Maddy Sweitzer-Lammé</p>
            </a>
          </div>
        </Grid>


{/* --- This is Home Side Grid --- */}

        <Grid item md={4} xs={12}>
          <div className="trend" style={{ backgroundColor: '#E4F1EF', padding: '1.5rem'}}>
            <h1>News & Trending</h1>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', marginBottom: '20px' }}>
                  <a href="https://www.eatingwell.com/article/8043030/best-fermented-foods-for-your-brain-research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <img src={Kimchi} alt='Kimchi' style={{ width: '100%', height: 'auto' }} />
                  <h2>Time to stock up on the yogurt and kimchi!</h2> 
                  <p>By Karla Walsh</p>
                  </a>
                </div>
              </Grid>

              <Grid item xs={12}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', marginBottom: '20px' }}>
                  <a href="https://www.eatingwell.com/article/8040797/blue-cheese-vs-gorgonzola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <img src={BlueCheese} alt='BlueCheese' style={{ width: '100%', height: 'auto' }} />
                  <h2>Blue Cheese vs. Gorgonzola: What's the Difference?</h2>
                  <p>By Stacey Ballis</p>
                  </a>
                </div>
              </Grid>

              <Grid item xs={12}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', marginBottom: '20px' }}>
                  <a href="https://www.eatingwell.com/article/8031691/is-beer-good-for-you/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <img src={Beer} alt='Beer' style={{ width: '100%', height: 'auto' }} />
                  <h2>What Happens to Your Body When You Drink Beer Every Day</h2>
                  <p>By Kiersten Hickman</p>
                  </a>
                </div>
              </Grid>

            </Grid>
          </div>

        </Grid>
      </Grid>


{/* --- Recipes Section --- */}

      <div className='Home_Recipes'>
        <h1>Recipes <DoubleArrowIcon sx={{ color: "green" }} /></h1>
        
        <Grid>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="140"
              image=''
              alt="FoodBox"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  FOOD BOX 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        
      </div>

    </div>
  );
};
