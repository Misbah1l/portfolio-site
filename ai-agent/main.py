from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

from config import OPENROUTER_API_KEY
from prompts import SYSTEM_PROMPT


# ================= APP =================

app = FastAPI(
    title="Misbah Portfolio AI Agent",
    description="AI assistant for Misbah Saeed's professional portfolio",
    version="1.0.0",
)


# ================= CORS =================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ================= OPENROUTER CLIENT =================

client = OpenAI(
    api_key=OPENROUTER_API_KEY,
    base_url="https://openrouter.ai/api/v1",
)


# ================= MODELS =================

class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


# ================= ROOT =================

@app.get("/")
def root():

    return {
        "message": "Misbah Portfolio AI Agent is running",
        "status": "online",
    }


# ================= CHAT =================

@app.post(
    "/chat",
    response_model=ChatResponse
)
def chat(request: ChatRequest):

    # Validate input

    if not request.message.strip():

        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty",
        )


    try:

        # ================= AI REQUEST =================

        completion = client.chat.completions.create(

            model="~openai/gpt-latest",

            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": request.message,
                },
            ],

            temperature=0.3,

            max_tokens=500,
        )


        # ================= EXTRACT RESPONSE =================

        answer = completion.choices[0].message.content


        if not answer:

            raise HTTPException(
                status_code=500,
                detail="AI returned an empty response.",
            )


        # ================= RETURN =================

        return ChatResponse(
            response=answer.strip()
        )


    except HTTPException:
        raise


    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"AI service error: {str(error)}",
        )