import { ITopic } from "../types/TopicType";

export enum Actions {
    CreateTopic,
    AddComment,
    DeleteComment,
    UpdateTopic,
    GetComments
}


export abstract class IAction{
    public actiontype: Actions;
    public actionDataInterface: any;
}

export class IUpdateTopic extends IAction{
    public actionDataInterface: ITopic;
}