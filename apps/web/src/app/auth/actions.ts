'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.set(
    'client_id',
    process.env.NEXT_BE_GITHUB_OAUTH_CLIENT_ID!,
  )
  githubSignInURL.searchParams.set(
    'redirect_uri',
    process.env.NEXT_BE_GITHUB_OAUTH_CLIENT_REDIRECT_URI!,
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
