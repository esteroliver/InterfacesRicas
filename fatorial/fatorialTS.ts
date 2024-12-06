export default function fat(x: number): number{
    if(x == 1 || x == 0) return 1;
    else return fat(x-1) * x;
}