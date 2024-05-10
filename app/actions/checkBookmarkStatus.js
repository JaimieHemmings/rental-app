'use server'

const { default: ConnectDB } = require('@/config/db')
const { default: User } = require('@/models/User')
const { getSessionUser } = require('@/utils/getSessionUser')

async function checkBookmarkStatus(propertyId) {
  await ConnectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    return { error: 'User ID is required' }
  }

  const { userId } = sessionUser

  // Find user in database
  const user = await User.findById(userId)

  // Check if property is bookmarked
  let isBookmarked = user.bookmarks.includes(propertyId)

  return { isBookmarked }
}

export default checkBookmarkStatus