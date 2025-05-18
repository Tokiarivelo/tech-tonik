import Link from "next/link"
import { Button } from "../ui/button"

const MyButton = () => {
  return (
    <Button variant='outline' className="mr-20 rounded-2xl p-5 font-bold border-none" asChild>
        <Link href='/login' className="text-secondary bg-primary cursor-pointer">
            Login
        </Link>
    </Button>
  )
}

export default MyButton