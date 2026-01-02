import requests
import sys
import json
import os

# usage: python send_sms.py <phone_number> <message>

def send_sms(phone_no, message):
    # API URL for Fast2SMS (Free Tier / Dev)
    url = "https://www.fast2sms.com/dev/bulkV2"
    
    # You need to get your own API KEY from https://www.fast2sms.com/
    # and set it in your environment variables or paste it here temporarily.
    api_key = os.environ.get("FAST2SMS_API_KEY", "YOUR_API_KEY_HERE")

    payload = {
        "route": "q", # 'q' is for quick sms (often free tier compatible)
        "message": message,
        "language": "english",
        "flash": 0,
        "numbers": phone_no,
    }

    headers = {
        "authorization": api_key,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        print(f"SMS Response: {response.text}")
        return response.json()
    except Exception as e:
        print(f"Error sending SMS: {e}")
        return None

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python send_sms.py <phone_number> <message>")
        # For testing purposes if run without args, just exit or log
        sys.exit(1)

    phone_number = sys.argv[1]
    msg_content = sys.argv[2]
    
    # print(f"Attempting to send to {phone_number}...")
    send_sms(phone_number, msg_content)
