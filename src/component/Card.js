import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Card.css";

const NewsCard = ({ Item }) => {
  return (
    <div className="cardStyle">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Item.urlToImage}
            //alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={Item.url} size="small">
              Learn More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default NewsCard;
