import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YzE4YTJkLThlN2EtNDA2NS05NzBkLTgwMDFhNzdlMjQ0MCIsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwibmFtZSI6Ik1hcmlhIiwicGhvbmUiOiIxMjM0NTYiLCJhZGRyZXNzIjoiQ2VydmFudGVzIDE2IiwiZGVsaXZlcnlNZXRob2QiOm51bGwsInN0YXR1cyI6dHJ1ZSwicm9sZXMiOlsiVVNFUiJdLCJjcmVhdGVkQXQiOiIyMDI0LTA4LTI4VDE3OjMxOjEyLjcyNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA4LTI4VDE3OjMxOjEyLjcyNloiLCJpYXQiOjE3MjUzMTQ5MTYsImV4cCI6MTcyNTMyOTMxNn0.BrP9V1WcmpKIqpMJlUQALOuBKGIuXucillOx6wdyWG'

export async function POST(req: Request) {
  const data = await req.json()
  let isAdmin = true

  if (isAdmin) {
    const response = await axios.post(
      'http://localhost:3010/api/products',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    )
    return Response.json(response)
  } else {
    return Response.json({})
  }
}
