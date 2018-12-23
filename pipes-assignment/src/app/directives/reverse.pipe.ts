import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: string) {

        if(!value){
            return;
        }

        let valueArray = value.split('');
        let reversedString = valueArray.reverse().toString();
        
        while(reversedString.includes(',') == true){
            reversedString = reversedString.replace(',','');
        }

        return reversedString;
    }

}