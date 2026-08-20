document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("chat-input");
    const sendButton = document.getElementById("chat-send");
    const messages = document.getElementById("chat-messages");

    if (!input || !sendButton || !messages) {
        console.error("AI chat elements not found.");
        return;
    }


    function formatAIResponse(text) {

        // Escape HTML first for safety
        let formatted = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");


        // Convert Markdown bold
        formatted = formatted.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );


        // Handle bullet points even when AI puts them on the same line
        formatted = formatted.replace(
            /\s+-\s+(?=<strong>)/g,
            "\n- "
        );


        const lines = formatted.split(/\n+/);

        let html = "";
        let inList = false;


        lines.forEach(line => {

            const trimmed = line.trim();

            if (!trimmed) {
                return;
            }


            // Bullet point
            if (trimmed.startsWith("- ")) {

                if (!inList) {
                    html += "<ul>";
                    inList = true;
                }

                html += `<li>${trimmed.substring(2)}</li>`;

            } else {

                if (inList) {
                    html += "</ul>";
                    inList = false;
                }

                html += `<p>${trimmed}</p>`;
            }
        });


        if (inList) {
            html += "</ul>";
        }


        return html;
    }


    async function sendMessage() {

        const message = input.value.trim();

        if (!message) {
            return;
        }


        // User message
        const userMessage = document.createElement("div");

        userMessage.className = "user-message";

        userMessage.textContent = message;

        messages.appendChild(userMessage);


        input.value = "";


        // Loading message
        const loadingMessage = document.createElement("div");

        loadingMessage.className = "ai-message loading";

        loadingMessage.textContent = "Thinking...";

        messages.appendChild(loadingMessage);


        messages.scrollTop = messages.scrollHeight;

        sendButton.disabled = true;


        try {

            const response = await fetch(
                "http://127.0.0.1:8000/chat",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    body: JSON.stringify({
                        message: message
                    })
                }
            );


            if (!response.ok) {
                throw new Error(
                    `Server returned ${response.status}`
                );
            }


            const data = await response.json();


            loadingMessage.remove();


            const aiMessage = document.createElement("div");

            aiMessage.className = "ai-message";


            const answer =
                data.response ||
                data.message ||
                data.answer ||
                "I received a response, but could not display it.";


            // Render formatted response
            aiMessage.innerHTML = formatAIResponse(answer);


            messages.appendChild(aiMessage);


        } catch (error) {

            console.error(
                "AI Assistant Error:",
                error
            );


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


    sendButton.addEventListener(
        "click",
        sendMessage
    );


    input.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                sendMessage();
            }

        }
    );

});