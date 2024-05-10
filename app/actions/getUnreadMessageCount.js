'use server'

import ConnectDB from '@/config/db'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

async function getUndreadMessageCount() {
  await ConnectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.user) {
    return { error: 'User ID is required' }
  }

  const { userId } = sessionUser;

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  })

  return { count }
}

export default getUndreadMessageCount