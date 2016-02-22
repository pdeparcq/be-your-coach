import {Tag} from './tag';

export class Step{
    public tags : Tag[];
    
    constructor(){
        this.tags = [];
    }
    
    addTag(tag: Tag){
        this.tags.push(tag);
    }
}