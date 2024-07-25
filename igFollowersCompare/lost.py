import os
import fileHelper
from dotenv import load_dotenv
load_dotenv()
#followersOld = fileHelper.getProfilesFromIGExportToolsFile('rickrribeiro_followers_14-11.csv')
current=os.getenv('CURRENT')
old=os.getenv('OLD')
followers = fileHelper.getProfilesFromInstastuffFile(f'./followers-{current}.txt')
followersOld = fileHelper.getProfilesFromInstastuffFile(f'./data/followers-{old}.txt')


lostFollowers = []
for follower in followersOld:
    if follower not in followers:
        lostFollowers.append(follower)

newFollowers = []
for follower in followers:
    if follower not in followersOld:
        newFollowers.append(follower)

f = open(f'lost-followers-{current}.txt', "a")
f.write(str(lostFollowers))
f.close()
print(f'lost followers: {len(lostFollowers)}')

f = open(f'new-followers-{current}.txt', "a")
f.write(str(newFollowers))
f.close()
print(f'new followers: {len(newFollowers)}')