export class Commit {
    constructor(public message: string, public id: string, public author: Author, public shorMessage: string) {

    }
}

export class Author {

    constructor(public name: string, public date: Date, public email: string, public tags: string[], public branchName: string) {

    }

}