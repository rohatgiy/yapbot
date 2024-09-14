import cohere
import os
from dotenv import load_dotenv

load_dotenv()

COHERE_API_KEY = os.getenv('COHERE_API_KEY')

co = cohere.Client(COHERE_API_KEY)
response = co.chat(
	message="hello world!"
)

print(response)
