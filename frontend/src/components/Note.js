import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SimpleExpansionPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleEditButton: false,
      changedTitle: "",
      changedContent: ""
    }
  }

  clickEditButton = () => {
    this.setState({
      toggleEditButton: !this.state.toggleEditButton
    })
  }

  handleEntryUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdateSubmit = e => {
    e.preventDefault()
    console.log(e)
  }

  contentRender = () => {
    if (this.state.toggleEditButton) { //if toggled, show form
      return (
        <form className={this.props.container} noValidate onSubmit={this.handleUpdateSubmit}>
          <div className="left">
            <TextField
              label="Title"
              name="title"
              type="text"
              className={this.props.textField}
              margin="normal"
              variant="outlined"
              onChange={this.handleEntryUpdate}
              defaultValue={this.props.note.title}
              />
            <TextField
              label="Content"
              type="text"
              name="content"
              className={this.props.textField}
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="8"
              onChange={this.handleEntryUpdate}
              defaultValue={this.props.note.content}
              />
          </div>
          <Button variant="contained" size="small" className={this.props.button} label="Submit" type="submit">
            <SaveIcon className={classNames(this.props.leftIcon, this.props.iconSmall)} />
          Save
          </Button>
        </form>
      )
    } else { //if not, then show edit button
      return (
        <React.Fragment>
          <i>{this.props.note.content}</i><br></br><br></br>
          <Button variant="contained" color="default" className={this.props.button} onClick={e => this.clickEditButton()}>
            Edit Your Entry
            <EditIcon className={this.props.rightIcon} />
          </Button>
        </React.Fragment>
      )
    }
  }


  render () {
    return (
    <div className={this.props.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={this.props.heading}><strong>{this.props.note.title}</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {this.contentRender()}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
