import Messages from "@/components/Messages"

const messagesPage = () => {
  return (
    <section class="bg-blue-50">
      <div class="container m-auto py-24 max-w-6xl">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <h1 class="text-3xl font-bold mb-4">Your Messages</h1>
          <div class="space-y-4">
            <Messages />
          </div>
        </div>
      </div>
    </section>
  )
}

export default messagesPage
