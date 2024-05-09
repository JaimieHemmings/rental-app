import connectDB from "@/config/db";
import Property from "@/models/Property";

// GET /api/properties/search
export const GET = async (request) => {
    try {
        await connectDB()

        const { searchParams } = new URL(request.url)
        const location = searchParams.get('location')
        const propertyType = searchParams.get('propertyType')

        const locationPattern = new RegExp(location, 'i')

        let query = {
            $or: [
                {name: locationPattern},
                {description: locationPattern},
                {'location.street': locationPattern},
                {'location.city': locationPattern},
                {'location.state': locationPattern},
                {'location.zipcode': locationPattern},
            ],
        }

        if(propertyType && propertyType !== 'All') {
            const typePattern = RegExp(propertyType, 'i')
            query.type = typePattern
        }

        const properties = await Property.find(query)

        return new Response(JSON.stringify(properties), 
        {status: 200})
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify("Something went wrong", 
        {status: 500}))
    }
}