type User = {
    [key: string]: any;
};

export const toUpperCaseFields = (user: User): User => {
    const updatedUser: User = {};

    for (const key in user) {
        if (typeof user[key] === 'string') {
            updatedUser[key] = user[key].toUpperCase();
        } else {
            updatedUser[key] = user[key];
        }
    }

    return updatedUser;
};