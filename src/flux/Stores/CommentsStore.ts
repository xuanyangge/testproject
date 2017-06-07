import { ReduceStore } from 'flux/utils';

import {doop, Doop} from "doop";
import { IAction, Actions, IUpdateTopic } from '../Actions';
import { IComment } from '../../types/CommentType';

export class ICommentsStoreState {
    constructor(){
        this.comments([]);
    }

    @doop
    get comments() {return doop<IComment[], this>();}
}


export class CommentsStore extends ReduceStore<ICommentsStoreState, IAction>{
    getInitialState(): ICommentsStoreState{
        return new ICommentsStoreState();
    }
    
    reduce(state: ICommentsStoreState, action: IAction): ICommentsStoreState{
        switch(action.actiontype){
            case Actions.UpdateTopic:
                return this.updateComments(state,action);
        }
    }

        updateComments(state: ICommentsStoreState, action: IAction){ 
        return state.topic(action.actionDataInterface);
    }
}