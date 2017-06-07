import { ReduceStore } from 'flux/utils';
import { ITopic } from './../../types/TopicType';

import {doop, Doop} from "doop";
import { IAction, Actions, IUpdateTopic } from '../Actions';

export class ITopicStoreState{
    constructor() {
        //TODO Think about how to initialzie here.
        this.topic(null);
    }

    @doop
    get topic(){ return doop<ITopic,this>();}
}

export class TopicStore extends ReduceStore<ITopicStoreState, IAction>{
    getInitialState(): ITopicStoreState{
        return new ITopicStoreState();
    }
    
    reduce(state: ITopicStoreState, action: IAction): ITopicStoreState{
        switch(action.actiontype){
            case Actions.UpdateTopic:
                return this.updateTopic(state,action);
        }
    }

    updateTopic(state: ITopicStoreState, action: IUpdateTopic){ 
        return state.topic(action.actionDataInterface);
    }
}