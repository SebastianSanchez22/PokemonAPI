export function formatName(name:string): string{
    if(name.includes("♀")){
        return name.replace("♀", "-f");
    }
    else if(name.includes("♂")){
        return name.replace("♂", "-m");
    }
    else if(name.includes(". ")){
        return name.replace(". ", "-");
    }
    else if(name.includes("farfetch'd")){
        return name.replace("farfetch'd", "farfetchd");
    }
    else if(name.includes("mime%20jr.")){
        return name.replace("mime%20jr.", "mr.-mime");
    }
    else return name;
}