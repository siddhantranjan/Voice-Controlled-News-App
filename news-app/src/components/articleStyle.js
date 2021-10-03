import { yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  activeCard: {
    borderTop: '10px solid rgb(23, 126, 129)',
    "$news-card__details-wrapper": {
      maxHeight: "20rem",
      opacity: 1
    },
    "$news-card__text-wrapper": {
      backgroundColor: "rgb(23, 126, 129)"
    },
    "$news-card__title": {
      color: yellow
    },
    "$news-card__image": {
      transform: "scale(1.2)",
    }
  },
});