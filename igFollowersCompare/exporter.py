#!/usr/bin/env python3

from instastuff import *
from dotenv import load_dotenv
import os

load_dotenv()
    
# Numeric user id of the target user account.
#
# To find a user id:
# open the profile
# open developer tools (right click in the page -> inspect)
# go to network tab
# click in followers
# scroll the followers list and look for a request with /friendship
# the id is in the request url
# Example:
#   target_user_id = '234567890'
target_user_id = os.getenv('USER_ID')

# Value of the `sessionid` cookie when logged into Instagram web.
#
# To find the session id cookie use Chrome Developer Tools > Application > Cookies.
#
# Example: 
#   session_id = '345678901%3AaGVsbG8geW91%3A1'
session_id = os.getenv('SESSION_TOKEN')

# verify envs
current = os.getenv('CURRENT')
old = os.getenv('OLD')

if not current or not old or not target_user_id or not session_id:
    print('Please set the CURRENT and OLD env variables')
    exit()

# Run the exporter.
#
# Note: a response status code 429 usually indicates an invalid session id.
write_users(target_user_id, session_id)