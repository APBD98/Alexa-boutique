

export default async function getUsers() {
 const data = await fetch('https://fakestoreapi.com/users')
 const users = data.json()

 return users
}
