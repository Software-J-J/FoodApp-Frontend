import { Session } from 'next-auth'
import { redirect } from 'next/navigation'

export default function checkSession({ session }: { session: Session | null }) {
  if (!session) {
    return redirect('/login')
  }

  return
}
