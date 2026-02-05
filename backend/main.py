from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Go Macro API", description="Backend for Go Macro PWA")

# Allows App to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev only.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Go Macro API is running!"}

@app.get("/recipes")
def get_recipes(energy: str = "medium"):
    # This is for connecting to Supabase later
    return [
        {"id": 1, "name": "Avocado Toast", "energy": "low", "prep_time": 5},
        {"id": 2, "name": "Chicken Stir Fry", "energy": "medium", "prep_time": 20}
    ]