import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Bienvenido
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
