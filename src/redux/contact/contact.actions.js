const getContacts =  contacts =>({
  type : 'GET_CONTACTS',
  payload: contacts,
})

export default getContacts;