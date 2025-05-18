import Link from "next/link"
import { Button } from "../ui/button"

const MyButton = () => {
  return (
    <Button variant='outline' className="mr-20 rounded-2xl p-5 font-bold border-none" asChild>
        <Link href='/login' className="text-primary bg-primary hover:bg-blue-700 cursor-pointer hover:text-white">
            Login
        </Link>
    </Button>
  )
}

export default MyButton