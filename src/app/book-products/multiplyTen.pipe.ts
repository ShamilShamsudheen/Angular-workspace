import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'multiplyTen'
})
export class MultiplyTenPipe implements PipeTransform {
    transform(value: any) {
        return value * 10;
    }
}