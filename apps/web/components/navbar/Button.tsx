import Link from "next/link"
// import Login from "../auth/login/Login"
import { Button } from "../ui/button"

const MyButton = () => {
  return (
    <Button variant='outline' className="mr-20" asChild>
        <Link href='/login' className="text-white bg-tertiary rounded-2xl p-3">
            Login
        </Link>
    </Button>
  )
}

export default MyButton