const storange = localStorage

export function savePeople(people) {
    storange.setItem("people", JSON.stringify(people))
}

export function getPeople() {
    const people = storange.getItem("people")
    return JSON.parse(people) || []
}

export function clearPeople(people) {
    people = []
    savePeople(people)
}