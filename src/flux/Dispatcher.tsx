import flux = require('flux');
import {Actions} from "./Actions";

var Dispatcher: flux.Dispatcher<Actions> = new flux.Dispatcher();

export default Dispatcher;