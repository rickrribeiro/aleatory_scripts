import fileHelper

followers = fileHelper.getProfilesFromInstastuffFile('./followers.txt')
#followersOld = fileHelper.getProfilesFromIGExportToolsFile('rickrribeiro_followers_14-11.csv')
followersOld = fileHelper.getProfilesFromInstastuffFile('./followers_23_03.txt')


lostFollowers = []
for follower in followersOld:
    if follower not in followers:
        lostFollowers.append(follower)

f = open("lost-followers-23_03.txt", "a")
f.write(str(lostFollowers))
f.close()
print(f'lost followers: {len(lostFollowers)}')
