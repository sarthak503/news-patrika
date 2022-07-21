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
      <Card sx={{ maxWidth: 350, height: 380 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Item.media}
            //alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "flex-end",
                marginTop: "2%",
                fontSize: 18,
                fontWeight: "bold",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {Item.title.substr(0, 70)}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "flex-end",
                marginTop: "5%",
                fontSize: 15,
                alignItems: "center",
              }}
              variant="body2"
              color="text.secondary"
            >
              {Item.summary.substr(0, 110)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "flex-end",
            marginTop: "2%",
          }}
          href={Item.link}
          size="small"
        >
          Learn More
        </Button>
      </Card>
    </div>
  );
};
export default NewsCard;
