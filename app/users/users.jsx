async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
