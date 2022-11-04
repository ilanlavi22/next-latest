import { Suspense } from 'react';
import Users from './users';
export default function UsersPage() {
  return (
    <div>
      <h2>Users</h2>
      <Suspense fallback={<p>loading</p>}>
        <Users />
      </Suspense>
    </div>
  );
}
