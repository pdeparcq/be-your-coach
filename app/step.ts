import {Tag} from './tag';

export class Step{
    public tags : Tag[];
    public distance: number;
    
    constructor(){
        this.tags = [];
        this.distance = 100;
    }
    
    addTag(tag: Tag){
        this.tags.push(tag);
    }
}