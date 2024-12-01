'use server'

import { signInWithPassword } from '@/http/sign-in-with-password'

export async function signInWithEmailAndPassword(
  previousState: unknown,
  data: FormData,
) {
  console.log({ previousState })
  const { email, password } = Object.fromEntries(data)

  const response = await signInWithPassword({
    email: String(email),
    password: String(password),
  })

  console.log({ response })

  return 'sucesso'
}
