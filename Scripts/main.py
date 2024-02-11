import requests
import re
import json
from fastapi import FastAPI

def get_pnr_status(pnr):
    # Specify the URL of the website
    url = f"https://www.confirmtkt.com/pnr-status/{pnr}"

    # Send an HTTP request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Extract the HTML content
        html_content = response.text

        # Define a regular expression pattern to match the desired data structure
        pattern = r'data\s*=\s*({.*?;)'

        # Search for the pattern in the HTML content
        match = re.search(pattern, html_content, re.DOTALL)

        # Check if a match is found
        if match:
            # Extract the JSON data
            json_data = match.group(1).replace(';', '')
            try:
                # Load the JSON string to get a Python object
                parsed_data = json.loads(json_data)

                return parsed_data
            except json.JSONDecodeError as e:
                print("JSON decoding error:", e)
                return None
        else:
            print("No JSON data found on the webpage.")
    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
        return None

app = FastAPI()

@app.get("/status")
async def prn_status(pnr: str):
    prn_json = get_pnr_status(pnr)
    return prn_json
