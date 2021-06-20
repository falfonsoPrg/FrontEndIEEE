import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { positions } from '@material-ui/system';
const useStyles = makeStyles({
  root: {
    Width: 200,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <a onClick={toggleModal.bind(this)}>
              <CardMedia
                className={classes.media}
                image={props.gallery.image}
                title={props.gallery.title}
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {props.gallery.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.gallery.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="danger" size="small"><DeleteIcon /> Delete image </Button>
          </CardActions>
        </Card>
      </div>
      <div >
        <Modal style={{ top: '14%' }} isOpen={modalIsOpen} toggle={toggleModal.bind(this)}>
          <ModalHeader>{props.gallery.title}</ModalHeader>
          <ModalBody>
          <ModalFooter >
            <img src={props.gallery.image} width="100%" height="100%" />
            </ModalFooter>
            <ModalFooter >
              <div style={{textAlign:'left'}}>
              {props.gallery.description}
              </div>
            </ModalFooter>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={toggleModal.bind(this)}>Exit<ExitToAppIcon /></Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
