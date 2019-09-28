export const fetchContact = id => {
    return $.ajax({
        method: "GET",
        url: `/api/contacts/${id}`
    })
}

export const fetchContacts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/contacts"
    })
}

export const createContact = contact => {
    return $.ajax({
        method: "POST",
        url: "/api/contacts",
        data: { contact }
    })
}

export const updateContact = contact => {
    return $.ajax({
        method: "PATCH",
        url: `/api/contacts/${contact.id}`,
        data: { contact }
    })
}

export const deleteContact = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/contacts/${id}`
    })
}