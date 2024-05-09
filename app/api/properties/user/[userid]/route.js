import ConnectDB from "@/config/db"
import Property from '@/models/Property'

// Get /api/properties/user/:userId
export const GET = async (request, { params }) => {
    try {
        await ConnectDB()

        const userId = params.userId

        if (!userId) {
            return new Response('User ID is required', { status: 400 })
        }

        const properties = await Property.find({ owner: userId })
        
        return new Response(JSON.stringify(properties), {
            status: 200,
        });
    } catch(error) {
        console.log(error)
        return new Response('Something went wrong...', {
            status: 500
        })
    }
}