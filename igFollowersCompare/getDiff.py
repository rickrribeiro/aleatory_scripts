import fileHelper
from dotenv import load_dotenv
import os
load_dotenv()

current = os.getenv('CURRENT')
old = os.getenv('OLD')

if current == None or old == None:
    print('Please set the CURRENT and OLD env variables')
    exit()
    
followers = fileHelper.getProfilesFromInstastuffFile(f'./followers-{current}.txt')
following = fileHelper.getProfilesFromInstastuffFile(f'./following-{current}.txt')

notFollowing = []
notFollower = []
for follower in followers:
    if follower not in following:
        notFollowing.append(follower)
for follow in following:
    if follow not in followers:
        notFollower.append(follow)

f = open(f'not-followers-{current}.txt', "a")
f.write(str(notFollower))
f.close()
print(f'Not followers: {len(notFollower)}')
f = open(f"not-following-{current}.txt", "a")
f.write(str(notFollowing))
print(f'Not following: {len(notFollowing)}')
f.close()