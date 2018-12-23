import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:"sort"
})
export class SortPipe implements PipeTransform{
    transform(list: any[], sortOrder: string) {

        if(!sortOrder){
            return list;
        }

        if(sortOrder == "asc"){
            return list.sort(this.sortAsc)
        }

        if(sortOrder == "desc"){
            return list.sort(this.sortDesc)
        }

    }

    sortAsc(elem1, elem2){
        if(elem1.name > elem2.name){
            return -1
        }else{
            return 1;
        }
    
        return 0;
    }

    sortDesc(elem1, elem2){
        if(elem1.name > elem2.name){
            return 1
        }else{
            return -1;
        }
    
        return 0;
    }

}

