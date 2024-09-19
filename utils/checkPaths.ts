export function checkAdminPath(pathname: string) {
  if (pathname.split('/')[1] === 'admin') {
    return true
  }

  return false
}

export function checkDeveloperPath(pathname: string) {
  if (pathname.split('/')[1] === 'developer') {
    return true
  }

  return false
}
