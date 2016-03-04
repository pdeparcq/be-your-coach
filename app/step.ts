import {Tag} from './tag';

export class Step{
    public tags : Tag[];
    public distance: number;
    public rest : number;
    
    constructor(){
        this.tags = [];
        this.distance = 100;
        this.rest = 0;
    }
    
    addTag(tag: Tag){
        this.tags.push(tag);
    }
}