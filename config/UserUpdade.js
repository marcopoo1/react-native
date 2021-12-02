// import necessary react and react native modules
import firebase from '../config/firebase.js'
rootRef = firebase.database().ref();

export default class UserUpdate extends Component {
  updateUser = () => {
    // get your userId and new data ;
    rootRef.child(`users/${uid}`).update(newData);
  }

  render() {
    return ( <TouchableOpacity onPress = {
        this.updateUser()}><Text> Update User </Text> </TouchableOpacity>);
  }
}