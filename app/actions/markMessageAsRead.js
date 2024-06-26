'use server'

import ConnectDB from '@/config/db'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'

async function markMessageAsRead(messageId) {
  await ConnectDB();
  const sessionUser = await getSessionUser()
  if (!sessionUser || !sessionUser.user) {
    throw new Error('User ID is required')
  }
  const { userId } = sessionUser

  const message = await Message.findById(messageId)

  if (!message) throw new Error('Message not found')

  // Verify ownership
  if (message.recipient.toString() !== userId) {
    return new Response('Unauthorized', { status: 401 })
  }
  // Update message to read/unread depending on the current status
  message.read = !message.read

  // revalidate cache
  revalidatePath('/messages', 'page')

  await message.save()
  return message.read
}

export default markMessageAsRead