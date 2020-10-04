import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { HotelEntityVm } from './api/hotel-collection.vm';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '500px',
    marginTop: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

interface Props {
  hotel: HotelEntityVm;
}

export const HotelCard: React.FunctionComponent<Props> = (props) => {
  const { hotel } = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label='Hotel'>{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            className={classes.cardMedia}
          />
          <Typography variant='subtitle1' gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label='Add to favorites'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Share'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
