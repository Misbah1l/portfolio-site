document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("chat-input");
    const sendButton = document.getElementById("chat-send");
    const messages = document.getElementById("chat-messages");

    if (!input || !sendButton || !messages) {
        console.error("AI chat elements not found.");
        return;
    }

    async function sendMessage() {

        const message = input.value.trim();

        if (!message) {
            return;
        }

        // Show user's message
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = message;

        messages.appendChild(userMessage);

        input.value = "";

        // Show loading message
        const loadingMessage = document.createElement("div");
        loadingMessage.className = "ai-message loading";
        loadingMessage.textContent = "Thinking...";

        messages.appendChild(loadingMessage);

        messages.scrollTop = messages.scrollHeight;

        sendButton.disabled = true;

        try {

            const response = await fetch("http://127.0.0.1:8000/chat", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify({
                    message: message
                })

            });

            if (!response.ok) {
                throw new Error(`Server returned ${response.status}`);
            }

            const data = await response.json();

            loadingMessage.remove();

            const aiMessage = document.createElement("div");
            aiMessage.className = "ai-message";

            aiMessage.textContent =
                data.response ||
                data.message ||
                data.answer ||
                "I received a response, but could not display it.";

            messages.appendChild(aiMessage);

        } catch (error) {

            console.error("AI Assistant Error:", error);

            loadingMessage.remove();

            const errorMessage = document.createElement("div");
            errorMessage.className = "ai-message";

            errorMessage.textContent =
                "Sorry, I couldn't connect to the AI assistant.";

            messages.appendChild(errorMessage);

        }

        sendButton.disabled = false;

        messages.scrollTop = messages.scrollHeight;
    }


    sendButton.addEventListener("click", sendMessage);


    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

});