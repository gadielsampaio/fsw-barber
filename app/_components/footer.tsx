import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex items-center justify-center px-5 py-6">
          <p className="text-xs text-gray-400">
            © 2023 Copyright <strong>FSW Barber</strong>.
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
