let main=[ ]
for(let i=0;i<Infinity;i++) {
    command=prompt('введите команду')
    let str=command.split(', ')
    if(str[0]=="add") {
        main.push(str[1])
    }
    else if(str[0]=='del') {
        for(key in main) {
            if(main[key]==str[1]) {
                main.splice(key,1)
            }
        }
    }
    else if(command=='stop') {
        break
    }
    console.log(main);
}
