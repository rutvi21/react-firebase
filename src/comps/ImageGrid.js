import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const classes = useStyles();
  //docs.docs.forEach(doc => {
  //  console.log(docs.Description)})

  return (    
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div> 
          <Card className={classes.root}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={doc.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {doc.Description}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
        </div>
        ))}
    </div>
  )
}

export default ImageGrid;
