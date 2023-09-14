const user = {
    name : "hitesh",
    email : "hitesh@gmail.com",
    isActive : true
}

function createUser({name : string , isPaid : boolean}){}

createUser({name : "hitesh",isPaid : true})

function getUser(): { name: string, isPaid : boolean  }{
    return {name : "hitesh",isPaid:true}
}

export {}