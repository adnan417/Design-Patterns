interface FileSystemComponent{
    showDetails(indent?: string):void
}

class MyFile implements FileSystemComponent{
    constructor(private name:string){}

    showDetails(indent: string = ''): void {
        console.log(`${indent}📄 File: ${this.name}`);
    }
}

class MyFolder implements FileSystemComponent{
    constructor(private name:string = 'New Folder', private children: FileSystemComponent[] = []){}

    add(component:FileSystemComponent){
        this.children.push(component);
    }

    remove(component:FileSystemComponent){
        this.children = this.children.filter((c)=> component !== c)
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}📁 Folder: ${this.name}`);
        for (const child of this.children) {
            child.showDetails(indent + '   ');
        }
    }
}

export {FileSystemComponent,MyFile,MyFolder}