// require('./Events.scss');
import './Events.scss';


const DeferMe = () => {
  return null;
}

export default DeferMe;

// NOTE: works for deferring the loading of a group of js and css files after page loads
// helps projects avoid conflicts in page loading since all the files aren't stored in a single bundle.js/css file
// these files only load when triggered by an event or by the loading of a specific element using a useEffect/Suspend trigger