import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { logout, checkAuth } from "@/redux/features/authSlice"

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  const handleLogout = async () => {
    await dispatch(logout())
    window.location.href = "/"
  }

  const navItems = isAuthenticated ? LoggedInItems : LoggedOutItems
}
