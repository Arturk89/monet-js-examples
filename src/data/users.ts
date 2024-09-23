export type User = {
    id?: string,
    name: string,
    age: number,
    email: string
}

export const users: User[] = [
    {"id": "1", "name": "Anna Nowak", "age": 28, "email": "anna.nowak@example.com"},
    {"id": "2", "name": "Jan Kowalski", "age": 34, "email": "jan.kowalski@example.com"},
    {"id": "", "name": "Katarzyna Wiśniewska", "age": 26, "email": "katarzyna.wisniewska@example.com"},
    {"id": "4", "name": "Michał Zieliński", "age": 40, "email": "michal.zielinski@example.com"},
    {"id": "", "name": "Aleksander Wójcik", "age": 30, "email": "aleksander.wojcik@example.com"},
    {"id": "6", "name": "Ewa Dąbrowska", "age": 23, "email": "ewa.dabrowska@example.com"}
]
