import connectDB from "@/config/db"
import Message from '@/models/Message'
import { getSessionUser } from "@/utils/getSessionUser"

export const dynamic = 'force-dynamic'

// POST /api/messages
export const POST = async (request) => {
    try {
        await connectDB()
        const {name, email, phone, message, property, recipient} = await request.json()
        const sessionUser = await getSessionUser()

        if(!sessionUser || !sessionUser.user) {
            return new Response(
                JSON.stringify({ message: 'You must be logged in to do that.' }),
                 { status: 401})
        }

        const { user } = sessionUser

        // Cannot send message to self
        if(user.id === recipient) {
            return new Response(JSON.stringify({message: 'Cannot send a message to yourself'}), {status: 400})
        }

        const newMessage = new Message ({
            name,
            sender: user.id,
            recipient,
            property,
            email,
            phone,
            body: message
        })

        await newMessage.save()
        return new Response(JSON.stringify({message: 'Message sent'}), {status: 200})
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', {status: 500})
    }
}

// GET /api/messages
export const GET = async (request) => {
    try {
        await connectDB()
        const sessionUser = await getSessionUser()

        if(!sessionUser || !sessionUser.user) {
            return new Response('User ID is required', { status: 401})
        }
        const { userId } = sessionUser

        const messages = await Message.find({ recipient: userId })
            .populate('sender', 'name')
            .populate('property', 'title')

        return new Response(JSON.stringify(messages), {status: 200})

    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', {status: 500})        
    }
}