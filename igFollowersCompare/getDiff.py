import fileHelper

followers = fileHelper.getProfilesFromInstastuffFile('./followers.txt')
following = fileHelper.getProfilesFromInstastuffFile('./following.txt')

notFollowing = []
notFollower = []
for follower in followers:
    if follower not in following:
        notFollowing.append(follower)
for follow in following:
    if follow not in followers:
        notFollower.append(follow)

f = open("not-followers-23_03.txt", "a")
f.write(str(notFollower))
f.close()
print(f'Not followers: {len(notFollower)}')
f = open("not-following-23_03.txt", "a")
f.write(str(notFollowing))
print(f'Not following: {len(notFollowing)}')
f.close()