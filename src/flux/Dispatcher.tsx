import flux = require('flux');
import { Actions, IAction } from './Actions';

let Dispatcher: flux.Dispatcher<IAction> = new flux.Dispatcher();

Dispatcher.register(function(action: IAction){
    switch(action.actiontype){
        case Actions.CreateTopic:
            
    }
});

export default Dispatcher;