import Link from "next/link";
import { useRouter } from "next/router"

export default function Sidebar() {
  const router = useRouter();
    return (
      <>
        <div className="nav_left_bar">
          <ul>
              <li className={(router.pathname == '/client/my-profile' ? " active" : "")}><Link href="/client/my-profile">Profile</Link></li>
              {/* <li className={(router.pathname == '/client/my-account' ? " active" : "")}><Link href="/client/my-account">My Account</Link></li> */}
          </ul>
        </div>
      </>
    )
}