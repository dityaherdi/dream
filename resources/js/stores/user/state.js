import { localUser } from "../../helpers/auth"

const user = localUser()

const state = {
  currentUser: user,
  isLoggedIn: !!user
}

export default state