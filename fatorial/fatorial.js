function fat(x){
    if(x <= 1) return 1;
    else return fat(x-1) * x;
}

module.exports = fat;