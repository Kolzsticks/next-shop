import { cookies } from 'next/headers';

export async function CheckCookie() {
  const cookieStore = await cookies();
  return cookieStore.has('loggedin');
}
