import { ITopic } from '../../types/TopicType';
import Dispatcher from '../Dispatcher';
import { Actions } from '../Actions';
import { IComment } from '../../types/CommentType';

export class CommentsActionCreator{
    public getComments(topicObjectId: string): void{
        //TODO grab data
        let comments: IComment[] = ;
        Dispatcher.dispatch({
            actiontype: Actions.UpdateTopic,
            actionDataInterface: comments
        });
    }
}