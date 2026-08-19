const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

async function askAI() {
    const message = chatInput.value.trim();

    if (!message) {
        return;
    }

    addMessage(message, "user-message");

    chatInput.value = "";

    addMessage("Thinking...", "ai-message loading");

    try {
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        removeLoadingMessage();

        if (!response.ok) {
            throw new Error(data.detail || "Something went wrong.");
        }

        addMessage(data.response, "ai-message");

    } catch (error) {
        removeLoadingMessage();

        addMessage(
            "Sorry, I couldn't connect to the AI assistant.",
            "ai-message"
        );

        console.error(error);
    }
}

function addMessage(text, className) {
    const messageElement = document.createElement("div");

    messageElement.className = className;
    messageElement.textContent = text;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingMessage() {
    const loadingMessage = chatMessages.querySelector(".loading");

    if (loadingMessage) {
        loadingMessage.remove();
    }
}

chatSend.addEventListener("click", askAI);

chatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        askAI();
    }
});