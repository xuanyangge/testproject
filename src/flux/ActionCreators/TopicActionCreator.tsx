import { ITopic } from '../../types/TopicType';
import Dispatcher from '../Dispatcher';
import { Actions } from '../Actions';

export class TopicActionCreator{
    public createTopic(topic: ITopic){
        Dispatcher.dispatch({
            actiontype: Actions.CreateTopic,
            actionDataInterface: topic
        })
    }
}