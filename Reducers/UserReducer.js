var array = [
    {
        id: 1,
        firstName: 'Sambit',
        lastName: 'Prakash',
    },
    {
        id: 2,
        firstName: 'Shakti',
        lastName: 'Prakash',
    },
    {
        id: 3,
        firstName: 'Khusboo',
        lastName: 'Suhashini',
    },
    {
        id: 4,
        firstName: 'BalaSubramanainan',
        lastName: 'M',
    }
]

export default function () {
    return array;
}

export function addUser(user) {
    return array.push(user);
}

