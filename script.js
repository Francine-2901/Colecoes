function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push (key);
        }
    } 
    return admins;
}

const usuarios =  new Map();

usuarios.set('Nala', 'Admin');
usuarios.set('Fran', 'Admin');
usuarios.set('Thor', 'usuer');
usuarios.set('Drew', 'Admin');

console.log(getAdmins(usuarios));