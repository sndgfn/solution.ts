type ValueType = string | number | boolean;

function formatValue(value: ValueType) {
    if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return !value;
    }
}


type valueType = string | any[]
function getLength(value: valueType) {
    if (typeof value === 'string') {
        return value.length
    }
    else if (Array.isArray(value)) {
        return value.length
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);

    }
}


function filterByRating<T extends { rating: number }>(value: T[]) {
    const newArray: T[] = []
    value.map((item) => {
        if (item.rating >= 4) {
            newArray.push(item)
        }
    })
    return newArray
}

function filterActiveUsers<T extends { id: number, name: string, email: string, isActive: boolean }>(value :T[]) {
    const newArray:T[]=[]
        value.map((item) => {
        if (item.isActive== true) {
            newArray.push(item)
        }
    })
    return newArray
 }
